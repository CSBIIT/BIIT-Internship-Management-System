import { useState, useRef, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  FileText,
  Users,
  PenLine,
  Calendar,
  Building2,
  Settings,
  Bell,
  LogOut,
  X,
} from 'lucide-react';

import Logo from '../../../../components/common/Logo';
import LogoutModal from '../../../../components/common/LogoutModal';
import { useAuth } from '../../../../context/AuthContext';

const overviewLinks = [
  { label: 'Dashboard', to: '/company/dashboard', icon: LayoutDashboard },
  { label: 'Job Postings', to: '/company/job-postings', icon: FileText },
  { label: 'Applicants', to: '/company/applicants', icon: Users },
];

const managementLinks = [
  { label: 'Post a Job', to: '/company/post-job', icon: PenLine },
  { label: 'Interviews', to: '/company/interviews', icon: Calendar },
];

const accountLinks = [
  { label: 'Company Profile', to: '/company/company-profile', icon: Building2 },
  { label: 'Settings', to: '/company/settings', icon: Settings },
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
            ${isActive ? 'opacity-0' : 'opacity-0 group-hover:opacity-100'}
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
            ${isActive ? '' : 'group-hover:scale-105 group-hover:translate-x-0.5'}
          `}
        />
        <span className="relative z-10">{label}</span>
        {isActive && (
          <span className="absolute right-2 h-1.5 w-1.5 rounded-full bg-white/80 animate-pulse" />
        )}
      </>
    )}
  </NavLink>
);

const SidebarContent = ({ onNavigate, onLogoutClick }) => (
  <div className="flex h-full flex-col">
    {/* Logo */}
    <div className="shrink-0 px-5 py-6 animate-fade-in-up" style={{ animationDelay: '0ms' }}>
      <div className="transition-all duration-300 hover:scale-[1.02]">
        <Logo className="h-9" />
      </div>
    </div>

    {/* Navigation */}
    <nav className="flex-1 space-y-6 px-3">
      {/* Overview */}
      <div className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
        <p className="mb-2 px-4 text-xs font-semibold uppercase tracking-wide text-gray-400">
          Overview
        </p>
        <div className="space-y-1">
          {overviewLinks.map((link, index) => (
            <div
              key={link.to}
              className="animate-fade-in-up"
              style={{ animationDelay: `${150 + index * 75}ms` }}
            >
              <NavItem {...link} onClick={onNavigate} />
            </div>
          ))}
        </div>
      </div>

      {/* Management */}
      <div className="animate-fade-in-up" style={{ animationDelay: '400ms' }}>
        <p className="mb-2 px-4 text-xs font-semibold uppercase tracking-wide text-gray-400">
          Management
        </p>
        <div className="space-y-1">
          {managementLinks.map((link, index) => (
            <div
              key={link.to}
              className="animate-fade-in-up"
              style={{ animationDelay: `${450 + index * 75}ms` }}
            >
              <NavItem {...link} onClick={onNavigate} />
            </div>
          ))}
        </div>
      </div>

      {/* Account */}
      <div className="animate-fade-in-up" style={{ animationDelay: '600ms' }}>
        <p className="mb-2 px-4 text-xs font-semibold uppercase tracking-wide text-gray-400">
          Account
        </p>
        <div className="space-y-1">
          {accountLinks.map((link, index) => (
            <div
              key={link.to}
              className="animate-fade-in-up"
              style={{ animationDelay: `${650 + index * 75}ms` }}
            >
              <NavItem {...link} onClick={onNavigate} />
            </div>
          ))}
        </div>
      </div>
    </nav>

    {/* Bottom Actions */}
    <div
      className="shrink-0 space-y-1 border-t border-gray-100 px-3 pb-6 pt-4 animate-fade-in-up"
      style={{ animationDelay: '800ms' }}
    >
      <NavItem label="Notifications" to="/company/notifications" icon={Bell} onClick={onNavigate} />

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
        <span className="absolute left-0 top-1/2 h-5 w-0.5 -translate-y-1/2 rounded-full bg-red-500 opacity-0 transition-all duration-300 group-hover:opacity-100" />
        <LogOut
          size={18}
          className="relative z-10 transition-all duration-300 group-hover:translate-x-0.5 group-hover:scale-105"
        />
        <span className="relative z-10">Logout</span>
      </button>
    </div>
  </div>
);

const ScrollableSidebar = ({ children, className }) => {
  const ref = useRef(null);
  const [canScroll, setCanScroll] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const check = () => setCanScroll(el.scrollHeight > el.clientHeight);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <div className={`relative ${className}`}>
      <div
        ref={ref}
        className="sidebar-scroll h-full overflow-y-auto"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {children}
      </div>
      {/* Scroll hint gradient */}
      {canScroll && (
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent" />
      )}
    </div>
  );
};

const CompanySidebar = ({ mobileOpen, onClose }) => {
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
      <style>{`
        .sidebar-scroll::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      {/* Desktop Sidebar */}
      <aside className="sticky top-0 hidden h-screen w-64 shrink-0 border-r border-gray-100 bg-white lg:block">
        <ScrollableSidebar className="h-full">
          <SidebarContent onNavigate={() => {}} onLogoutClick={() => setShowLogoutModal(true)} />
        </ScrollableSidebar>
      </aside>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div className="absolute inset-0 bg-black/40 animate-fade-in" onClick={onClose} />
          <div className="relative h-full w-72 max-w-[80%] bg-white shadow-xl animate-[slide-in-left_300ms_ease-out]">
            <button
              onClick={onClose}
              className="group absolute right-4 top-4 z-20 flex h-8 w-8 items-center justify-center rounded-lg text-gray-400 transition-all duration-300 hover:bg-gray-100 hover:text-gray-700 hover:rotate-90"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
            <ScrollableSidebar className="h-full pt-16">
              <SidebarContent
                onNavigate={onClose}
                onLogoutClick={() => {
                  onClose();
                  setShowLogoutModal(true);
                }}
              />
            </ScrollableSidebar>
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

export default CompanySidebar;