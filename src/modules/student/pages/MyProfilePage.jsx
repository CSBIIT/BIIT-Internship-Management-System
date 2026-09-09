import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Hash,
  GraduationCap,
  Mail,
  Smartphone,
  Monitor,
  Briefcase,
  FolderKanban,
  Wand2,
  FileText,
  Loader2,
} from 'lucide-react';

import ProfileHeader from '../components/profile/ProfileHeader';
import InfoTile from '../components/profile/InfoTile';
import ProfileResumeSection from '../components/profile/ProfileResumeSection';
import { useProfilePhoto } from '../../../context/ProfilePhotoContext';
import { useProfile } from '../../../context/ProfileContext';
import {
  ProfessionalSummary,
  AcademicInfo,
  SkillsList,
  ExperienceList,
  ProjectsList,
} from '../components/profile/ProfileSections';

const resumeData = {
  url: 'https://your-api.com/resumes/ali-khan-resume.pdf',
  name: 'Ali_Khan_Resume.pdf',
  size: '1.2 MB',
  updatedAgo: '2 days ago',
};

const MyProfilePage = () => {
  const [searchParams] = useSearchParams();
  const skillsRef = useRef(null);
  const [loading, setLoading] = useState(true);

  const { photoUrl, coverPhotoUrl, setPhotoUrl, setCoverPhotoUrl } = useProfilePhoto();
  const { profileData, updateProfileSection } = useProfile();

  // Fetch full persistent profile from Laravel on load
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const token = localStorage.getItem('token') || sessionStorage.getItem('token');
        const res = await fetch('http://127.0.0.1:8001/api/student/profile', {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (res.ok) {
          const data = await res.json();
          updateProfileSection('basic', data.basic);
          updateProfileSection('academic', data.academic);
          updateProfileSection('technicalSkills', data.technicalSkills);
          updateProfileSection('softSkills', data.softSkills);
          updateProfileSection('experiences', data.experiences);
          updateProfileSection('projects', data.projects);

          if (data.photoUrl) setPhotoUrl(data.photoUrl);
          if (data.coverPhotoUrl) setCoverPhotoUrl(data.coverPhotoUrl);
        }
      } catch (err) {
        console.error('Failed to load profile data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, []);

  useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab === 'skills' && skillsRef.current) {
      setTimeout(() => {
        skillsRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 300);
    }
  }, [searchParams]);

  if (loading) {
    return (
      <div className="flex h-64 items-center justify-center">
        <Loader2 size={32} className="animate-spin text-brand" />
      </div>
    );
  }

  const { basic, academic, technicalSkills, softSkills, experiences, projects } = profileData;

  const profile = {
    name: basic.name,
    degree: academic.degree,
    semester: `${academic.currentSemester} Semester`,
    university: academic.university,
    location: basic.location,
    photoUrl,
    coverPhotoUrl,
  };

  const infoTiles = [
    { icon: Hash, label: 'Roll Number', value: basic.rollNumber || 'BIIT-2026-01' },
    { icon: GraduationCap, label: 'CGPA', value: academic.cgpa || '3.80' },
    { icon: Mail, label: 'Email', value: basic.email },
    { icon: Smartphone, label: 'Phone', value: basic.phone || 'Not provided' },
  ];

  const projectsWithIcons = (projects || []).map((proj) => ({
    ...proj,
    icon: proj.icon || Monitor,
  }));

  return (
    <div className="space-y-6 overflow-hidden">
      {/* PROFILE HEADER */}
      <div className="group relative overflow-hidden rounded-2xl animate-fade-in-up transition-all duration-500 hover:-translate-y-1 hover:shadow-lg">
        <div className="pointer-events-none absolute left-0 top-0 z-30 h-0.5 w-0 bg-brand transition-all duration-500 group-hover:w-full" />
        <div className="relative z-10">
          <ProfileHeader profile={profile} />
        </div>
      </div>

      {/* INFORMATION TILES (FIXED DATA) */}
      <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
        {infoTiles.map((tile, index) => (
          <div
            key={tile.label}
            className="group relative overflow-hidden rounded-xl border border-gray-100 bg-white p-3.5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:flex-1 sm:min-w-fit"
            style={{ animationDelay: `${120 + index * 100}ms` }}
          >
            <div className="pointer-events-none absolute left-0 top-0 z-30 h-0.5 w-0 bg-brand transition-all duration-500 group-hover:w-full" />
            <div className="relative z-10 h-full">
              <InfoTile {...tile} className="w-full" />
            </div>
          </div>
        ))}
      </div>

      {/* PROFESSIONAL SUMMARY */}
      <div className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-lg">
        <div className="pointer-events-none absolute left-0 top-0 z-30 h-0.5 w-0 bg-brand transition-all duration-500 group-hover:w-full" />
        <div className="relative z-10">
          {basic?.summary ? (
            <ProfessionalSummary summary={basic.summary} />
          ) : (
            <div className="flex flex-col items-center justify-center py-6 text-center">
              <FileText size={32} className="mb-2 text-gray-300" />
              <p className="text-xs font-semibold text-gray-700">No professional summary added yet</p>
              <p className="text-[11px] text-gray-400">Edit your profile to add a brief background about yourself.</p>
            </div>
          )}
        </div>
      </div>

      {/* ACADEMIC + SKILLS */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Academic Card */}
        <div className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-lg">
          <div className="pointer-events-none absolute left-0 top-0 z-30 h-0.5 w-0 bg-brand transition-all duration-500 group-hover:w-full" />
          <div className="relative z-10 h-full">
            <AcademicInfo
              degree={academic.degree}
              currentSemester={academic.currentSemester}
              expectedGraduation={academic.expectedGraduation}
            />
          </div>
        </div>

        {/* Skills Card */}
        <div
          ref={skillsRef}
          className={`group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-lg ${
            searchParams.get('tab') === 'skills' ? 'ring-2 ring-brand ring-offset-2' : ''
          }`}
        >
          <div className="pointer-events-none absolute left-0 top-0 z-30 h-0.5 w-0 bg-brand transition-all duration-500 group-hover:w-full" />
          <div className="relative z-10 h-full">
            {(technicalSkills || []).length > 0 || (softSkills || []).length > 0 ? (
              <SkillsList technicalSkills={technicalSkills} softSkills={softSkills} />
            ) : (
              <div className="flex h-full flex-col items-center justify-center py-6 text-center">
                <Wand2 size={32} className="mb-2 text-brand/50" />
                <p className="text-xs font-semibold text-gray-700">No skills added yet</p>
                <p className="text-[11px] text-gray-400">Add technical skills to get tailored job recommendations.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* EXPERIENCE */}
      <div className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-lg">
        <div className="pointer-events-none absolute left-0 top-0 z-30 h-0.5 w-0 bg-brand transition-all duration-500 group-hover:w-full" />
        <div className="relative z-10">
          {(experiences || []).length > 0 ? (
            <ExperienceList experiences={experiences} />
          ) : (
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <Briefcase size={36} className="mb-2 text-gray-300" />
              <p className="text-xs font-semibold text-gray-700">No work experience added yet</p>
              <p className="text-[11px] text-gray-400">Optional: Add internships or job experiences to boost your profile score.</p>
            </div>
          )}
        </div>
      </div>

      {/* PROJECTS */}
      <div className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-lg">
        <div className="pointer-events-none absolute left-0 top-0 z-30 h-0.5 w-0 bg-brand transition-all duration-500 group-hover:w-full" />
        <div className="relative z-10">
          {projectsWithIcons.length > 0 ? (
            <ProjectsList projects={projectsWithIcons} />
          ) : (
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <FolderKanban size={36} className="mb-2 text-gray-300" />
              <p className="text-xs font-semibold text-gray-700">No academic or personal projects added yet</p>
              <p className="text-[11px] text-gray-400">Optional: Showcase software projects to reach 100% profile completion.</p>
            </div>
          )}
        </div>
      </div>

      {/* RESUME */}
      <div className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-lg">
        <div className="pointer-events-none absolute left-0 top-0 z-30 h-0.5 w-0 bg-brand transition-all duration-500 group-hover:w-full" />
        <div className="relative z-10">
          <ProfileResumeSection
            resumeUrl={resumeData.url}
            resumeName={resumeData.name}
            fileSize={resumeData.size}
            updatedAgo={resumeData.updatedAgo}
            onUpload={(file) => {
              console.log('Uploading new resume:', file);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default MyProfilePage;