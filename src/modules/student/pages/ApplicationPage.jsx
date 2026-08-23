import { useState } from 'react';
import { Search, CheckCircle2, Clock, Send, XCircle } from 'lucide-react';
import ApplicationCard from '../components/applications/ApplicationCard';

const statPills = [
  { icon: CheckCircle2, value: 1, label: 'Accepted', color: 'text-green-600 bg-green-50' },
  { icon: Clock, value: 4, label: 'Under Review', color: 'text-yellow-600 bg-yellow-50' },
  { icon: Send, value: 2, label: 'Interviews', color: 'text-blue-600 bg-blue-50' },
  { icon: XCircle, value: 12, label: 'Total', color: 'text-gray-600 bg-gray-100' },
];

const applications = [
  {
    id: 1,
    role: 'React.js Developer Intern',
    company: 'TechDay Innovations',
    location: 'Islamabad',
    appliedDate: 'May 21, 2025',
    status: 'accepted',
    statusLabel: 'Accepted',
    resumeName: 'Ayesha_Resume.pdf',
  },
  {
    id: 2,
    role: 'Python Developer Intern',
    company: 'BabaSoft Solutions',
    location: 'Rawalpindi',
    appliedDate: 'May 20, 2025',
    status: 'rejected',
    statusLabel: 'Rejected',
    resumeName: 'Ayesha_Resume.pdf',
  },
  {
    id: 3,
    role: 'Node.js Developer Intern',
    company: 'CloudSoft Routine',
    location: 'Lahore',
    appliedDate: 'May 19, 2025',
    status: 'interview-scheduled',
    statusLabel: 'Interview Scheduled',
    resumeName: 'Ayesha_Resume.pdf',
  },
  {
    id: 4,
    role: 'PHP Developer Intern',
    company: 'CodeStaff Routine',
    location: 'Karachi',
    appliedDate: 'May 25, 2025',
    status: 'under-review',
    statusLabel: 'Under Review',
    resumeName: 'Ayesha_Resume.pdf',
  },
];

const ApplicationsPage = () => {
  const [search, setSearch] = useState('');

  const filtered = applications.filter((app) =>
    app.role.toLowerCase().includes(search.toLowerCase()) ||
    app.company.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold mb-1">My Applications</h1>
        <p className="text-gray-500 text-sm">Track and manage your internship applications and stay updated on their progress.</p>
      </div>

      {/* Stat pills */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {statPills.map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl border border-gray-100 p-4 flex items-center gap-3">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${stat.color}`}>
              <stat.icon size={18} />
            </div>
            <div>
              <p className="text-lg font-bold leading-none">{stat.value}</p>
              <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Search */}
      <div className="relative max-w-md">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search applications..."
          className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-gray-300 text-sm outline-none focus:border-brand"
        />
      </div>

      {/* Applications list */}
      <div className="space-y-3">
        {filtered.length > 0 ? (
          filtered.map((app) => <ApplicationCard key={app.id} application={app} />)
        ) : (
          <p className="text-sm text-gray-400 text-center py-8">No applications match your search.</p>
        )}
      </div>
    </div>
  );
};

export default ApplicationsPage;