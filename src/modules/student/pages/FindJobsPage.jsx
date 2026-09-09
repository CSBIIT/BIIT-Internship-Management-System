import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Sparkles, Filter, Loader2 } from 'lucide-react';

import JobCard from '../components/jobs/JobCard';
import JobFilters from '../components/jobs/JobFilters';

const FindJobsPage = () => {
  const [searchParams] = useSearchParams();
  const filterParam = searchParams.get('filter'); // Captures 'recommended' or 'expiring-soon'

  const [search, setSearch] = useState('');
  const [selectedFilters, setSelectedFilters] = useState({
    jobTypes: [],
    locations: [],
    workplaceTypes: [],
  });

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 80);

    return () => clearTimeout(timer);
  }, []);

  // Fetch jobs with combined multi-select filters and search parameters
  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem('token') || sessionStorage.getItem('token');

        let url = `http://127.0.0.1:8001/api/student/jobs?search=${encodeURIComponent(search)}`;

        if (filterParam) {
          url += `&filter=${filterParam}`;
        }

        if (selectedFilters.jobTypes.length > 0) {
          url += `&jobTypes=${encodeURIComponent(selectedFilters.jobTypes.join(','))}`;
        }

        if (selectedFilters.locations.length > 0) {
          url += `&locations=${encodeURIComponent(selectedFilters.locations.join(','))}`;
        }

        if (selectedFilters.workplaceTypes.length > 0) {
          url += `&workplaceTypes=${encodeURIComponent(selectedFilters.workplaceTypes.join(','))}`;
        }

        const res = await fetch(url, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (res.ok) {
          const data = await res.json();
          setJobs(data.jobs || []);
        }
      } catch (err) {
        console.error('Failed to fetch jobs:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, [search, filterParam, selectedFilters]);

  const totalPages = Math.ceil(jobs.length / 6) || 1;
  const paginatedJobs = jobs.slice((page - 1) * 6, page * 6);

  return (
    <div className="space-y-6 overflow-hidden">
      {/* PAGE HEADER */}
      <div
        className={`
          group
          relative
          overflow-hidden
          rounded-2xl
          border
          border-gray-100
          bg-white
          p-5
          shadow-sm
          transition-all
          duration-500
          ease-out
          hover:-translate-y-1
          hover:shadow-lg
          sm:p-6
          ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}
        `}
      >
        <div className="absolute left-0 top-0 z-20 h-0.5 w-0 bg-brand transition-all duration-300 group-hover:w-full" />
        <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand/5 blur-2xl transition-transform duration-700 group-hover:scale-150" />
        <div className="pointer-events-none absolute -bottom-20 left-1/3 h-32 w-32 rounded-full bg-emerald-100/40 blur-2xl" />

        <div className="relative z-10">
          <div className="mb-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles
                size={15}
                className="text-brand transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110"
              />
              <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-brand">
                Career Opportunities
              </span>
            </div>

            {/* Dashboard Quick Pill Indicator */}
            {filterParam && (
              <span className="flex items-center gap-1 rounded-full bg-brand-light px-3 py-1 text-xs font-semibold text-brand">
                <Filter size={12} />
                {filterParam === 'recommended' && 'Matching Your Skills'}
                {filterParam === 'expiring-soon' && 'Expiring Soon'}
              </span>
            )}
          </div>

          <h1 className="mb-1 text-xl font-bold text-gray-900 sm:text-2xl">
            Find Jobs
          </h1>

          <p className="max-w-2xl text-sm leading-relaxed text-gray-500">
            {filterParam === 'recommended'
              ? 'Showing top job openings tailored specifically to the technical skills in your profile.'
              : filterParam === 'expiring-soon'
              ? 'Showing urgent job opportunities expiring within the next 5 days.'
              : 'Discover the right opportunities that match your skills and career goals.'}
          </p>
        </div>
      </div>

      {/* FILTERS */}
      <div
        className={`
          group
          relative
          transition-all
          duration-500
          ease-out
          ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}
        `}
        style={{ transitionDelay: '150ms' }}
      >
        <div className="pointer-events-none absolute left-0 top-0 z-30 h-0.5 w-0 rounded-t-xl bg-brand transition-all duration-300 group-hover:w-full" />
        <JobFilters
          search={search}
          onSearchChange={(value) => {
            setSearch(value);
            setPage(1);
          }}
          selectedFilters={selectedFilters}
          onFilterChange={(newFilters) => {
            setSelectedFilters(newFilters);
            setPage(1);
          }}
        />
      </div>

      {/* JOB RESULTS */}
      {loading ? (
        <div className="flex h-64 items-center justify-center rounded-2xl border border-gray-100 bg-white">
          <div className="flex flex-col items-center gap-2 text-gray-400">
            <Loader2 size={28} className="animate-spin text-brand" />
            <p className="text-xs font-medium">Fetching active job listings...</p>
          </div>
        </div>
      ) : paginatedJobs.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {paginatedJobs.map((job, index) => (
            <div
              key={job.id}
              className={`
                group
                relative
                overflow-hidden
                rounded-2xl
                transition-all
                duration-500
                ease-out
                hover:-translate-y-1
                hover:shadow-lg
                ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}
              `}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="pointer-events-none absolute left-0 top-0 z-30 h-0.5 w-0 rounded-t-2xl bg-brand transition-all duration-300 group-hover:w-full" />
              <div className="pointer-events-none absolute -right-10 -top-10 z-0 h-24 w-24 rounded-full bg-brand/5 opacity-0 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:opacity-100" />

              <div className="relative z-10 h-full transition-all duration-300">
                <JobCard job={job} />
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* EMPTY STATE */
        <div
          className={`
            group
            relative
            overflow-hidden
            rounded-2xl
            border
            border-dashed
            border-gray-200
            bg-white
            px-5
            py-12
            text-center
            shadow-sm
            transition-all
            duration-500
            hover:-translate-y-1
            hover:shadow-lg
            ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}
          `}
        >
          <div className="absolute left-0 top-0 h-0.5 w-0 bg-brand transition-all duration-300 group-hover:w-full" />
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-brand-light transition-transform duration-300 group-hover:scale-110">
            <Search size={20} className="text-brand" />
          </div>
          <p className="text-sm font-medium text-gray-600">
            No jobs match your search or selected filters.
          </p>
          <p className="mt-1 text-xs text-gray-400">
            Try resetting your active filters or searching for another position or company.
          </p>
        </div>
      )}

      {/* PAGINATION */}
      {totalPages > 1 && (
        <div
          className={`
            flex
            items-center
            justify-center
            gap-2
            pt-4
            transition-all
            duration-500
            ease-out
            ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}
          `}
          style={{ transitionDelay: '900ms' }}
        >
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
            <button
              key={num}
              onClick={() => setPage(num)}
              className={`
                group
                relative
                flex
                h-9
                w-9
                items-center
                justify-center
                overflow-hidden
                rounded-lg
                border
                text-sm
                font-medium
                transition-all
                duration-300
                ${
                  page === num
                    ? `
                      border-brand
                      bg-brand
                      text-white
                      shadow-md
                      shadow-brand/20
                      hover:-translate-y-1
                      hover:shadow-lg
                    `
                    : `
                      border-gray-100
                      bg-white
                      text-gray-500
                      hover:-translate-y-1
                      hover:border-brand/20
                      hover:bg-brand-light
                      hover:text-brand
                      hover:shadow-md
                    `
                }
              `}
            >
              <span
                className={`
                  absolute
                  bottom-0
                  left-1/2
                  h-0.5
                  -translate-x-1/2
                  rounded-full
                  transition-all
                  duration-300
                  ${page === num ? 'w-4 bg-white/80' : 'w-0 bg-brand group-hover:w-4'}
                `}
              />
              {num}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default FindJobsPage;