<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class StudentProfileController extends Controller
{
    /**
     * Fetch complete student profile
     */
    public function getProfile(Request $request)
    {
        $user = $request->user();
        $profile = DB::table('student_profiles')->where('user_id', $user->id)->first();

        return response()->json([
            'basic' => [
                'name' => $user->name,
                'email' => $user->email,
                'rollNumber' => $profile->roll_number ?? 'BIIT-2026-01',
                'cgpa' => $profile->cgpa ?? '3.80',
                'phone' => $profile->phone ?? '',
                'location' => 'Islamabad, Pakistan',
                'summary' => $profile->summary ?? '',
            ],
            'academic' => [
                'degree' => $profile->degree ?? 'BS Computer Science',
                'currentSemester' => $profile->current_semester ?? '7th',
                'university' => 'BIIT',
                'expectedGraduation' => $profile->expected_graduation ?? '2026',
            ],
            'technicalSkills' => !empty($profile->skills) ? array_map('trim', explode(',', $profile->skills)) : [],
            'softSkills' => $profile->soft_skills ? json_decode($profile->soft_skills, true) : [],
            'experiences' => $profile->experiences ? json_decode($profile->experiences, true) : [],
            'projects' => $profile->projects ? json_decode($profile->projects, true) : [],
            'photoUrl' => $profile->profile_photo ? url(Storage::url($profile->profile_photo)) : null,
            'coverPhotoUrl' => $profile->cover_photo ? url(Storage::url($profile->cover_photo)) : null,
        ]);
    }

    /**
     * Save/Update student profile draft
     */
    public function updateProfile(Request $request)
    {
        $user = $request->user();
        $data = $request->all();

        $updateData = [
            'updated_at' => now(),
        ];

        if (isset($data['basic'])) {
            $updateData['phone'] = $data['basic']['phone'] ?? null;
            $updateData['summary'] = $data['basic']['summary'] ?? null;
        }

        if (isset($data['academic'])) {
            $updateData['degree'] = $data['academic']['degree'] ?? null;
            $updateData['current_semester'] = $data['academic']['currentSemester'] ?? null;
            $updateData['expected_graduation'] = $data['academic']['expectedGraduation'] ?? null;
        }

        if (isset($data['technicalSkills'])) {
            $updateData['skills'] = is_array($data['technicalSkills'])
                ? implode(', ', $data['technicalSkills'])
                : $data['technicalSkills'];
        }

        if (isset($data['softSkills'])) {
            $updateData['soft_skills'] = json_encode($data['softSkills']);
        }

        if (isset($data['experiences'])) {
            $updateData['experiences'] = json_encode($data['experiences']);
        }

        if (isset($data['projects'])) {
            $updateData['projects'] = json_encode($data['projects']);
        }

        // Upload Profile & Cover Images
        if ($request->hasFile('profile_photo')) {
            $path = $request->file('profile_photo')->store('profiles', 'public');
            $updateData['profile_photo'] = $path;
        }

        if ($request->hasFile('cover_photo')) {
            $path = $request->file('cover_photo')->store('covers', 'public');
            $updateData['cover_photo'] = $path;
        }

        DB::table('student_profiles')->updateOrInsert(
            ['user_id' => $user->id],
            $updateData
        );

        return response()->json(['message' => 'Profile saved successfully']);
    }
}