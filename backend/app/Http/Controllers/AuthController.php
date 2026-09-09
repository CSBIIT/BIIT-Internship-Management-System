<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Mail\SendPasswordMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\DB;
use Exception;

class AuthController extends Controller
{
    private function generateSecurePassword(): string
{
    $uppercase = 'ABCDEFGHJKLMNPQRSTUVWXYZ';
    $lowercase = 'abcdefghijkmnopqrstuvwxyz';
    $numbers   = '23456789';
    $special   = '!@#$%^&*';

    // 1. Guarantee at least one character from each required set
    $pass = [
        $uppercase[random_int(0, strlen($uppercase) - 1)],
        $lowercase[random_int(0, strlen($lowercase) - 1)],
        $numbers[random_int(0, strlen($numbers) - 1)],
        $special[random_int(0, strlen($special) - 1)],
    ];

    // 2. Fill the remaining 4 characters from the combined pool
    $allChars = $uppercase . $lowercase . $numbers . $special;
    for ($i = 0; $i < 4; $i++) {
        $pass[] = $allChars[random_int(0, strlen($allChars) - 1)];
    }

    // 3. Shuffle array to randomize positions
    shuffle($pass);

    return implode('', $pass);
}
    // 1. SIGNUP: Enforce @biit.edu.pk, verify against biit_students table, generate 8-digit password
    public function signup(Request $request)
    {
        $request->validate([
            'email' => 'required|email'
        ]);

        $email = strtolower(trim($request->email));

        // Enforce BIIT domain syntax
        if (!str_ends_with($email, '@biit.edu.pk')) {
            return response()->json([
                'message' => 'Only official BIIT email addresses (@biit.edu.pk) are allowed.'
            ], 422);
        }

        // Fast indexed check against biit_students table in phpMyAdmin
        $isRegisteredStudent = DB::table('biit_students')->where('email', $email)->exists();
        if (!$isRegisteredStudent) {
            return response()->json([
                'message' => 'This email does not exist in BIIT records. Please enter a valid registered BIIT email.'
            ], 422);
        }

        // Prevent duplicate user signup
        if (User::where('email', $email)->exists()) {
            return response()->json([
                'message' => 'This BIIT email is already registered. Please login instead.'
            ], 400);
        }

        // Generate random 8-digit password
        $rawPassword = $this->generateSecurePassword();

        // Create User account
        $user = User::create([
            'email' => $email,
            'password' => Hash::make($rawPassword),
            'role' => 'student'
        ]);

        // Send Email with try-catch fallback
        try {
            Mail::to($email)->send(new SendPasswordMail($rawPassword, 'Signup'));
        } catch (Exception $e) {
            // Roll back user creation if email fails
            $user->delete();

            return response()->json([
                'message' => 'Unable to send email to this address. Please ensure mail server settings are configured.'
            ], 500);
        }

        return response()->json([
            'status' => 'success',
            'message' => 'An 8-digit password has been sent to your mail. Get logged in!'
        ], 201);
    }

    // 2. LOGIN: Validates credentials & handles Sanctum tokens
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

        $email = strtolower(trim($request->email));
        $user = User::where('email', $email)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json([
                'message' => 'Invalid email or password. Please try again.'
            ], 401);
        }

        // Create Sanctum Token
        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'status' => 'success',
            'message' => 'Logged in successfully',
            'token' => $token,
            'user' => [
                'id' => $user->id,
                'email' => $user->email,
                'role' => $user->role
            ]
        ], 200);
    }

    // 3. FORGOT PASSWORD: Reset 8-digit password and resend
    public function forgotPassword(Request $request)
    {
        $request->validate([
            'email' => 'required|email'
        ]);

        $email = strtolower(trim($request->email));
        $user = User::where('email', $email)->first();

        if (!$user) {
            return response()->json([
                'message' => 'No account found with this BIIT email address.'
            ], 404);
        }

        // Generate new 8-digit password
        $newPassword = $this->generateSecurePassword();
        $oldPasswordHash = $user->password;

        $user->password = Hash::make($newPassword);
        $user->save();

        // Safely attempt to send mail
        try {
            Mail::to($user->email)->send(new SendPasswordMail($newPassword, 'Forgot'));
        } catch (Exception $e) {
            // Revert password change if mail dispatch fails
            $user->password = $oldPasswordHash;
            $user->save();

            return response()->json([
                'message' => 'Unable to send new password email. Please try again later.'
            ], 500);
        }

        return response()->json([
            'status' => 'success',
            'message' => 'A new 8-digit password has been sent to your mail. Get logged in!'
        ], 200);
    }
}