import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
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
    <div className="space-y-6 max-w-5xl">
      <div>
        <Link
          to="/student/my-profile"
          className="flex items-center gap-1 text-sm text-gray-500 hover:text-brand w-fit mb-2"
        >
          <ArrowLeft size={14} /> Edit Profile
        </Link>
        <h1 className="text-xl sm:text-2xl font-bold">Edit Profile</h1>
        <p className="text-gray-500 text-sm mt-0.5">Update your information and manage your profile</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1">
          <EditProfileTabs activeTab={activeTab} onTabChange={setActiveTab} />
        </div>

        <div className="lg:col-span-3">
          <div className="bg-white rounded-2xl border border-gray-100 p-5 sm:p-6">
            <ActiveSection onCancel={handleCancel} onSave={handleSave} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfilePage;