import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Briefcase,
  CheckCircle2,
  FileText,
  XCircle,
  ArrowRight,
  Search,
  ChevronDown,
  Eye,
  Pencil,
  Users,
  MoreVertical,
  Clock,
  AlertCircle,
  Lock,
} from 'lucide-react';

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
  { icon: Briefcase, value: 14, label: 'Total Jobs', sublabel: 'All jobs posted', color: 'green' },
  { icon: CheckCircle2, value: 9, label: 'Active Jobs', sublabel: 'Currently live', color: 'blue' },
  { icon: FileText, value: 3, label: 'Draft Jobs', sublabel: 'Not published', color: 'orange' },
  { icon: XCircle, value: 2, label: 'Closed / Expired', sublabel: 'Not accepting applications', color: 'red' },
];

const jobs = [
  {
    id: 1,
    title: 'Frontend Developer Intern',
    description: 'Work on building responsive web...',
    type: 'Internship',
    department: 'Engineering',
    postedOn: 'Aug 20, 2024',
    deadline: 'Sep 10, 2024',
    daysLeft: '14 days left',
    applications: 12,
    status: 'Active',
    statusColor: 'bg-emerald-50 text-emerald-700',
    dotColor: 'bg-emerald-500',
    editAccess: 'Full Edit',
    editIcon: null,
  },
  {
    id: 2,
    title: 'UI/UX Designer Intern',
    description: 'Design intuitive and engaging...',
    type: 'Internship',
    department: 'Design',
    postedOn: 'Aug 18, 2024',
    deadline: 'Sep 05, 2024',
    daysLeft: '18 days left',
    applications: 8,
    status: 'Active',
    statusColor: 'bg-emerald-50 text-emerald-700',
    dotColor: 'bg-emerald-500',
    editAccess: 'Limited Edit',
    editIcon: 'limited',
  },
  {
    id: 3,
    title: 'Data Science Intern',
    description: 'Analyze data and build models to...',
    type: 'Internship',
    department: 'Data Science',
    postedOn: 'Aug 15, 2024',
    deadline: 'Sep 01, 2024',
    daysLeft: '17 days left',
    applications: 15,
    status: 'Active',
    statusColor: 'bg-emerald-50 text-emerald-700',
    dotColor: 'bg-emerald-500',
    editAccess: 'Limited Edit',
    editIcon: 'limited',
  },
  {
    id: 4,
    title: 'Mobile App Developer Intern',
    description: 'Develop and maintain mobile...',
    type: 'Internship',
    department: 'Engineering',
    postedOn: 'Aug 12, 2024',
    deadline: 'Aug 30, 2024',
    daysLeft: '18 days left',
    applications: 6,
    status: 'Active',
    statusColor: 'bg-emerald-50 text-emerald-700',
    dotColor: 'bg-emerald-500',
    editAccess: 'Limited Edit',
    editIcon: 'limited',
  },
  {
    id: 5,
    title: 'Backend Developer Intern',
    description: 'Build secure and scalable...',
    type: 'Internship',
    department: 'Engineering',
    postedOn: 'Aug 05, 2024',
    deadline: 'Aug 20, 2024',
    daysLeft: 'Expired',
    applications: 10,
    status: 'Expired',
    statusColor: 'bg-red-50 text-red-700',
    dotColor: 'bg-red-500',
    editAccess: 'Locked',
    editIcon: 'locked',
  },
  {
    id: 6,
    title: 'Product Management Intern',
    description: 'Assist in product strategy...',
    type: 'Internship',
    department: 'Product',
    postedOn: 'Aug 01, 2024',
    deadline: 'Sep 15, 2024',
    daysLeft: '45 days left',
    applications: 0,
    status: 'Draft',
    statusColor: 'bg-amber-50 text-amber-700',
    dotColor: 'bg-amber-500',
    editAccess: 'Full Edit',
    editIcon: null,
  },
];

const JobPostingsPage = () => {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('All Status');
  const [sortBy, setSortBy] = useState('Newest');

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch = job.title.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === 'All Status' || job.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6 overflow-hidden">
            {/* =====================================================
          HEADER
      ====================================================== */}
      <div className={`${cardClass} p-5 sm:p-6 animate-fade-in-up`} style={{ animationDelay: '0ms' }}>
        <div className={greenTopLine} />
        <div className="relative z-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-xl font-bold text-gray-900 sm:text-2xl">Job Postings</h1>
            <p className="mt-1 text-sm text-gray-500">Manage all your posted job opportunities.</p>
          </div>
          <Link to="/company/post-job">
            <Button variant="primary" className="px-5 py-2.5 text-sm">
              + Post a New Job
            </Button>
          </Link>
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
          FILTERS
      ====================================================== */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between animate-fade-in-up" style={{ animationDelay: '500ms' }}>
        <div className="relative w-full max-w-md">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search jobs by title or keyword..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-lg border border-gray-200 bg-white py-2.5 pl-9 pr-4 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-brand focus:ring-2 focus:ring-brand/10"
          />
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="appearance-none rounded-lg border border-gray-200 bg-white py-2.5 pl-4 pr-10 text-sm text-gray-700 outline-none focus:border-brand focus:ring-2 focus:ring-brand/10"
            >
              <option>All Status</option>
              <option>Active</option>
              <option>Draft</option>
              <option>Expired</option>
            </select>
            <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none rounded-lg border border-gray-200 bg-white py-2.5 pl-4 pr-10 text-sm text-gray-700 outline-none focus:border-brand focus:ring-2 focus:ring-brand/10"
            >
              <option>Newest</option>
              <option>Oldest</option>
              <option>Most Applications</option>
            </select>
            <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>
        </div>
      </div>

           {/* =====================================================
          DESKTOP TABLE (lg and up)
      ====================================================== */}
      <div className={`${cardClass} hidden lg:block animate-fade-in-up`} style={{ animationDelay: '600ms' }}>
        <div className={greenTopLine} />
        <div className="relative z-10">
          <table className="w-full table-fixed">
            <thead>
              <tr className="border-b border-gray-100 text-left text-[10px] font-bold uppercase tracking-wider text-gray-400">
                <th className="w-[22%] px-4 py-3">Job Title</th>
                <th className="w-[8%] px-4 py-3">Type</th>
                <th className="w-[10%] px-4 py-3">Department</th>
                <th className="w-[9%] px-4 py-3">Posted On</th>
                <th className="w-[10%] px-4 py-3">Deadline</th>
                <th className="w-[9%] px-4 py-3">Applications</th>
                <th className="w-[9%] px-4 py-3">Status</th>
                <th className="w-[10%] px-4 py-3">Edit Access</th>
                <th className="w-[13%] px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredJobs.map((job) => (
                <tr
                  key={job.id}
                  className="border-b border-gray-50 transition-colors hover:bg-gray-50/50 last:border-0"
                >
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-light text-brand">
                        <Briefcase size={14} />
                      </div>
                      <div className="min-w-0">
                        <p className="truncate text-sm font-medium text-gray-800">{job.title}</p>
                        <p className="truncate text-xs text-gray-400">{job.description}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span className="inline-block rounded-full bg-brand-light px-2 py-0.5 text-[10px] font-medium text-brand">
                      {job.type}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-xs text-gray-600 truncate">{job.department}</td>
                  <td className="px-4 py-3 text-[11px] text-gray-500">{job.postedOn}</td>
                  <td className="px-4 py-3">
                    <div className="text-[11px] text-gray-700">{job.deadline}</div>
                    <div className={`mt-0.5 text-[10px] font-medium ${job.daysLeft === 'Expired' ? 'text-red-500' : 'text-gray-400'}`}>
                      {job.daysLeft}
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="text-sm font-semibold text-gray-800">{job.applications}</div>
                    <div className="text-[10px] text-gray-400">Apps</div>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold ${job.statusColor}`}>
                      <span className={`h-1.5 w-1.5 rounded-full ${job.dotColor}`} />
                      {job.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-1 text-[11px] text-gray-600">
                      {job.editIcon === 'locked' && <Lock size={11} className="text-gray-400" />}
                      {job.editIcon === 'limited' && <Clock size={11} className="text-amber-500" />}
                      <span className={job.editIcon === 'locked' ? 'text-gray-400' : ''}>{job.editAccess}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center justify-end gap-1">
                      <button className="flex h-7 w-7 items-center justify-center rounded-md text-gray-400 transition-colors hover:bg-gray-100 hover:text-brand">
                        <Eye size={14} />
                      </button>
                      <button className="flex h-7 w-7 items-center justify-center rounded-md text-gray-400 transition-colors hover:bg-gray-100 hover:text-brand">
                        <Pencil size={14} />
                      </button>
                      <button className="flex h-7 w-7 items-center justify-center rounded-md text-gray-400 transition-colors hover:bg-gray-100 hover:text-brand">
                        <Users size={14} />
                      </button>
                      <button className="flex h-7 w-7 items-center justify-center rounded-md text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-700">
                        <MoreVertical size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-gray-100 px-5 py-4 sm:flex-row">
          <p className="text-xs text-gray-400">Showing 1 to 6 of 14 jobs</p>
          <div className="flex items-center gap-2">
            <button className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-400 hover:bg-gray-100 hover:text-gray-700">
              <ArrowRight size={14} className="rotate-180" />
            </button>
            {[1, 2, 3].map((page) => (
              <button
                key={page}
                className={`flex h-8 w-8 items-center justify-center rounded-lg text-xs font-medium transition-colors ${page === 1 ? 'bg-brand text-white' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                {page}
              </button>
            ))}
            <button className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-400 hover:bg-gray-100 hover:text-gray-700">
              <ArrowRight size={14} />
            </button>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <span>Rows per page:</span>
            <div className="relative">
              <select className="appearance-none rounded border border-gray-200 bg-white py-1 pl-2 pr-6 text-xs outline-none">
                <option>6</option>
                <option>10</option>
                <option>20</option>
              </select>
              <ChevronDown size={12} className="absolute right-1.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          MOBILE CARDS (below lg)
      ====================================================== */}
      <div className="space-y-4 lg:hidden">
        {filteredJobs.map((job, index) => (
          <div
            key={job.id}
            className={`${cardClass} p-4 sm:p-5 animate-fade-in-up`}
            style={{ animationDelay: `${600 + index * 75}ms` }}
          >
            <div className={greenTopLine} />
            <div className="relative z-10 space-y-4">
              {/* Top row: Status + More */}
              <div className="flex items-center justify-between">
                <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold ${job.statusColor}`}>
                  <span className={`h-1.5 w-1.5 rounded-full ${job.dotColor}`} />
                  {job.status}
                </span>
                <button className="text-gray-400 hover:text-gray-700">
                  <MoreVertical size={18} />
                </button>
              </div>

              {/* Title & Icon */}
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-light text-brand">
                  <Briefcase size={18} />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-bold text-gray-900">{job.title}</p>
                  <p className="mt-0.5 text-xs text-gray-400">{job.description}</p>
                </div>
              </div>

              {/* Details Grid */}
              <div className="grid grid-cols-2 gap-3 rounded-xl bg-gray-50/70 p-3">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Type</p>
                  <span className="mt-1 inline-block rounded-full bg-brand-light px-2 py-0.5 text-[11px] font-medium text-brand">
                    {job.type}
                  </span>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Department</p>
                  <p className="mt-1 text-xs text-gray-700">{job.department}</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Posted</p>
                  <p className="mt-1 text-xs text-gray-700">{job.postedOn}</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Deadline</p>
                  <p className="mt-1 text-xs text-gray-700">{job.deadline}</p>
                  <p className={`text-[11px] font-medium ${job.daysLeft === 'Expired' ? 'text-red-500' : 'text-gray-400'}`}>
                    {job.daysLeft}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Applications</p>
                  <p className="mt-1 text-sm font-bold text-gray-900">{job.applications}</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Edit Access</p>
                  <div className="mt-1 flex items-center gap-1 text-xs text-gray-600">
                    {job.editIcon === 'locked' && <Lock size={12} className="text-gray-400" />}
                    {job.editIcon === 'limited' && <Clock size={12} className="text-amber-500" />}
                    <span className={job.editIcon === 'locked' ? 'text-gray-400' : ''}>{job.editAccess}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 pt-1">
                <button className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-gray-50 py-2 text-xs font-medium text-gray-600 transition-colors hover:bg-brand-light hover:text-brand">
                  <Eye size={14} /> View
                </button>
                <button className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-gray-50 py-2 text-xs font-medium text-gray-600 transition-colors hover:bg-brand-light hover:text-brand">
                  <Pencil size={14} /> Edit
                </button>
                <button className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-gray-50 py-2 text-xs font-medium text-gray-600 transition-colors hover:bg-brand-light hover:text-brand">
                  <Users size={14} /> Applicants
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Mobile Pagination */}
        <div className="flex items-center justify-between pt-2">
          <p className="text-xs text-gray-400">Showing 1 to 6 of 14</p>
          <div className="flex items-center gap-2">
            <button className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-400 hover:bg-gray-100">
              <ArrowRight size={14} className="rotate-180" />
            </button>
            <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand text-xs font-medium text-white">1</button>
            <button className="flex h-8 w-8 items-center justify-center rounded-lg text-xs font-medium text-gray-600 hover:bg-gray-100">2</button>
            <button className="flex h-8 w-8 items-center justify-center rounded-lg text-xs font-medium text-gray-600 hover:bg-gray-100">3</button>
            <button className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-400 hover:bg-gray-100">
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobPostingsPage;