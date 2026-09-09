import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Avatar from '../../../components/common/Avatar';
import Badge from '../../../components/common/Badge';
import Button from '../../../components/common/Button';
import StatCard from '../components/dashboard/StatCard';
import { useProfile } from '../../../context/ProfileContext';
import { useProfilePhoto } from '../../../context/ProfilePhotoContext';
import {
  Send,
  CheckCircle2,
  Clock,
  XCircle,
  ArrowRight,
  Sparkles,
  CalendarX,
  Wand2,
  Building2,
  Calendar,
  Eye,
  UserCheck,
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

const DashboardPage = () => {
  const navigate = useNavigate();
  const { profileData } = useProfile();
  const { photoUrl } = useProfilePhoto();

  const userName = profileData?.basic?.name || 'Student';

  const [loading, setLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState({
    completion_percentage: 0,
    stats: { applied: 0, accepted: 0, pending: 0, rejected: 0 },
    interviews: [],
    deadlines: [],
    recommended: [],
  });

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const token = localStorage.getItem('token') || sessionStorage.getItem('token');
        const res = await fetch('http://127.0.0.1:8001/api/student/dashboard-data', {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (res.ok) {
          const data = await res.json();
          setDashboardData(data);
        }
      } catch (err) {
        console.error('Failed to fetch dashboard data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  const completionPercentage = dashboardData.completion_percentage || 0;

  // Gate Job Applications if completion < 80%
  const handleApplyJob = (jobId) => {
    if (completionPercentage < 80) {
      alert('Please complete at least 80% of your profile (Basic Info, Academic Info, and Skills) before applying for jobs!');
      navigate('/student/my-profile/edit');
    } else {
      navigate(`/student/find-jobs/${jobId}`);
    }
  };

  const stats = [
    {
      icon: Send,
      value: dashboardData.stats.applied,
      label: 'Applied Requests',
      color: 'blue',
    },
    {
      icon: CheckCircle2,
      value: dashboardData.stats.accepted,
      label: 'Accepted Requests',
      color: 'green',
    },
    {
      icon: Clock,
      value: dashboardData.stats.pending,
      label: 'Pending Requests',
      color: 'yellow',
    },
    {
      icon: XCircle,
      value: dashboardData.stats.rejected,
      label: 'Rejected Requests',
      color: 'red',
    },
  ];

  return (
    <div className="space-y-4 px-1 py-1 sm:space-y-6 sm:px-0">
      {/* WELCOME BANNER WITH DYNAMIC PROFILE COMPLETION */}
      <div
        className={`${cardClass} p-4 animate-fade-in-up sm:p-6`}
        style={{ animationDelay: '0ms' }}
      >
        <div className={greenTopLine} />
        <div className="relative z-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Sparkles size={14} className="text-brand shrink-0" />
              <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-brand">
                Student Dashboard
              </span>
            </div>
            <h1 className="text-lg font-bold text-gray-900 sm:text-2xl">
              Welcome back, {userName}! 👋
            </h1>
            <p className="text-xs text-gray-500 sm:text-sm">
              Discover new opportunities and take the next step in your career.
            </p>
          </div>

          <div className="flex shrink-0 items-center justify-between gap-3 border-t border-gray-50 pt-3 sm:border-t-0 sm:pt-0 sm:justify-end">
            <div className="flex flex-col items-start sm:items-end">
              <p className="text-[11px] text-gray-400 sm:text-xs">Profile Completion</p>
              <p className="text-xs font-semibold text-brand sm:text-sm">
                {completionPercentage}%
              </p>
              <div className="mt-1 h-1.5 w-16 overflow-hidden rounded-full bg-gray-100 sm:w-20">
                <div
                  className="h-full rounded-full bg-brand transition-all duration-500"
                  style={{ width: `${completionPercentage}%` }}
                />
              </div>

              {/* Complete Profile button shown only if completion is < 80% */}
              {completionPercentage < 80 && (
                <Link
                  to="/student/my-profile/edit"
                  className="mt-2 inline-flex items-center gap-1 rounded-lg bg-brand px-2.5 py-1 text-[11px] font-semibold text-white shadow-sm transition-all duration-200 hover:bg-brand-dark"
                >
                  <UserCheck size={12} />
                  <span>Complete Profile</span>
                </Link>
              )}
            </div>
            <Avatar name={userName} src={photoUrl} size="md" />
          </div>
        </div>
      </div>

      {/* STAT CARDS */}
      <div className="grid grid-cols-1 gap-3 xs:grid-cols-2 sm:gap-4 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className={`${cardClass} animate-fade-in-up`}
            style={{ animationDelay: `${100 + index * 100}ms` }}
          >
            <div className={greenTopLine} />
            <div className="relative z-10">
              <StatCard {...stat} />
            </div>
          </div>
        ))}
      </div>

      {/* INTERVIEWS + DEADLINES */}
      <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-2">
        {/* UPCOMING INTERVIEWS */}
        <div
          className={`${cardClass} flex flex-col justify-between p-4 animate-fade-in-up sm:p-6 min-h-[260px]`}
          style={{ animationDelay: '500ms' }}
        >
          <div className={greenTopLine} />
          <div className="relative z-10 flex-1 flex flex-col justify-between">
            <div className="mb-4 flex items-center justify-between gap-2">
              <div>
                <p className="mb-0.5 text-[10px] font-bold uppercase tracking-wider text-brand">
                  Career Progress
                </p>
                <h2 className="text-sm font-bold text-gray-900 sm:text-base">
                  Upcoming Interviews
                </h2>
              </div>

              <Link
                to="/student/applications?filter=interview-scheduled"
                className="flex items-center gap-1 text-xs font-medium text-brand shrink-0 transition-all duration-300 hover:gap-1.5 hover:underline"
              >
                View All <ArrowRight size={12} />
              </Link>
            </div>

            {dashboardData.interviews.length > 0 ? (
              <div className="space-y-2 sm:space-y-3">
                {dashboardData.interviews.map((item) => (
                  <div
                    key={item.company}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-3 rounded-xl border-b border-gray-50 p-2 pb-3 last:border-0 last:pb-0"
                  >
                    <div className="min-w-0">
                      <p className="truncate text-xs font-medium text-gray-800 sm:text-sm">
                        {item.company}
                      </p>
                      <p className="truncate text-[11px] text-gray-500 sm:text-xs">
                        {item.role}
                      </p>
                      <p className="mt-0.5 text-[10px] text-gray-400 sm:text-xs">
                        {item.date}
                      </p>
                    </div>

                    <div className="shrink-0 self-start sm:self-center">
                      <Badge status={item.status}>Interview Scheduled</Badge>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center my-auto py-4 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-brand mb-2 shadow-inner">
                  <CalendarX size={24} />
                </div>
                <p className="text-xs font-semibold text-gray-700 sm:text-sm">
                  No interviews scheduled yet
                </p>
                <p className="text-[11px] text-gray-400">
                  Keep applying to receive interview requests.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* UPCOMING DEADLINES */}
        <div
          className={`${cardClass} flex flex-col justify-between p-4 animate-fade-in-up sm:p-6 min-h-[260px]`}
          style={{ animationDelay: '600ms' }}
        >
          <div className={greenTopLine} />
          <div className="relative z-10 flex-1 flex flex-col justify-between">
            <div className="mb-4 flex items-center justify-between gap-2">
              <div>
                <p className="mb-0.5 text-[10px] font-bold uppercase tracking-wider text-brand">
                  Don't Miss Out
                </p>
                <h2 className="text-sm font-bold text-gray-900 sm:text-base">
                  Upcoming Deadlines
                </h2>
              </div>

              <Link
                to="/student/find-jobs?filter=expiring-soon"
                className="flex items-center gap-1 text-xs font-medium text-brand shrink-0 transition-all duration-300 hover:gap-1.5 hover:underline"
              >
                View All <ArrowRight size={12} />
              </Link>
            </div>

            {dashboardData.deadlines.length > 0 ? (
              <div className="space-y-2 sm:space-y-3">
                {dashboardData.deadlines.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-center justify-between gap-2 sm:gap-3 rounded-xl p-2 border-b border-gray-50 sm:border-0"
                  >
                    <div className="min-w-0">
                      <p className="truncate text-xs font-medium text-gray-800 sm:text-sm">
                        {item.title}
                      </p>
                      <p className="truncate text-[11px] text-gray-500 sm:text-xs">
                        {item.company}
                      </p>
                      <p className="mt-0.5 text-[10px] font-medium text-red-500 sm:text-xs">
                        {item.daysLeft} {item.daysLeft === 1 ? 'day' : 'days'} left
                      </p>
                    </div>

                    <Button
                      onClick={() => handleApplyJob(item.id)}
                      className="shrink-0 px-3 py-1.5 text-[11px] sm:px-4 sm:py-2 sm:text-xs transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                    >
                      Apply Now
                    </Button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center my-auto py-4 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-amber-600 mb-2 shadow-inner">
                  <Clock size={24} />
                </div>
                <p className="text-xs font-semibold text-gray-700 sm:text-sm">
                  No upcoming deadlines
                </p>
                <p className="text-[11px] text-gray-400">
                  No jobs are expiring in the next 5 days.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* RECOMMENDED FOR YOU */}
      <div
        className={`${cardClass} p-4 animate-fade-in-up sm:p-6`}
        style={{ animationDelay: '800ms' }}
      >
        <div className={greenTopLine} />
        <div className="relative z-10">
          <div className="mb-4 flex items-center justify-between gap-2 sm:mb-5">
            <div>
              <p className="mb-0.5 text-[10px] font-bold uppercase tracking-wider text-brand">
                Based On Your Profile
              </p>
              <h2 className="text-sm font-bold text-gray-900 sm:text-base">
                Recommended for You
              </h2>
            </div>

            {(dashboardData?.recommended || []).length > 0 && (
              <Link
                to="/student/find-jobs?filter=recommended"
                className="flex items-center gap-1 text-xs font-medium text-brand shrink-0 transition-all duration-300 hover:gap-1.5 hover:underline"
              >
                Explore Jobs <ArrowRight size={12} />
              </Link>
            )}
          </div>

          {(dashboardData?.recommended || []).length > 0 ? (
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
              {dashboardData.recommended.map((job, index) => (
                <div
                  key={job.id}
                  className="group/recommended relative flex flex-col justify-between overflow-hidden rounded-xl border border-gray-100 bg-white p-3.5 sm:p-4 animate-fade-in-up transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg"
                  style={{ animationDelay: `${850 + index * 100}ms` }}
                >
                  <div className="pointer-events-none absolute left-0 top-0 h-0.5 w-0 bg-brand transition-all duration-300 group-hover/recommended:w-full" />

                  <div className="relative z-10 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-light text-brand">
                        <Send size={14} />
                      </span>

                      <button
                        onClick={() => handleApplyJob(job.id)}
                        className="flex items-center gap-1 rounded-lg bg-gray-50 px-2.5 py-1 text-[11px] font-medium text-gray-600 transition-colors duration-200 hover:bg-brand hover:text-white"
                        title="View Details"
                      >
                        <Eye size={13} />
                        <span>View Job</span>
                      </button>
                    </div>

                    <h3 className="text-xs font-bold text-gray-900 sm:text-sm line-clamp-1">
                      {job.title}
                    </h3>

                    <div className="space-y-1 text-[11px] text-gray-500">
                      <div className="flex items-center gap-1.5 truncate">
                        <Building2 size={13} className="text-gray-400 shrink-0" />
                        <span className="truncate">{job.company}</span>
                      </div>

                      <div className="flex items-center gap-1.5 text-gray-400">
                        <Calendar size={13} className="shrink-0" />
                        <span>Deadline: {job.deadline}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* EMPTY STATE: WHEN NO SKILLS ARE ADDED */
            <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-gray-200 bg-gray-50/50 py-8 px-4 text-center">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-light text-brand shadow-inner">
                <Wand2 size={24} />
              </div>
              <p className="text-xs font-bold text-gray-800 sm:text-sm">
                Set the skills in your profile to see recommendations
              </p>
              <p className="mt-1 max-w-sm text-[11px] text-gray-400 sm:text-xs">
                Add relevant technical skills so our system can automatically match you with suited job openings.
              </p>
              <Link
                to="/student/my-profile/edit?tab=skills"
                className="mt-4 inline-flex items-center gap-1.5 rounded-xl bg-brand px-4 py-2 text-xs font-semibold text-white transition-all duration-300 hover:bg-brand-dark hover:shadow-md"
              >
                <span>Update Profile Skills</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;