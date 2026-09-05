import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Sparkles } from 'lucide-react';

import EditProfileTabs from '../components/profile/EditProfileTabs';

import {
  BasicInfoSection,
  AcademicInfoSection,
  SkillsSection,
  ExperienceSection,
  ProjectsSection,
  ResumeSection,
} from '../components/profile/EditProfileSections';

const sectionMap = {
  basic: BasicInfoSection,
  academic: AcademicInfoSection,
  skills: SkillsSection,
  experience: ExperienceSection,
  projects: ProjectsSection,
  resume: ResumeSection,
};

const EditProfilePage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('basic');

  const ActiveSection = sectionMap[activeTab];

  const handleCancel = () => navigate('/student/my-profile');

  const handleSave = () => {
    // TODO: replace with real API call for the active section's data
    console.log('Saving section:', activeTab);
    navigate('/student/my-profile');
  };

  return (
    <div className="space-y-6 max-w-5xl overflow-hidden">

      {/* =====================================================
          PAGE HEADER
      ====================================================== */}

      <div
        className="
          group
          relative
          overflow-hidden
          rounded-2xl
          border
          border-gray-100
          bg-white
          p-5
          shadow-sm
          animate-fade-in-up
          transition-all
          duration-500
          ease-out
          hover:-translate-y-1
          hover:shadow-lg
          sm:p-6
        "
        style={{
          animationDelay: '0ms',
        }}
      >

        {/* Animated green top line */}
        <div
          className="
            pointer-events-none
            absolute
            left-0
            top-0
            z-30
            h-0.5
            w-0
            bg-brand
            transition-all
            duration-500
            ease-out
            group-hover:w-full
          "
        />

        {/* Green glow */}
        <div
          className="
            pointer-events-none
            absolute
            -right-16
            -top-16
            z-0
            h-40
            w-40
            rounded-full
            bg-brand/5
            blur-2xl
            transition-all
            duration-700
            group-hover:scale-150
            group-hover:bg-brand/10
          "
        />

        {/* Decorative circle */}
        <div
          className="
            pointer-events-none
            absolute
            -bottom-10
            left-1/3
            z-0
            h-20
            w-20
            rounded-full
            bg-emerald-100/40
            blur-xl
            transition-transform
            duration-700
            group-hover:scale-125
          "
        />

        <div className="relative z-10">

          {/* Small label */}
          <div className="mb-2 flex items-center gap-2">

            <Sparkles
              size={15}
              className="
                text-brand
                transition-transform
                duration-500
                group-hover:rotate-12
                group-hover:scale-110
              "
            />

            <span
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.16em]
                text-brand
              "
            >
              Profile Settings
            </span>

          </div>

          {/* Back link */}
          <Link
            to="/student/my-profile"
            className="
              mb-2
              flex
              w-fit
              items-center
              gap-1
              text-sm
              text-gray-500
              transition-all
              duration-300
              hover:gap-2
              hover:text-brand
            "
          >
            <ArrowLeft size={14} />
            My Profile
          </Link>

          <h1 className="mb-1 text-xl font-bold text-gray-900 sm:text-2xl">
            Edit Profile
          </h1>

          <p className="max-w-2xl text-sm leading-relaxed text-gray-500">
            Update your information and manage your profile.
          </p>

        </div>

      </div>


      {/* =====================================================
          EDIT PROFILE CONTENT
      ====================================================== */}

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">

        {/* ===================================================
            PROFILE TABS
        ==================================================== */}

        <div
          className="
            group
            relative
            overflow-hidden
            rounded-2xl
            animate-fade-in-up
            transition-all
            duration-500
            ease-out
            hover:-translate-y-1
            hover:shadow-lg
          "
          style={{
            animationDelay: '150ms',
          }}
        >

          {/* Animated green top line */}
          <div
            className="
              pointer-events-none
              absolute
              left-0
              top-0
              z-30
              h-0.5
              w-0
              bg-brand
              transition-all
              duration-500
              ease-out
              group-hover:w-full
            "
          />

          {/* Green glow */}
          <div
            className="
              pointer-events-none
              absolute
              -right-10
              -top-10
              z-0
              h-24
              w-24
              rounded-full
              bg-brand/0
              blur-2xl
              transition-all
              duration-500
              group-hover:scale-150
              group-hover:bg-brand/10
            "
          />

          <div className="relative z-10">

            <EditProfileTabs
              activeTab={activeTab}
              onTabChange={setActiveTab}
            />

          </div>

        </div>


        {/* ===================================================
            ACTIVE EDIT SECTION
        ==================================================== */}

        <div
          className="
            group
            relative
            overflow-hidden
            rounded-2xl
            animate-fade-in-up
            transition-all
            duration-500
            ease-out
            hover:-translate-y-1
            hover:shadow-lg
            lg:col-span-3
          "
          style={{
            animationDelay: '250ms',
          }}
        >

          {/* Animated green top line */}
          <div
            className="
              pointer-events-none
              absolute
              left-0
              top-0
              z-30
              h-0.5
              w-0
              bg-brand
              transition-all
              duration-500
              ease-out
              group-hover:w-full
            "
          />

          {/* Green glow */}
          <div
            className="
              pointer-events-none
              absolute
              -right-16
              -top-16
              z-0
              h-32
              w-32
              rounded-full
              bg-brand/0
              blur-2xl
              transition-all
              duration-700
              group-hover:scale-150
              group-hover:bg-brand/10
            "
          />

          <div
            key={activeTab}
            className="
              relative
              z-10
              animate-fade-in-up
            "
          >

            <ActiveSection
              onCancel={handleCancel}
              onSave={handleSave}
            />

          </div>

        </div>

      </div>

    </div>
  );
};

export default EditProfilePage;