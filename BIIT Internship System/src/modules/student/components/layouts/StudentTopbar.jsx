import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, Bell } from 'lucide-react';
import Avatar from '../../../../components/common/Avatar';
import { useProfilePhoto } from '../../../../context/ProfilePhotoContext';
import { useProfile } from '../../../../context/ProfileContext';

const StudentTopbar = ({ onMenuClick, hideMenuButton = false }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const { photoUrl } = useProfilePhoto();
  const { profileData } = useProfile();

  const userName = profileData?.basic?.name || 'Student';

  const isEditProfilePage =
    hideMenuButton ||
    location.pathname.toLowerCase().includes('my-profile/edit') ||
    location.pathname.toLowerCase().includes('edit');

  return (
    <header className="sticky top-0 z-30 bg-white border-b border-gray-100 px-4 sm:px-6 py-3 flex items-center justify-between">
      {!isEditProfilePage ? (
        <button
          onClick={onMenuClick}
          className="lg:hidden text-gray-500 hover:text-gray-700 p-1"
          aria-label="Open navigation menu"
        >
          <Menu size={22} />
        </button>
      ) : (
        <div className="lg:hidden" />
      )}

      <div className="hidden lg:block" />

      <div className="flex items-center gap-3 sm:gap-4">
        {/* Bell Icon: Navigates directly to /student/notifications */}
        <button
          onClick={() => navigate('/student/notifications')}
          className="text-gray-400 hover:text-gray-600 relative p-1.5 rounded-full hover:bg-gray-50 transition-colors"
          aria-label="Open Notifications"
        >
          <Bell size={18} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
        </button>

        {/* Dynamic Profile Avatar */}
        <button
          onClick={() => navigate('/student/my-profile')}
          className="flex items-center gap-2 text-left group focus:outline-none"
          title="View My Profile"
        >
          <Avatar name={userName} src={photoUrl} size="sm" />
        </button>
      </div>
    </header>
  );
};

export default StudentTopbar;