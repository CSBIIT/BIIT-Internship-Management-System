import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  FileText,
  Briefcase,
  User,
  Settings,
  Bell,
  LogOut,
  X,
} from 'lucide-react';
import Logo from '../../../../components/common/Logo';

const overviewLinks = [
  { label: 'Dashboard', to: '/student/dashboard', icon: LayoutDashboard },
  { label: 'Applications', to: '/student/applications', icon: FileText },
  { label: 'Find Jobs', to: '/student/find-jobs', icon: Briefcase },
];

const accountLinks = [
  { label: 'My Profile', to: '/student/my-profile', icon: User },
  { label: 'Settings', to: '/student/settings', icon: Settings },
];

const NavItem = ({ label, to, icon: Icon, onClick }) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) =>
      `flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
        isActive
          ? 'bg-brand text-white'
          : 'text-gray-600 hover:bg-brand-light hover:text-brand'
      }`
    }
  >
    <Icon size={18} />
    {label}
  </NavLink>
);

const SidebarContent = ({ onNavigate }) => (
  <div className="flex flex-col h-full">
    <div className="px-5 py-6">
      <Logo className="h-9" />
    </div>

    <nav className="flex-1 px-3 space-y-6 overflow-y-auto">
      <div>
        <p className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
          Overview
        </p>
        <div className="space-y-1">
          {overviewLinks.map((link) => (
            <NavItem key={link.to} {...link} onClick={onNavigate} />
          ))}
        </div>
      </div>

      <div>
        <p className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
          Account
        </p>
        <div className="space-y-1">
          {accountLinks.map((link) => (
            <NavItem key={link.to} {...link} onClick={onNavigate} />
          ))}
        </div>
      </div>
    </nav>

    <div className="px-3 pb-6 space-y-1 border-t border-gray-100 pt-4">
      <NavItem label="Notifications" to="/student/notifications" icon={Bell} onClick={onNavigate} />
      <button
        onClick={() => {
          // TODO: wire to AuthContext logout()
          console.log('Logging out...');
        }}
        className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-gray-600 hover:bg-red-50 hover:text-red-600 transition-colors w-full"
      >
        <LogOut size={18} />
        Logout
      </button>
    </div>
  </div>
);

const StudentSidebar = ({ mobileOpen, onClose }) => {
  return (
    <>
      {/* Desktop sidebar — always visible */}
      <aside className="hidden lg:block w-64 shrink-0 border-r border-gray-100 bg-white h-screen sticky top-0">
        <SidebarContent />
      </aside>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div className="absolute inset-0 bg-black/40" onClick={onClose} />
          <div className="relative w-72 max-w-[80%] bg-white h-full shadow-xl">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X size={22} />
            </button>
            <SidebarContent onNavigate={onClose} />
          </div>
        </div>
      )}
    </>
  );
};

export default StudentSidebar;