import { useState } from 'react';
import {
  Users,
  Clock,
  CheckCircle2,
  XCircle,
  Search,
  ChevronDown,
  Eye,
  Check,
  X,
  CheckCircle,
  AlertCircle,
  Lightbulb,
} from 'lucide-react';

import Avatar from '../../../components/common/Avatar';
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
  { icon: Users, value: 48, label: 'Total Applicants', sublabel: 'Across all jobs', color: 'blue' },
  { icon: Clock, value: 12, label: 'To Review', sublabel: 'Decisions pending', color: 'orange' },
  { icon: CheckCircle2, value: 21, label: 'Selected', sublabel: 'Moved to Interviews', color: 'green' },
  { icon: XCircle, value: 15, label: 'Rejected', sublabel: 'Not selected', color: 'red' },
];

const applicants = [
  { id: 1, name: 'Ahmed Khan', email: 'ahmed.khan@email.com', initials: 'AK', job: 'Frontend Developer Intern', date: 'Aug 21, 2024', status: 'To Review', statusColor: 'bg-amber-50 text-amber-700', dotColor: 'bg-amber-500' },
  { id: 2, name: 'Sara Ali', email: 'sara.a@email.com', initials: 'SA', job: 'UI/UX Designer Intern', date: 'Aug 20, 2024', status: 'Selected', statusColor: 'bg-emerald-50 text-emerald-700', dotColor: 'bg-emerald-500' },
  { id: 3, name: 'Hamza Raza', email: 'hamza.r@email.com', initials: 'HR', job: 'Data Science Intern', date: 'Aug 19, 2024', status: 'To Review', statusColor: 'bg-amber-50 text-amber-700', dotColor: 'bg-amber-500' },
  { id: 4, name: 'Mahnoor Ahmed', email: 'mahnoor.a@email.com', initials: 'MA', job: 'Frontend Developer Intern', date: 'Aug 19, 2024', status: 'Selected', statusColor: 'bg-emerald-50 text-emerald-700', dotColor: 'bg-emerald-500' },
  { id: 5, name: 'Uzair Malik', email: 'uzair.m@email.com', initials: 'UM', job: 'Mobile App Developer Intern', date: 'Aug 18, 2024', status: 'Rejected', statusColor: 'bg-red-50 text-red-700', dotColor: 'bg-red-500' },
  { id: 6, name: 'Tayyaba Iqbal', email: 'tayyaba.i@email.com', initials: 'TI', job: 'UI/UX Designer Intern', date: 'Aug 18, 2024', status: 'To Review', statusColor: 'bg-amber-50 text-amber-700', dotColor: 'bg-amber-500' },
  { id: 7, name: 'Ali Abbas', email: 'ali.a@email.com', initials: 'AA', job: 'Data Science Intern', date: 'Aug 17, 2024', status: 'Rejected', statusColor: 'bg-red-50 text-red-700', dotColor: 'bg-red-500' },
  { id: 8, name: 'Noor Fatima', email: 'noor.f@email.com', initials: 'NF', job: 'Frontend Developer Intern', date: 'Aug 15, 2024', status: 'To Review', statusColor: 'bg-amber-50 text-amber-700', dotColor: 'bg-amber-500' },
];

/* =========================================================
   DONUT CHART DATA
========================================================= */
const DONUT_R = 40;
const DONUT_CIRCUMFERENCE = 2 * Math.PI * DONUT_R; // ~251.33
const chartData = [
  { label: 'Selected', value: 21, percent: 43.75, color: '#0c7347', dash: 109.96, offset: 0 },
  { label: 'To Review', value: 12, percent: 25, color: '#f59e0b', dash: 62.83, offset: -109.96 },
  { label: 'Rejected', value: 15, percent: 31.25, color: '#ef4444', dash: 78.54, offset: -172.79 },
];

const ApplicantsPage = () => {
  const [search, setSearch] = useState('');
  const [jobFilter, setJobFilter] = useState('All Jobs');
  const [statusFilter, setStatusFilter] = useState('All Status');

  const filtered = applicants.filter((a) => {
    const matchesSearch =
      a.name.toLowerCase().includes(search.toLowerCase()) ||
      a.email.toLowerCase().includes(search.toLowerCase()) ||
      a.job.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === 'All Status' || a.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6 overflow-hidden">
            {/* =====================================================
          HEADER
      ====================================================== */}
      <div className={`${cardClass} p-5 sm:p-6 animate-fade-in-up`} style={{ animationDelay: '0ms' }}>
        <div className={greenTopLine} />
        <div className="relative z-10">
          <h1 className="text-xl font-bold text-gray-900 sm:text-2xl">Applicants</h1>
          <p className="mt-1 text-sm text-gray-500">
            Review and manage students who applied for your job openings.
          </p>
        </div>
      </div>
            
       {/* =====================================================
          MAIN CONTENT + SIDEBAR
      ====================================================== */}
      <div className="flex flex-col gap-6 lg:flex-row">
        {/* LEFT COLUMN */}
        <div className="min-w-0 flex-1 space-y-6">
          {/* Filters */}
          <div className="flex flex-wrap items-center gap-3 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <div className="relative">
              <select
                value={jobFilter}
                onChange={(e) => setJobFilter(e.target.value)}
                className="appearance-none rounded-lg border border-gray-200 bg-white py-2.5 pl-4 pr-10 text-sm text-gray-700 outline-none focus:border-brand focus:ring-2 focus:ring-brand/10"
              >
                <option>All Jobs</option>
                <option>Frontend Developer Intern</option>
                <option>UI/UX Designer Intern</option>
                <option>Data Science Intern</option>
              </select>
              <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
            <div className="relative">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="appearance-none rounded-lg border border-gray-200 bg-white py-2.5 pl-4 pr-10 text-sm text-gray-700 outline-none focus:border-brand focus:ring-2 focus:ring-brand/10"
              >
                <option>All Status</option>
                <option>To Review</option>
                <option>Selected</option>
                <option>Rejected</option>
              </select>
              <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
            <div className="relative w-full max-w-xs sm:w-auto sm:flex-1">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name, email or keyword..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-lg border border-gray-200 bg-white py-2.5 pl-9 pr-4 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-brand focus:ring-2 focus:ring-brand/10"
              />
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`${cardClass} animate-fade-in-up`}
                style={{ animationDelay: `${150 + index * 100}ms` }}
              >
                <div className={greenTopLine} />
                <StatCard {...stat} />
              </div>
            ))}
          </div>

          {/* DESKTOP TABLE */}
          <div className={`${cardClass} hidden lg:block animate-fade-in-up`} style={{ animationDelay: '550ms' }}>
            <div className={greenTopLine} />
            <div className="relative z-10">
              <div className="px-5 py-4">
                <h2 className="text-base font-bold text-gray-900">Applicants List</h2>
              </div>
              <table className="w-full table-fixed">
                <thead>
                  <tr className="border-b border-gray-100 text-left text-[10px] font-bold uppercase tracking-wider text-gray-400">
                    <th className="w-[28%] px-5 py-2.5">Applicant</th>
                    <th className="w-[24%] px-5 py-2.5">Job Title</th>
                    <th className="w-[16%] px-5 py-2.5">Applied On</th>
                    <th className="w-[16%] px-5 py-2.5">Status</th>
                    <th className="w-[16%] px-5 py-2.5 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((item) => (
                    <tr key={item.id} className="border-b border-gray-50 transition-colors hover:bg-gray-50/50 last:border-0">
                      <td className="px-5 py-3">
                        <div className="flex items-center gap-2.5">
                          <Avatar name={item.name} size="sm" />
                          <div className="min-w-0">
                            <p className="truncate text-sm font-medium text-gray-800">{item.name}</p>
                            <p className="truncate text-[11px] text-gray-400">{item.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-3 text-xs text-gray-700 truncate">{item.job}</td>
                      <td className="px-5 py-3 text-xs text-gray-500">{item.date}</td>
                      <td className="px-5 py-3">
                        <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-semibold ${item.statusColor}`}>
                          <span className={`h-1.5 w-1.5 rounded-full ${item.dotColor}`} />
                          {item.status}
                        </span>
                      </td>
                      <td className="px-5 py-3">
                        <div className="flex items-center justify-end gap-1">
                          <button className="flex h-7 w-7 items-center justify-center rounded-md text-gray-400 transition-colors hover:bg-gray-100 hover:text-brand">
                            <Eye size={14} />
                          </button>
                          <button className="flex h-7 w-7 items-center justify-center rounded-md text-gray-400 transition-colors hover:bg-emerald-50 hover:text-emerald-600">
                            <Check size={14} />
                          </button>
                          <button className="flex h-7 w-7 items-center justify-center rounded-md text-gray-400 transition-colors hover:bg-red-50 hover:text-red-600">
                            <X size={14} />
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
              <p className="text-xs text-gray-400">Showing 1 to 8 of 48 applicants</p>
              <div className="flex items-center gap-1.5">
                <button className="flex h-7 w-7 items-center justify-center rounded-md text-gray-400 hover:bg-gray-100">
                  <ChevronDown size={14} className="-rotate-90" />
                </button>
                {[1, 2, 3, 4, 5, 6].map((p) => (
                  <button
                    key={p}
                    className={`flex h-7 w-7 items-center justify-center rounded-md text-xs font-medium transition-colors ${p === 1 ? 'bg-brand text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                  >
                    {p}
                  </button>
                ))}
                <button className="flex h-7 w-7 items-center justify-center rounded-md text-gray-400 hover:bg-gray-100">
                  <ChevronDown size={14} className="rotate-90" />
                </button>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span>Rows per page:</span>
                <div className="relative">
                  <select className="appearance-none rounded border border-gray-200 bg-white py-1 pl-2 pr-6 text-xs outline-none">
                    <option>8</option>
                    <option>12</option>
                    <option>24</option>
                  </select>
                  <ChevronDown size={12} className="absolute right-1.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

          {/* MOBILE CARDS */}
          <div className="space-y-3 lg:hidden">
            {filtered.map((item, index) => (
              <div
                key={item.id}
                className={`${cardClass} p-4 animate-fade-in-up`}
                style={{ animationDelay: `${550 + index * 75}ms` }}
              >
                <div className={greenTopLine} />
                <div className="relative z-10 space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <Avatar name={item.name} size="sm" />
                      <div className="min-w-0">
                        <p className="truncate text-sm font-bold text-gray-900">{item.name}</p>
                        <p className="truncate text-[11px] text-gray-400">{item.email}</p>
                      </div>
                    </div>
                    <span className={`inline-flex shrink-0 items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-semibold ${item.statusColor}`}>
                      <span className={`h-1.5 w-1.5 rounded-full ${item.dotColor}`} />
                      {item.status}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 rounded-xl bg-gray-50/70 p-3">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Job Title</p>
                      <p className="mt-1 text-xs text-gray-700">{item.job}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Applied On</p>
                      <p className="mt-1 text-xs text-gray-700">{item.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 pt-1">
                    <button className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-gray-50 py-2 text-xs font-medium text-gray-600 transition-colors hover:bg-brand-light hover:text-brand">
                      <Eye size={14} /> View
                    </button>
                    <button className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-gray-50 py-2 text-xs font-medium text-gray-600 transition-colors hover:bg-emerald-50 hover:text-emerald-600">
                      <Check size={14} /> Select
                    </button>
                    <button className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-gray-50 py-2 text-xs font-medium text-gray-600 transition-colors hover:bg-red-50 hover:text-red-600">
                      <X size={14} /> Reject
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* Mobile Pagination */}
            <div className="flex items-center justify-between pt-2">
              <p className="text-xs text-gray-400">Showing 1 to 8 of 48</p>
              <div className="flex items-center gap-1.5">
                <button className="flex h-7 w-7 items-center justify-center rounded-md text-gray-400 hover:bg-gray-100">
                  <ChevronDown size={14} className="-rotate-90" />
                </button>
                <button className="flex h-7 w-7 items-center justify-center rounded-md bg-brand text-xs font-medium text-white">1</button>
                <button className="flex h-7 w-7 items-center justify-center rounded-md text-xs font-medium text-gray-600 hover:bg-gray-100">2</button>
                <button className="flex h-7 w-7 items-center justify-center rounded-md text-gray-400 hover:bg-gray-100">
                  <ChevronDown size={14} className="rotate-90" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="w-full shrink-0 space-y-4 lg:w-72">
          {/* Application Summary */}
          <div className={`${cardClass} p-5 animate-fade-in-up`} style={{ animationDelay: '200ms' }}>
            <div className={greenTopLine} />
            <div className="relative z-10">
              <h3 className="text-sm font-bold text-gray-900">Application Summary</h3>
              <div className="mt-4 flex items-center justify-center">
                <div className="relative">
                  <svg width="120" height="120" viewBox="0 0 120 120" className="-rotate-90">
                    {/* Background circle */}
                    <circle cx="60" cy="60" r={DONUT_R} fill="none" stroke="#e5e7eb" strokeWidth="10" />
                    {/* Segments */}
                    {chartData.map((seg) => (
                      <circle
                        key={seg.label}
                        cx="60"
                        cy="60"
                        r={DONUT_R}
                        fill="none"
                        stroke={seg.color}
                        strokeWidth="10"
                        strokeDasharray={`${seg.dash} ${DONUT_CIRCUMFERENCE - seg.dash}`}
                        strokeDashoffset={seg.offset}
                        strokeLinecap="round"
                      />
                    ))}
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-2xl font-bold text-gray-900">48</span>
                    <span className="text-[10px] font-medium text-gray-400">Total</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                {chartData.map((seg) => (
                  <div key={seg.label} className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: seg.color }} />
                      <span className="text-gray-600">{seg.label}</span>
                    </div>
                    <span className="font-semibold text-gray-900">
                      {seg.value} <span className="text-[10px] font-normal text-gray-400">({seg.percent}%)</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Status Guide */}
          <div className={`${cardClass} p-5 animate-fade-in-up`} style={{ animationDelay: '300ms' }}>
            <div className={greenTopLine} />
            <div className="relative z-10">
              <h3 className="text-sm font-bold text-gray-900">Status Guide</h3>
              <div className="mt-4 space-y-3">
                <div className="flex items-start gap-2.5">
                  <CheckCircle size={16} className="mt-0.5 shrink-0 text-emerald-500" />
                  <div>
                    <p className="text-xs font-semibold text-gray-800">Selected</p>
                    <p className="text-[11px] text-gray-500">Student selected for interview.</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Clock size={16} className="mt-0.5 shrink-0 text-amber-500" />
                  <div>
                    <p className="text-xs font-semibold text-gray-800">To Review</p>
                    <p className="text-[11px] text-gray-500">Your decision is pending.</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <XCircle size={16} className="mt-0.5 shrink-0 text-red-500" />
                  <div>
                    <p className="text-xs font-semibold text-gray-800">Rejected</p>
                    <p className="text-[11px] text-gray-500">Student not selected.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tip */}
          <div className={`${cardClass} p-5 animate-fade-in-up`} style={{ animationDelay: '400ms' }}>
            <div className={greenTopLine} />
            <div className="relative z-10">
              <div className="flex items-center gap-2">
                <Lightbulb size={16} className="text-brand" />
                <h3 className="text-sm font-bold text-gray-900">Tip</h3>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-gray-600">
                Click on <span className="inline-flex items-center gap-0.5 font-semibold text-emerald-600"><Check size={12} /> Select</span> to move applicant to Interviews or <span className="inline-flex items-center gap-0.5 font-semibold text-red-600"><X size={12} /> Reject</span> to mark as rejected.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicantsPage;