<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('student_profiles', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            
            // University Pre-filled Data
            $table->string('roll_number')->default('BIIT-2026-01');
            $table->string('cgpa')->default('3.80');
            $table->string('degree')->default('BS Software Engineering');
            $table->string('current_semester')->default('5th');
            $table->string('expected_graduation')->default('June 2027');
            $table->string('location')->default('Rawalpindi, Pakistan');
            
            // Student Editable Data (Initially NULL/Empty)
            $table->string('phone')->nullable();
            $table->text('summary')->nullable();
            $table->text('skills')->nullable();
            $table->json('soft_skills')->nullable();
            $table->json('experiences')->nullable();
            $table->json('projects')->nullable();
            $table->string('profile_photo')->nullable();
            $table->string('cover_photo')->nullable();
            
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('student_profiles');
    }
};