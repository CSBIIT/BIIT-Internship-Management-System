import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Bell,
  FileText,
  Calendar,
  CheckCircle2,
  User,
  Search,
  ArrowRight,
  Check,
} from 'lucide-react';

const cardClass = `
  group
  relative
  overflow-hidden
  rounded-2xl
  border
  border-gray-100
  bg-white
  shadow-sm
  transition-all
  duration-300
  ease-out
  hover:-translate-y-1
  hover:shadow-lg
`;

const greenTopLine = `
  pointer-events-none
  absolute
  left-0
  top-0
  z-20
  h-0.5
  w-0
  bg-brand
  transition-all
  duration-300
  group-hover:w-full
`;

const notifications = [
  {
    id: 1,
    type: 'application-update',
    icon: FileText,
    iconBg: 'bg-blue-50 text-blue-600',
    title: 'Application Update',
    description: 'Your application for ',
    highlight: 'Software Engineering Intern',
    suffix: ' at TechNova Solutions has been reviewed by the hiring team.',
    time: '2 hours ago',
    unread: true,
    actions: [{ label: 'View Application', to: '/student/applications', primary: false }],
  },
  {
    id: 2,
    type: 'interview-invitation',
    icon: Calendar,
    iconBg: 'bg-amber-50 text-amber-600',
    title: 'Interview Invitation',
    description: 'You have been invited to a technical interview for the ',
    highlight: 'Data Analyst Intern',
    suffix: ' position at DataSys.',
    time: '5 hours ago',
    unread: true,
    actions: [
      { label: 'Schedule Now', to: '/student/applications', primary: true },
      { label: 'View Details', to: '/student/applications', primary: false },
    ],
  },
  {
    id: 3,
    type: 'application-accepted',
    icon: CheckCircle2,
    iconBg: 'bg-emerald-50 text-emerald-600',
    title: 'Application Accepted',
    description: 'Congratulations! Your application for ',
    highlight: 'UX Design Intern',
    suffix: ' has been accepted.',
    time: 'Yesterday',
    unread: false,
    actions: [{ label: 'View Offer', to: '/student/applications', primary: false }],
  },
  {
    id: 4,
    type: 'profile-completion',
    icon: User,
    iconBg: 'bg-purple-50 text-purple-600',
    title: 'Profile Completion',
    description: 'Complete your profile to improve your visibility to potential employers. You are currently at 75% completion.',
    highlight: '',
    suffix: '',
    time: '2 days ago',
    unread: false,
    actions: [{ label: 'Update Profile', to: '/student/my-profile/edit', primary: false }],
  },
];

const NotificationsPage = () => {
  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [notifs, setNotifs] = useState(notifications);

  const unreadCount = notifs.filter((n) => n.unread).length;

  const filtered = notifs.filter((n) => {
    const matchesSearch =
      n.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      n.description.toLowerCase().includes(searchQuery.toLowerCase());
    if (filter === 'All') return matchesSearch;
    if (filter === 'Unread') return matchesSearch && n.unread;
    if (filter === 'Read') return matchesSearch && !n.unread;
    return matchesSearch;
  });

  const markAllRead = () => {
    setNotifs((prev) => prev.map((n) => ({ ...n, unread: false })));
  };

  return (
    <div className="space-y-6 overflow-hidden">
           {/* =====================================================
          HEADER
      ====================================================== */}
      <div className={`${cardClass} p-5 sm:p-6 animate-fade-in-up`} style={{ animationDelay: '0ms' }}>
        <div className={greenTopLine} />
        <div className="relative z-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-light text-brand">
              <Bell size={20} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900 sm:text-2xl">Notifications</h1>
              <p className="mt-0.5 text-sm text-gray-500">
                Stay updated on your applications, interviews, and career opportunities.
              </p>
            </div>
          </div>
          <button
            onClick={markAllRead}
            className="flex items-center gap-1.5 text-xs font-semibold text-brand transition-all duration-300 hover:underline shrink-0"
          >
            <Check size={14} />
            Mark all as read
          </button>
        </div>
      </div>
      
      {/* =====================================================
          STATS + FILTERS
      ====================================================== */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between animate-fade-in-up" style={{ animationDelay: '100ms' }}>
        {/* Total Notifications Card */}
        <div className={`${cardClass} flex items-center gap-4 p-4 sm:p-5 lg:w-64`}>
          <div className={greenTopLine} />
          <div className="relative z-10 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-light text-brand">
              <Bell size={18} />
            </div>
            <div>
              <p className="text-xs text-gray-400">Total Notifications</p>
              <div className="flex items-center gap-2">
                <p className="text-2xl font-bold text-gray-900">{notifs.length}</p>
                {unreadCount > 0 && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-red-50 px-2 py-0.5 text-[10px] font-bold text-red-600">
                    <span className="h-1 w-1 rounded-full bg-red-500" />
                    {unreadCount} Unread
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Search + Filters */}
        <div className="flex flex-1 flex-col gap-3 sm:flex-row sm:items-center lg:justify-end">
          <div className="relative w-full max-w-sm">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Filter notifications..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-lg border border-gray-200 bg-white py-2.5 pl-9 pr-4 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-brand focus:ring-2 focus:ring-brand/10"
            />
          </div>
          <div className="flex items-center gap-2">
            {['All', 'Unread', 'Read'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-lg px-4 py-2 text-xs font-semibold transition-all duration-300 ${
                  filter === f
                    ? 'bg-brand text-white shadow-sm'
                    : 'border border-gray-200 bg-white text-gray-600 hover:border-brand hover:text-brand'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* =====================================================
          NOTIFICATION LIST
      ====================================================== */}
      <div className="space-y-4">
        {filtered.length === 0 && (
          <div className={`${cardClass} p-8 text-center animate-fade-in-up`}>
            <div className={greenTopLine} />
            <div className="relative z-10">
              <Bell size={32} className="mx-auto mb-3 text-gray-300" />
              <p className="text-sm font-medium text-gray-600">No notifications found</p>
              <p className="mt-1 text-xs text-gray-400">Check back later for updates</p>
            </div>
          </div>
        )}

        {filtered.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className={`${cardClass} p-4 sm:p-5 animate-fade-in-up`}
              style={{ animationDelay: `${200 + index * 100}ms` }}
            >
              <div className={greenTopLine} />
              <div className="relative z-10">
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${item.iconBg}`}>
                    <Icon size={18} />
                  </div>

                  {/* Content */}
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-sm font-bold text-gray-900">{item.title}</h3>
                        <p className="mt-1 text-xs leading-relaxed text-gray-600 sm:text-sm">
                          {item.description}
                          {item.highlight && (
                            <span className="font-semibold text-gray-800">{item.highlight}</span>
                          )}
                          {item.suffix}
                        </p>
                      </div>
                      <span className="shrink-0 text-[11px] text-gray-400">{item.time}</span>
                    </div>

                    {/* Actions */}
                    <div className="mt-3 flex flex-wrap items-center gap-2">
                      {item.actions.map((action) =>
                        action.primary ? (
                          <Link
                            key={action.label}
                            to={action.to}
                            className="inline-flex items-center gap-1.5 rounded-lg bg-brand px-3 py-1.5 text-xs font-semibold text-white transition-all duration-300 hover:bg-brand-dark hover:-translate-y-0.5 hover:shadow-md"
                          >
                            {action.label}
                          </Link>
                        ) : (
                          <Link
                            key={action.label}
                            to={action.to}
                            className="inline-flex items-center gap-1 text-xs font-semibold text-brand transition-all duration-300 hover:gap-2 hover:underline"
                          >
                            {action.label}
                            <ArrowRight size={12} />
                          </Link>
                        )
                      )}
                    </div>
                  </div>

                  {/* Unread dot */}
                  {item.unread && (
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand animate-pulse" />
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NotificationsPage;