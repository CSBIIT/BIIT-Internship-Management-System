// components/profile/EditProfileTabs.jsx
import { User, GraduationCap, Sparkles, Briefcase, FolderKanban } from 'lucide-react';

export const editProfileTabs = [
  { id: 'basic', label: 'Basic Information', icon: User },
  { id: 'academic', label: 'Academic Information', icon: GraduationCap },
  { id: 'skills', label: 'Skills', icon: Sparkles },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'projects', label: 'Projects', icon: FolderKanban },
];

const EditProfileTabs = ({ activeTab, onTabChange }) => {
  return (
    <div className="bg-white rounded-2xl p-2">
      <div className="flex flex-col gap-1">
        {editProfileTabs.map(({ id, label, icon: Icon }) => {
          const isActive = activeTab === id;

          return (
            <button
              key={id}
              onClick={() => onTabChange(id)}
              className={`
                flex items-center gap-3 w-full px-3.5 py-2.5 rounded-xl
                text-sm font-medium text-left transition-all duration-200
                ${
                  isActive
                    ? 'bg-brand-light text-brand shadow-sm'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }
              `}
            >
              <span
                className={`
                  flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors
                  ${isActive ? 'bg-brand text-white' : 'bg-gray-100 text-gray-500'}
                `}
              >
                <Icon size={15} />
              </span>
              <span className="truncate">{label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default EditProfileTabs;