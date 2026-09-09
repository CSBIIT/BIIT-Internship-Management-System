import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
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
import LogoutModal from '../../../../components/common/LogoutModal';
import { useAuth } from '../../../../context/AuthContext';

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
      `
        group
        relative
        flex
        items-center
        gap-3
        overflow-hidden
        rounded-lg
        px-4
        py-2.5
        text-sm
        font-medium
        transition-all
        duration-300
        ease-out
        ${
          isActive
            ? 'bg-brand text-white shadow-sm'
            : 'text-gray-600 hover:-translate-y-0.5 hover:bg-brand-light hover:text-brand hover:shadow-sm'
        }
      `
    }
  >
    {({ isActive }) => (
      <>
        <span
          className={`
            absolute
            left-0
            top-1/2
            h-5
            w-0.5
            -translate-y-1/2
            rounded-full
            bg-brand
            transition-all
            duration-300
            ${
              isActive
                ? 'opacity-0'
                : 'opacity-0 group-hover:opacity-100'
            }
          `}
        />
        <Icon
          size={18}
          className={`
            relative
            z-10
            shrink-0
            transition-all
            duration-300
            ${
              isActive
                ? ''
                : 'group-hover:scale-105 group-hover:translate-x-0.5'
            }
          `}
        />
        <span className="relative z-10">
          {label}
        </span>
        {isActive && (
          <span
            className="
              absolute
              right-2
              h-1.5
              w-1.5
              rounded-full
              bg-white/80
              animate-pulse
            "
          />
        )}
      </>
    )}
  </NavLink>
);

const SidebarContent = ({ onNavigate, onLogoutClick }) => (
  <div className="flex h-full flex-col">
    {/* Logo */}
    <div
      className="
        px-5
        py-6
        animate-fade-in-up
      "
      style={{
        animationDelay: '0ms',
      }}
    >
      <div className="transition-all duration-300 hover:scale-[1.02]">
        <Logo className="h-9" />
      </div>
    </div>

    {/* Navigation */}
    <nav className="flex-1 space-y-6 overflow-y-auto px-3">
      {/* Overview */}
      <div
        className="animate-fade-in-up"
        style={{
          animationDelay: '100ms',
        }}
      >
        <p
          className="
            mb-2
            px-4
            text-xs
            font-semibold
            uppercase
            tracking-wide
            text-gray-400
          "
        >
          Overview
        </p>
        <div className="space-y-1">
          {overviewLinks.map((link, index) => (
            <div
              key={link.to}
              className="animate-fade-in-up"
              style={{
                animationDelay: `${150 + index * 75}ms`,
              }}
            >
              <NavItem
                {...link}
                onClick={onNavigate}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Account */}
      <div
        className="animate-fade-in-up"
        style={{
          animationDelay: '400ms',
        }}
      >
        <p
          className="
            mb-2
            px-4
            text-xs
            font-semibold
            uppercase
            tracking-wide
            text-gray-400
          "
        >
          Account
        </p>
        <div className="space-y-1">
          {accountLinks.map((link, index) => (
            <div
              key={link.to}
              className="animate-fade-in-up"
              style={{
                animationDelay: `${450 + index * 75}ms`,
              }}
            >
              <NavItem
                {...link}
                onClick={onNavigate}
              />
            </div>
          ))}
        </div>
      </div>
    </nav>

    {/* Bottom Actions */}
    <div
      className="
        space-y-1
        border-t
        border-gray-100
        px-3
        pb-6
        pt-4
        animate-fade-in-up
      "
      style={{
        animationDelay: '600ms',
      }}
    >
      <NavItem
        label="Notifications"
        to="/student/notifications"
        icon={Bell}
        onClick={onNavigate}
      />

      {/* Logout */}
      <button
        onClick={onLogoutClick}
        className="
          group
          relative
          flex
          w-full
          items-center
          gap-3
          overflow-hidden
          rounded-lg
          px-4
          py-2.5
          text-sm
          font-medium
          text-gray-600
          transition-all
          duration-300
          ease-out
          hover:-translate-y-0.5
          hover:bg-red-50
          hover:text-red-600
          hover:shadow-sm
        "
      >
        <span
          className="
            absolute
            left-0
            top-1/2
            h-5
            w-0.5
            -translate-y-1/2
            rounded-full
            bg-red-500
            opacity-0
            transition-all
            duration-300
            group-hover:opacity-100
          "
        />
        <LogOut
          size={18}
          className="
            relative
            z-10
            transition-all
            duration-300
            group-hover:translate-x-0.5
            group-hover:scale-105
          "
        />
        <span className="relative z-10">
          Logout
        </span>
      </button>
    </div>
  </div>
);

const StudentSidebar = ({ mobileOpen, onClose }) => {
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogoutConfirm = () => {
    logout();
    setShowLogoutModal(false);
    navigate('/login', { replace: true });
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <aside
        className="
          sticky
          top-0
          hidden
          h-screen
          w-64
          shrink-0
          border-r
          border-gray-100
          bg-white
          lg:block
        "
      >
        <SidebarContent onNavigate={() => {}} onLogoutClick={() => setShowLogoutModal(true)} />
      </aside>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          className="
            fixed
            inset-0
            z-50
            flex
            lg:hidden
          "
        >
          <div
            className="
              absolute
              inset-0
              bg-black/40
              animate-fade-in
            "
            onClick={onClose}
          />
          <div
            className="
              relative
              h-full
              w-72
              max-w-[80%]
              bg-white
              shadow-xl
              animate-[slide-in-left_300ms_ease-out]
            "
          >
            <button
              onClick={onClose}
              className="
                group
                absolute
                right-4
                top-4
                z-20
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-lg
                text-gray-400
                transition-all
                duration-300
                hover:bg-gray-100
                hover:text-gray-700
                hover:rotate-90
              "
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
            <SidebarContent
              onNavigate={onClose}
              onLogoutClick={() => {
                onClose();
                setShowLogoutModal(true);
              }}
            />
          </div>
        </div>
      )}

      {/* Logout Modal */}
      <LogoutModal
        isOpen={showLogoutModal}
        onClose={() => setShowLogoutModal(false)}
        onConfirm={handleLogoutConfirm}
      />
    </>
  );
};

export default StudentSidebar;