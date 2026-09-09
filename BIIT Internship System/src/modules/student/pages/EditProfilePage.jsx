import { useState, useEffect } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { ArrowLeft, Sparkles } from 'lucide-react';

import EditProfileTabs from '../components/profile/EditProfileTabs';
import { useProfile } from '../../../context/ProfileContext';
import { useProfilePhoto } from '../../../context/ProfilePhotoContext';

import {
  BasicInfoSection,
  AcademicInfoSection,
  SkillsSection,
  ExperienceSection,
  ProjectsSection,
  ResumeSection,
} from '../components/profile/EditProfileSections';

const tabSequence = ['basic', 'academic', 'skills', 'experience', 'projects'];

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
  const [searchParams] = useSearchParams();

  // Initialize state based on ?tab= URL parameter if present and valid
  const initialTab = searchParams.get('tab');
  const [activeTab, setActiveTab] = useState(
    initialTab && sectionMap[initialTab] ? initialTab : 'basic'
  );

  const { profileData, updateProfileSection } = useProfile();
  const { setPhotoUrl, setCoverPhotoUrl } = useProfilePhoto();

  // Centralized draft state holding changes across ALL tabs
  const [draftProfile, setDraftProfile] = useState(profileData);

  // Sync tab if searchParams change dynamically
  useEffect(() => {
    const requestedTab = searchParams.get('tab');
    if (requestedTab && sectionMap[requestedTab]) {
      setActiveTab(requestedTab);
    }
  }, [searchParams]);

  const ActiveSection = sectionMap[activeTab];

  const handleCancel = () => navigate('/student/my-profile');

  // Step-by-step navigation controls
  const handleNext = () => {
    const currentIndex = tabSequence.indexOf(activeTab);
    if (currentIndex >= 0 && currentIndex < tabSequence.length - 1) {
      setActiveTab(tabSequence[currentIndex + 1]);
    }
  };

  const handlePrev = () => {
    const currentIndex = tabSequence.indexOf(activeTab);
    if (currentIndex > 0) {
      setActiveTab(tabSequence[currentIndex - 1]);
    }
  };

  // Real-time update to internal draft
  const handleUpdateDraft = (sectionKey, updatedSectionData) => {
    setDraftProfile((prev) => ({
      ...prev,
      [sectionKey]: updatedSectionData,
    }));
  };

  // ✅ COMMITS ALL DRAFT DATA & PHOTOS ONLY ON FINAL SAVE
  const handleSave = () => {
    // 1. Save all profile context data sections
    Object.keys(draftProfile).forEach((sectionKey) => {
      updateProfileSection(sectionKey, draftProfile[sectionKey]);
    });

    // 2. Commit profile & cover photos to ProfilePhotoContext upon saving
    if (draftProfile.basic?.pendingProfilePhoto !== undefined) {
      setPhotoUrl(draftProfile.basic.pendingProfilePhoto);
    }
    if (draftProfile.basic?.pendingCoverPhoto !== undefined) {
      setCoverPhotoUrl(draftProfile.basic.pendingCoverPhoto);
    }

    // 3. Navigate back to profile view
    navigate('/student/my-profile');
  };

  return (
    <div className="mx-auto w-full max-w-full px-4 py-4 sm:px-6 lg:px-8 lg:py-6 xl:px-10">
      {/* PAGE HEADER */}
      <div className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-6">
        <div className="relative z-10">
          <div className="mb-2 flex items-center gap-2">
            <Sparkles size={15} className="text-brand" />
            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-brand">
              Profile Settings
            </span>
          </div>

          <Link
            to="/student/my-profile"
            className="mb-2 flex w-fit items-center gap-1 text-sm text-gray-500 hover:text-brand"
          >
            <ArrowLeft size={14} /> My Profile
          </Link>

          <h1 className="mb-1 text-xl font-bold text-gray-900 sm:text-2xl">
            Edit Profile
          </h1>
          <p className="max-w-2xl text-sm text-gray-500">
            Fill out your details across sections. Click Save Changes on the Projects tab to save everything.
          </p>
        </div>
      </div>

      {/* TABS & ACTIVE SECTION */}
      <div className="mt-4 grid grid-cols-1 gap-4 sm:mt-6 sm:gap-6 lg:grid-cols-12">
        <div className="lg:col-span-3">
          <EditProfileTabs activeTab={activeTab} onTabChange={setActiveTab} />
        </div>

        <div className="lg:col-span-9 rounded-2xl bg-white p-5 sm:p-6 lg:p-8 shadow-sm">
          <ActiveSection
            draftData={draftProfile}
            onUpdateDraft={handleUpdateDraft}
            onCancel={handleCancel}
            onNext={handleNext}
            onPrev={handlePrev}
            onSave={handleSave}
            isFirstTab={activeTab === 'basic'}
            isLastTab={activeTab === 'projects'}
          />
        </div>
      </div>
    </div>
  );
};

export default EditProfilePage;