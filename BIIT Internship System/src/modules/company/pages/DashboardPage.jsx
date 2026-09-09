import { Link } from 'react-router-dom';
import {
  Users,
  UserCheck,
  CalendarDays,
  Briefcase,
  ArrowRight,
  Building2,
  MoreVertical,
  AlertCircle,
  Clock,
} from 'lucide-react';

import Avatar from '../../../components/common/Avatar';
import Button from '../../../components/common/Button';
import StatCard from '../components/dashboard/StatCard';

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

const stats = [
  { icon: Users, value: 24, label: 'Admin Referrals', sublabel: 'Candidates received from Admin', color: 'green' },
  { icon: UserCheck, value: 8, label: 'Shortlisted Candidates', sublabel: 'Selected for next steps', color: 'blue' },
  { icon: CalendarDays, value: 5, label: 'Interviews Scheduled', sublabel: 'Upcoming interviews', color: 'orange' },
  { icon: Briefcase, value: 3, label: 'Active Job Posts', sublabel: 'Currently live for students', color: 'red' },
];

const referrals = [
  { initials: 'AK', name: 'Ahmed Khan', program: 'BS Software Engineering', role: 'Software Engineer Intern', date: 'Aug 21, 2024', status: 'New', statusColor: 'bg-blue-50 text-blue-700' },
  { initials: 'SA', name: 'Sara Ali', program: 'BS Design', role: 'UI/UX Designer Intern', date: 'Aug 19, 2024', status: 'Reviewing', statusColor: 'bg-amber-50 text-amber-700' },
  { initials: 'HR', name: 'Hamza Raza', program: 'BS Data Science', role: 'Data Science Intern', date: 'Aug 18, 2024', status: 'Shortlisted', statusColor: 'bg-emerald-50 text-emerald-700' },
  { initials: 'ZM', name: 'Zainab Malik', program: 'BS Computer Science', role: 'Frontend Developer Intern', date: 'Aug 17, 2024', status: 'New', statusColor: 'bg-blue-50 text-blue-700' },
];

const activeJobs = [
  { title: 'Frontend Developer Intern', applications: 14 },
  { title: 'UI/UX Designer Intern', applications: 12 },
  { title: 'Data Science Intern', applications: 8 },
];

const upcomingInterviews = [
  { name: 'Ahmed Khan', role: 'Software Engineer Intern', date: 'Aug 22, 2024', time: '10:00 AM' },
  { name: 'Sara Ali', role: 'UI/UX Designer Intern', date: 'Aug 22, 2024', time: '02:30 PM' },
];

const expiringJobs = [
  { title: 'Frontend Developer Intern', daysLeft: 2, date: 'Aug 24, 2024', urgent: true },
  { title: 'UI/UX Designer Intern', daysLeft: 5, date: 'Aug 27, 2024', urgent: false },
];

const DashboardPage = () => {
  return (
    <div className="space-y-6 overflow-hidden">

      {/* =====================================================
          WELCOME BANNER
      ====================================================== */}
      <div className={`${cardClass} p-5 sm:p-6 animate-fade-in-up`} style={{ animationDelay: '0ms' }}>
        <div className={greenTopLine} />
        <div className="relative z-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-light text-brand">
              <Building2 size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900 sm:text-2xl">
                Welcome back, TechCorp!
              </h1>
              <p className="mt-0.5 text-sm text-gray-500">
                Manage internship opportunities and connect with talented students.
              </p>
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-4">
            <div className="text-right">
              <p className="text-xs text-gray-400">Profile Completion</p>
              <p className="text-sm font-semibold text-brand">85%</p>
              <div className="mt-1 h-1.5 w-24 overflow-hidden rounded-full bg-gray-100">
                <div className="h-full rounded-full bg-brand" style={{ width: '85%' }} />
              </div>
            </div>
            <Link to="/company/company-profile">
              <Button variant="primary" className="px-4 py-2 text-xs">
                Complete Profile
                <ArrowRight size={14} />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* =====================================================
          STAT CARDS
      ====================================================== */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className={`${cardClass} animate-fade-in-up`}
            style={{ animationDelay: `${100 + index * 100}ms` }}
          >
            <div className={greenTopLine} />
            <StatCard {...stat} />
          </div>
        ))}
      </div>

      {/* =====================================================
          REFERRALS + ACTIVE JOBS
      ====================================================== */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Recent Candidate Referrals */}
        <div className={`${cardClass} p-5 sm:p-6 lg:col-span-2 animate-fade-in-up`} style={{ animationDelay: '500ms' }}>
          <div className={greenTopLine} />
          <div className="relative z-10">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="mb-0.5 text-[10px] font-bold uppercase tracking-wider text-brand">Admin Forwarded</p>
                <h2 className="text-base font-bold text-gray-900">Recent Candidate Referrals</h2>
              </div>
              <Link to="/company/applicants" className="flex items-center gap-1 text-xs font-medium text-brand transition-all duration-300 hover:gap-2 hover:underline">
                View All <ArrowRight size={12} />
              </Link>
            </div>

            {/* Table Header */}
            <div className="hidden grid-cols-12 gap-4 border-b border-gray-100 pb-2 text-[10px] font-bold uppercase tracking-wider text-gray-400 sm:grid">
              <div className="col-span-3">Candidate</div>
              <div className="col-span-2">Program</div>
              <div className="col-span-3">Referred For</div>
              <div className="col-span-2">Referred On</div>
              <div className="col-span-2">Status</div>
            </div>

            {/* Table Rows */}
            <div className="space-y-1 mt-2">
              {referrals.map((item) => (
                <div
                  key={item.name}
                  className="grid grid-cols-1 items-center gap-2 rounded-xl p-2 transition-colors hover:bg-gray-50 sm:grid-cols-12 sm:gap-4"
                >
                  <div className="col-span-3 flex items-center gap-3">
                    <Avatar name={item.name} size="sm" />
                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium text-gray-800">{item.name}</p>
                      <p className="truncate text-xs text-gray-400">{item.program}</p>
                    </div>
                  </div>
                  <div className="col-span-2 hidden text-xs text-gray-600 sm:block">{item.program}</div>
                  <div className="col-span-3 hidden text-xs text-gray-600 sm:block">{item.role}</div>
                  <div className="col-span-2 hidden text-xs text-gray-400 sm:block">{item.date}</div>
                  <div className="col-span-2 flex items-center justify-between sm:justify-start">
                    <span className={`inline-block rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${item.statusColor}`}>
                      {item.status}
                    </span>
                    <button className="ml-2 text-gray-300 hover:text-gray-600 sm:hidden">
                      <MoreVertical size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-3 border-t border-gray-50 pt-3">
              <Link to="/company/applicants" className="flex items-center justify-center gap-1 text-xs font-medium text-brand transition-all duration-300 hover:gap-2 hover:underline">
                View All Referrals <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        </div>

        {/* Active Job Posts */}
        <div className={`${cardClass} p-5 sm:p-6 animate-fade-in-up`} style={{ animationDelay: '600ms' }}>
          <div className={greenTopLine} />
          <div className="relative z-10">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-base font-bold text-gray-900">Active Job Posts</h2>
              <Link to="/company/job-postings" className="flex items-center gap-1 text-xs font-medium text-brand transition-all duration-300 hover:gap-2 hover:underline">
                View All <ArrowRight size={12} />
              </Link>
            </div>

            <div className="space-y-4">
              {activeJobs.map((job) => (
                <div key={job.title} className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                      <p className="text-sm font-medium text-gray-800">{job.title}</p>
                    </div>
                    <p className="mt-0.5 pl-3.5 text-xs text-gray-400">{job.applications} Applications</p>
                  </div>
                  <div className="flex shrink-0 items-center gap-2">
                    <Link to="/company/job-postings" className="text-xs font-medium text-brand hover:underline">
                      Manage Job
                    </Link>
                    <button className="text-gray-300 hover:text-gray-600">
                      <MoreVertical size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5">
              <Link to="/company/post-job">
                <Button variant="primary" className="w-full py-2.5 text-sm">
                  + Post a New Job
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          UPCOMING INTERVIEWS + EXPIRING JOBS
      ====================================================== */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Upcoming Interviews */}
        <div className={`${cardClass} p-5 sm:p-6 animate-fade-in-up`} style={{ animationDelay: '700ms' }}>
          <div className={greenTopLine} />
          <div className="relative z-10">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-base font-bold text-gray-900">Upcoming Interviews</h2>
              <Link to="/company/interviews" className="flex items-center gap-1 text-xs font-medium text-brand transition-all duration-300 hover:gap-2 hover:underline">
                View All <ArrowRight size={12} />
              </Link>
            </div>

            <div className="space-y-3">
              {upcomingInterviews.map((item) => (
                <div key={item.name} className="flex items-center justify-between gap-3 rounded-xl border-b border-gray-50 p-2 pb-3 last:border-0 last:pb-0">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-light text-brand">
                      <CalendarDays size={16} />
                    </div>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium text-gray-800">{item.name}</p>
                      <p className="truncate text-xs text-gray-500">{item.role}</p>
                      <p className="mt-0.5 text-xs text-gray-400">{item.date} · {item.time}</p>
                    </div>
                  </div>
                  <span className="inline-block shrink-0 rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-700">
                    Scheduled
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Jobs Expiring Soon */}
        <div className={`${cardClass} p-5 sm:p-6 animate-fade-in-up`} style={{ animationDelay: '800ms' }}>
          <div className={greenTopLine} />
          <div className="relative z-10">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-base font-bold text-gray-900">Jobs Expiring Soon</h2>
              <Link to="/company/job-postings" className="flex items-center gap-1 text-xs font-medium text-brand transition-all duration-300 hover:gap-2 hover:underline">
                View All <ArrowRight size={12} />
              </Link>
            </div>

            <div className="space-y-3">
              {expiringJobs.map((item) => (
                <div key={item.title} className="flex items-center justify-between gap-3 rounded-xl p-2">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${item.urgent ? 'bg-red-50 text-red-500' : 'bg-amber-50 text-amber-500'}`}>
                      {item.urgent ? <AlertCircle size={16} /> : <Clock size={16} />}
                    </div>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium text-gray-800">{item.title}</p>
                      <p className={`mt-0.5 text-xs font-medium ${item.urgent ? 'text-red-500' : 'text-amber-600'}`}>
                        Expires in {item.daysLeft} days
                      </p>
                    </div>
                  </div>
                  <Link to="/company/job-postings" className="shrink-0 text-xs font-medium text-brand hover:underline">
                    Manage Job
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default DashboardPage;