import { User, GraduationCap, Sparkles, Briefcase, FolderKanban, FileText } from 'lucide-react';

export const editProfileTabs = [
  { id: 'basic', label: 'Basic Information', icon: User },
  { id: 'academic', label: 'Academic Information', icon: GraduationCap },
  { id: 'skills', label: 'Skills', icon: Sparkles },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'projects', label: 'Projects', icon: FolderKanban },
  { id: 'resume', label: 'Resume', icon: FileText },
];

const EditProfileTabs = ({ activeTab, onTabChange }) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-3 lg:p-4">
      <div className="flex lg:flex-col gap-1 overflow-x-auto lg:overflow-visible">
        {editProfileTabs.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => onTabChange(id)}
            className={`flex items-center gap-2.5 px-4 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap transition-colors shrink-0 ${
              activeTab === id
                ? 'bg-brand-light text-brand'
                : 'text-gray-500 hover:bg-gray-50'
            }`}
          >
            <Icon size={16} />
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default EditProfileTabs;