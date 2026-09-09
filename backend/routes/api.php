<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\JobController;
use App\Http\Controllers\ApplicationController;
use App\Http\Controllers\StudentProfileController;

Route::post('/signup', [AuthController::class, 'signup']);

Route::post('/login', [AuthController::class, 'login']);

Route::post('/forgot-password', [AuthController::class, 'forgotPassword']);

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/student/dashboard-data', [DashboardController::class, 'getDashboardData']);
});

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/student/jobs', [JobController::class, 'getJobs']);
});

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/student/applications', [ApplicationController::class, 'getStudentApplications']);
});

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/student/profile', [StudentProfileController::class, 'getProfile']);
    Route::post('/student/profile', [StudentProfileController::class, 'updateProfile']);
});