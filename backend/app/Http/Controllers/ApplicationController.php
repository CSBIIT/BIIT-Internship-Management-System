<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class ApplicationController extends Controller
{
    public function getStudentApplications(Request $request)
    {
        $user = $request->user();

        // 1. Fetch live application counts by status
        $accepted = DB::table('job_applications')->where('user_id', $user->id)->where('status', 'accepted')->count();
        $pending = DB::table('job_applications')->where('user_id', $user->id)->where('status', 'pending')->count();
        $interviews = DB::table('job_applications')->where('user_id', $user->id)->where('status', 'interview-scheduled')->count();
        $rejected = DB::table('job_applications')->where('user_id', $user->id)->where('status', 'rejected')->count();

        // 2. Fetch detailed list of user applications joined with jobs
        $applications = DB::table('job_applications')
            ->join('jobs', 'job_applications.job_id', '=', 'jobs.id')
            ->where('job_applications.user_id', $user->id)
            ->select(
                'job_applications.id',
                'jobs.title as role',
                'jobs.company_name as company',
                'jobs.location',
                'job_applications.created_at as appliedDate',
                'job_applications.status',
                'job_applications.resume_name as resumeName'
            )
            ->orderBy('job_applications.created_at', 'desc')
            ->get()
            ->map(function ($app) {
                // Map status identifiers to user-friendly display labels
                $statusLabels = [
                    'accepted' => 'Accepted',
                    'pending' => 'Pending',
                    'interview-scheduled' => 'Interview Scheduled',
                    'rejected' => 'Rejected',
                ];

                return [
                    'id' => $app->id,
                    'role' => $app->role,
                    'company' => $app->company,
                    'location' => $app->location ?? 'Remote',
                    'appliedDate' => Carbon::parse($app->appliedDate)->format('M d, Y'),
                    'status' => $app->status,
                    'statusLabel' => $statusLabels[$app->status] ?? ucfirst($app->status),
                    'resumeName' => $app->resumeName ?? 'Student_Resume.pdf',
                ];
            });

        return response()->json([
            'stats' => [
                'accepted' => $accepted,
                'pending' => $pending,
                'interviews' => $interviews,
                'rejected' => $rejected,
            ],
            'applications' => $applications,
        ]);
    }
}