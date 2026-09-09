<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class JobController extends Controller
{
    public function getJobs(Request $request)
    {
        $user = $request->user();
        $search = $request->query('search', '');
        $filter = $request->query('filter'); // 'recommended', 'expiring-soon', or null

        // 1. Extract Dropdown Filters
        $category = $request->query('category');         // e.g., 'All Jobs', 'Engineering', 'Design'
        $workplace = $request->query('workplace');       // e.g., 'Remote', 'Onsite', 'Hybrid'
        $datePosted = $request->query('datePosted');     // e.g., '24h', '7d', '30d'
        $contractType = $request->query('contractType'); // e.g., 'Internship - Paid', 'Full-time'
        $location = $request->query('location');         // e.g., 'Islamabad', 'Lahore', 'Karachi'

        $now = Carbon::now();
        $query = DB::table('jobs')->where('deadline', '>=', $now);

        // 2. Search Filter
        if (!empty($search)) {
            $query->where(function ($q) use ($search) {
                $q->where('title', 'like', "%{$search}%")
                  ->orWhere('company_name', 'like', "%{$search}%")
                  ->orWhere('location', 'like', "%{$search}%");
            });
        }

        // 3. Dashboard Quick Pill Filters
        if ($filter === 'expiring-soon') {
            $fiveDaysFromNow = Carbon::now()->addDays(5);
            $query->where('deadline', '<=', $fiveDaysFromNow);
        }

        // 4. Dropdown Filters Logic
        if (!empty($category) && $category !== 'All Jobs') {
            $query->where('category', $category);
        }

        if (!empty($workplace) && $workplace !== 'All Workplaces') {
            $query->where('workplace_type', $workplace);
        }

        if (!empty($contractType) && $contractType !== 'Contract Type') {
            $query->where('job_type', $contractType);
        }

        if (!empty($location) && $location !== 'All Locations') {
            $query->where('location', $location);
        }

        if (!empty($datePosted) && $datePosted !== 'Date posted') {
            if ($datePosted === '24h') {
                $query->where('created_at', '>=', Carbon::now()->subHours(24));
            } elseif ($datePosted === '7d') {
                $query->where('created_at', '>=', Carbon::now()->subDays(7));
            } elseif ($datePosted === '30d') {
                $query->where('created_at', '>=', Carbon::now()->subDays(30));
            }
        }

        // 5. Fetch & Format Data
        $jobs = $query->get()->map(function ($job) {
            return [
                'id' => $job->id,
                'title' => $job->title,
                'company' => $job->company_name,
                'location' => $job->location ?? 'Remote',
                'type' => $job->job_type ?? 'Internship - Paid',
                'workplaceType' => $job->workplace_type ?? 'Remote',
                'postedAgo' => 'Posted ' . Carbon::parse($job->created_at)->diffForHumans(),
                'deadline' => Carbon::parse($job->deadline)->format('M d, Y'),
                'required_skills' => $job->required_skills ?? '',
            ];
        });

        // 6. Profile Skill Recommendation Sort
        if ($filter === 'recommended') {
            $studentSkills = DB::table('student_profiles')
                ->where('user_id', $user->id)
                ->value('skills');

            $skillsList = $studentSkills ? array_map('trim', explode(',', strtolower($studentSkills))) : [];

            $jobs = $jobs->map(function ($job) use ($skillsList) {
                $jobSkills = array_map('trim', explode(',', strtolower($job['required_skills'])));
                $matches = count(array_intersect($skillsList, $jobSkills));
                $job['match_score'] = $matches;
                return $job;
            })->sortByDesc('match_score')->values();
        }

        return response()->json(['jobs' => $jobs], 200);
    }
}