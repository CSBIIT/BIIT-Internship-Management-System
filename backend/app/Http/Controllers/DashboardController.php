<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class DashboardController extends Controller
{
    public function getDashboardData(Request $request)
    {
        $user = $request->user();

        // 1. Fetch Profile Data
        $profile = DB::table('student_profiles')->where('user_id', $user->id)->first();

        // 2. Calculate Dynamic Completion Percentage
        $percentage = 0;

        if ($profile) {
            // A. Academic Info (Pre-filled from University) = 25% Initial Score
            if (!empty($profile->degree) && !empty($profile->current_semester)) {
                $percentage += 25;
            }

            // B. Basic Info (Student Editable: Phone & Summary) = 30%
            if (!empty($profile->phone) && !empty($profile->summary)) {
                $percentage += 30;
            }

            // C. Technical Skills (Mandatory for Job Recommendations) = 25%
            if (!empty(trim($profile->skills ?? ''))) {
                $percentage += 25;
            }

            // D. Optional Experience = 10%
            if (!empty($profile->experiences) && $profile->experiences !== '[]') {
                $percentage += 10;
            }

            // E. Optional Projects = 10%
            if (!empty($profile->projects) && $profile->projects !== '[]') {
                $percentage += 10;
            }
        }

        // 3. Stats Calculation
        $applied = DB::table('job_applications')->where('user_id', $user->id)->count();
        $accepted = DB::table('job_applications')->where('user_id', $user->id)->where('status', 'accepted')->count();
        $pending = DB::table('job_applications')->where('user_id', $user->id)->where('status', 'pending')->count();
        $rejected = DB::table('job_applications')->where('user_id', $user->id)->where('status', 'rejected')->count();

        // 4. Scheduled Interviews
        $interviews = DB::table('job_applications')
            ->join('jobs', 'job_applications.job_id', '=', 'jobs.id')
            ->where('job_applications.user_id', $user->id)
            ->where('job_applications.status', 'interview-scheduled')
            ->select('jobs.company_name as company', 'jobs.title as role', 'job_applications.interview_date as date', 'job_applications.status')
            ->orderBy('job_applications.interview_date', 'asc')
            ->take(2)
            ->get();

        // 5. Upcoming Deadlines
        $now = Carbon::now();
        $fiveDays = Carbon::now()->addDays(5);
        $deadlines = DB::table('jobs')
            ->where('deadline', '>=', $now)
            ->where('deadline', '<=', $fiveDays)
            ->select('id', 'title', 'company_name as company', 'deadline')
            ->orderBy('deadline', 'asc')
            ->take(2)
            ->get()
            ->map(function ($job) use ($now) {
                $daysLeft = Carbon::parse($job->deadline)->diffInDays($now);
                return [
                    'id' => $job->id,
                    'title' => $job->title,
                    'company' => $job->company,
                    'daysLeft' => $daysLeft === 0 ? 1 : $daysLeft,
                ];
            });

        // 6. Recommended Jobs
        $recommended = [];
        if (!empty(trim($profile->skills ?? ''))) {
            $skillsList = array_map('trim', explode(',', strtolower($profile->skills)));
            $allActiveJobs = DB::table('jobs')
                ->where('deadline', '>=', $now)
                ->select('id', 'title', 'company_name as company', 'deadline', 'required_skills')
                ->get();

            $recommended = $allActiveJobs->map(function ($job) use ($skillsList) {
                $jobSkills = array_map('trim', explode(',', strtolower($job->required_skills ?? '')));
                $matches = count(array_intersect($skillsList, $jobSkills));

                return [
                    'id' => $job->id,
                    'title' => $job->title,
                    'company' => $job->company,
                    'deadline' => Carbon::parse($job->deadline)->format('M d, Y'),
                    'match_score' => $matches,
                ];
            })
            ->sortByDesc('match_score')
            ->take(3)
            ->values();
        }

        return response()->json([
            'completion_percentage' => $percentage,
            'stats' => [
                'applied' => $applied,
                'accepted' => $accepted,
                'pending' => $pending,
                'rejected' => $rejected,
            ],
            'interviews' => $interviews,
            'deadlines' => $deadlines,
            'recommended' => $recommended,
        ], 200);
    }
}