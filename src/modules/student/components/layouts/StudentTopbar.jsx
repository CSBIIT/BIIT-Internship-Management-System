import { Menu, RefreshCw, Bell } from 'lucide-react';
import Avatar from '../../../../components/common/Avatar';

const StudentTopbar = ({ onMenuClick, userName = 'Ali Khan' }) => {
  return (
    <header className="sticky top-0 z-30 bg-white border-b border-gray-100 px-4 sm:px-6 py-3 flex items-center justify-between">
      <button
        onClick={onMenuClick}
        className="lg:hidden text-gray-500 hover:text-gray-700"
      >
        <Menu size={22} />
      </button>

      <div className="hidden lg:block" />

      <div className="flex items-center gap-3 sm:gap-4">
        <button className="text-gray-400 hover:text-gray-600">
          <RefreshCw size={18} />
        </button>
        <button className="text-gray-400 hover:text-gray-600 relative">
          <Bell size={18} />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
        </button>
        <Avatar name={userName} size="sm" />
      </div>
    </header>
  );
};

export default StudentTopbar;