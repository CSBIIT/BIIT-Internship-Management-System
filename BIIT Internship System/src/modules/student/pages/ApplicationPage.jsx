import { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import {
  Search,
  CheckCircle2,
  Clock,
  Send,
  XCircle,
  Sparkles,
  Inbox,
  Loader2,
  ArrowRight,
} from 'lucide-react';

import ApplicationCard from '../components/applications/ApplicationCard';

const ApplicationsPage = () => {
  const [searchParams] = useSearchParams();
  const filterParam = searchParams.get('filter'); // Captures filters like ?filter=interview-scheduled

  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState(filterParam || 'all');
  const [data, setData] = useState({
    stats: { accepted: 0, pending: 0, interviews: 0, rejected: 0 },
    applications: [],
  });

  useEffect(() => {
    const fetchApplications = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem('token') || sessionStorage.getItem('token');
        const res = await fetch('http://127.0.0.1:8001/api/student/applications', {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (res.ok) {
          const result = await res.json();
          setData(result);
        }
      } catch (err) {
        console.error('Failed to fetch applications:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchApplications();
  }, []);

  const statPills = [
    {
      key: 'accepted',
      icon: CheckCircle2,
      value: data.stats.accepted,
      label: 'Accepted',
      color: 'text-green-600 bg-green-50',
    },
    {
      key: 'pending',
      icon: Clock,
      value: data.stats.pending,
      label: 'Pending',
      color: 'text-yellow-600 bg-yellow-50',
    },
    {
      key: 'interview-scheduled',
      icon: Send,
      value: data.stats.interviews,
      label: 'Interviews',
      color: 'text-blue-600 bg-blue-50',
    },
    {
      key: 'rejected',
      icon: XCircle,
      value: data.stats.rejected,
      label: 'Rejected',
      color: 'text-red-600 bg-red-50',
    },
  ];

  // Filter applications by search keyword and active status pill
  const filtered = data.applications.filter((app) => {
    const matchesSearch =
      app.role.toLowerCase().includes(search.toLowerCase()) ||
      app.company.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === 'all' || app.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-4 px-1 py-1 sm:space-y-6 sm:px-0 overflow-hidden">
      {/* PAGE HEADER */}
      <div
        className="
          group
          relative
          overflow-hidden
          rounded-2xl
          border
          border-gray-100
          bg-white
          p-4
          shadow-sm
          animate-fade-in-up
          transition-all
          duration-500
          hover:-translate-y-0.5
          hover:shadow-lg
          sm:p-6
        "
        style={{ animationDelay: '0ms' }}
      >
        <div className="pointer-events-none absolute left-0 top-0 z-30 h-0.5 w-0 bg-brand transition-all duration-300 group-hover:w-full" />
        <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand/5 blur-2xl transition-transform duration-700 group-hover:scale-150" />
        <div className="pointer-events-none absolute -bottom-20 left-1/3 h-32 w-32 rounded-full bg-emerald-100/40 blur-2xl" />

        <div className="relative z-10">
          <div className="mb-2 flex items-center gap-2">
            <Sparkles size={15} className="text-brand animate-pulse shrink-0" />
            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-brand">
              Career Progress
            </span>
          </div>

          <h1 className="mb-1 text-lg font-bold text-gray-900 sm:text-2xl">
            My Applications
          </h1>

          <p className="text-xs text-gray-500 sm:text-sm">
            Track and manage your internship applications and stay updated on their progress.
          </p>
        </div>
      </div>

      {/* STAT PILLS */}
      <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
        {statPills.map((stat, index) => {
          const Icon = stat.icon;
          const isActive = statusFilter === stat.key;

          return (
            <button
              key={stat.label}
              onClick={() =>
                setStatusFilter(isActive ? 'all' : stat.key)
              }
              className={`
                group
                relative
                overflow-hidden
                rounded-xl
                border
                text-left
                p-3.5
                sm:p-4
                shadow-sm
                animate-fade-in-up
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-lg
                ${
                  isActive
                    ? 'border-brand bg-emerald-50/40 ring-2 ring-brand/20'
                    : 'border-gray-100 bg-white'
                }
              `}
              style={{ animationDelay: `${100 + index * 100}ms` }}
            >
              <div className="pointer-events-none absolute left-0 top-0 z-30 h-0.5 w-0 bg-brand transition-all duration-300 group-hover:w-full" />

              <div className="relative z-10 flex items-center gap-3">
                <div
                  className={`
                    flex
                    h-9
                    w-9
                    sm:h-10
                    sm:w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    transition-transform
                    duration-300
                    group-hover:scale-110
                    group-hover:rotate-3
                    ${stat.color}
                  `}
                >
                  <Icon size={16} className="sm:w-[18px] sm:h-[18px]" />
                </div>

                <div>
                  <p className="text-base font-bold leading-none text-gray-900 sm:text-lg">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[11px] text-gray-500 sm:text-xs">
                    {stat.label}
                  </p>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* SEARCH AND FILTER STATUS */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div
          className="relative w-full sm:max-w-md animate-fade-in-up"
          style={{ animationDelay: '500ms' }}
        >
          <Search
            size={16}
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search applications by role or company..."
            className="w-full rounded-xl border border-gray-200 bg-white py-2.5 pl-9 pr-4 text-xs sm:text-sm text-gray-800 shadow-sm outline-none transition-all duration-300 placeholder:text-gray-400 hover:border-gray-300 hover:shadow-md focus:border-brand focus:ring-4 focus:ring-brand/10"
          />
        </div>

        {statusFilter !== 'all' && (
          <button
            onClick={() => setStatusFilter('all')}
            className="self-start text-xs font-semibold text-brand hover:underline sm:self-center"
          >
            Clear Status Filter
          </button>
        )}
      </div>

      {/* APPLICATIONS LIST / LOADING / EMPTY STATE */}
      {loading ? (
        <div className="flex h-64 items-center justify-center rounded-2xl border border-gray-100 bg-white">
          <div className="flex flex-col items-center gap-2 text-gray-400">
            <Loader2 size={28} className="animate-spin text-brand" />
            <p className="text-xs font-medium">Fetching application records...</p>
          </div>
        </div>
      ) : data.applications.length === 0 ? (
        /* ZERO APPLICATIONS CREATED YET */
        <div
          className="relative overflow-hidden rounded-2xl border border-dashed border-gray-200 bg-white px-5 py-12 text-center shadow-sm animate-fade-in-up"
          style={{ animationDelay: '600ms' }}
        >
          <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-light text-brand shadow-inner">
            <Inbox size={28} />
          </div>
          <p className="text-sm font-bold text-gray-800 sm:text-base">
            You have not applied to any job applications yet
          </p>
          <p className="mt-1 max-w-sm mx-auto text-xs text-gray-400">
            Explore active job listings and submit your applications to start tracking your career progress here.
          </p>
          <Link
            to="/student/find-jobs"
            className="mt-5 inline-flex items-center gap-1.5 rounded-xl bg-brand px-4 py-2 text-xs font-semibold text-white shadow-md transition-all duration-300 hover:bg-brand-dark hover:shadow-lg"
          >
            <span>Explore Openings</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      ) : filtered.length > 0 ? (
        <div className="space-y-3">
          {filtered.map((app, index) => (
            <div
              key={app.id}
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-gray-100
                bg-white
                shadow-sm
                animate-fade-in-up
                transition-all
                duration-300
                ease-out
                hover:-translate-y-1
                hover:shadow-lg
              "
              style={{ animationDelay: `${600 + index * 100}ms` }}
            >
              <div className="pointer-events-none absolute left-0 top-0 z-30 h-0.5 w-0 bg-brand transition-all duration-300 ease-out group-hover:w-full" />
              <div className="relative z-10">
                <ApplicationCard application={app} />
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* SEARCH / STATUS FILTER PRODUCED NO MATCHES */
        <div
          className="relative overflow-hidden rounded-2xl border border-dashed border-gray-200 bg-white px-4 py-10 sm:px-5 sm:py-12 text-center shadow-sm animate-fade-in-up"
          style={{ animationDelay: '600ms' }}
        >
          <div className="relative z-10 mx-auto mb-3 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-gray-100">
            <Search size={18} className="text-gray-400 sm:w-5 sm:h-5" />
          </div>
          <p className="relative z-10 text-xs sm:text-sm font-medium text-gray-600">
            No applications match your search criteria.
          </p>
          <p className="relative z-10 mt-1 text-[11px] sm:text-xs text-gray-400">
            Try adjusting your search query or status filter.
          </p>
        </div>
      )}
    </div>
  );
};

export default ApplicationsPage;