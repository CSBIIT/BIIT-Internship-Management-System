import { Link } from 'react-router-dom';
import { Send, CheckCircle2, Clock, XCircle, ArrowRight } from 'lucide-react';
import Avatar from '../../../components/common/Avatar';
import Badge from '../../../components/common/Badge';
import Button from '../../../components/common/Button';
import StatCard from '../components/dashboard/StatCard';

const stats = [
  { icon: Send, value: 12, label: 'Applied Requests', color: 'blue' },
  { icon: CheckCircle2, value: 3, label: 'Accepted Requests', color: 'green' },
  { icon: Clock, value: 5, label: 'Pending Requests', color: 'yellow' },
  { icon: XCircle, value: 2, label: 'Rejected Requests', color: 'red' },
];

const interviews = [
  { company: 'TechDay Innovations', role: 'Frontend Engineering Intern', date: 'Oct 24, 10:00 AM', status: 'interview-scheduled' },
  { company: 'Global Phones LLC', role: 'Data Analyst Intern', date: 'Oct 26, 2:00 PM', status: 'interview-scheduled' },
];

const deadlines = [
  { title: 'Frontend Developer Intern', company: 'Amazing Tech Ltd', daysLeft: 2 },
  { title: 'UI/UX Designer Intern', company: 'Creative Studio Agency', daysLeft: 5 },
];

const recommended = [
  { title: 'iOS Design Intern', tags: ['Design', 'Figma'] },
  { title: 'Backend Developer', tags: ['Engineering', 'Node.js'] },
  { title: 'Data Science Intern', tags: ['Python', 'ML'] },
];

const DashboardPage = () => {
  return (
    <div className="space-y-6">
      {/* Welcome banner */}
      <div className="bg-white rounded-2xl border border-gray-100 p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold mb-1">Welcome back, Ali!</h1>
          <p className="text-gray-500 text-sm">
            Discover new opportunities and take the next step in your career.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <div className="text-right">
            <p className="text-xs text-gray-400">Profile Completion</p>
            <p className="text-sm font-semibold text-brand">75%</p>
          </div>
          <Avatar name="Ali Khan" size="md" />
        </div>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upcoming interviews */}
        <div className="bg-white rounded-2xl border border-gray-100 p-5 sm:p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-bold text-base">Upcoming Interviews</h2>
            <Link to="/student/applications" className="text-xs text-brand hover:underline">
              View All
            </Link>
          </div>

          <div className="space-y-3">
            {interviews.map((item) => (
              <div key={item.company} className="flex items-center justify-between border-b border-gray-50 last:border-0 pb-3 last:pb-0">
                <div>
                  <p className="text-sm font-medium">{item.company}</p>
                  <p className="text-xs text-gray-500">{item.role}</p>
                  <p className="text-xs text-gray-400 mt-1">{item.date}</p>
                </div>
                <Badge status={item.status}>Interview Scheduled</Badge>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming deadlines */}
        <div className="bg-white rounded-2xl border border-gray-100 p-5 sm:p-6">
          <h2 className="font-bold text-base mb-4">Upcoming Deadlines</h2>

          <div className="space-y-4">
            {deadlines.map((item) => (
              <div key={item.title} className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-medium">{item.title}</p>
                  <p className="text-xs text-gray-500">{item.company}</p>
                  <p className="text-xs text-red-500 mt-1">{item.daysLeft} days left</p>
                </div>
                <Button className="text-xs px-4 py-2 shrink-0">Apply Now</Button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recommended for you */}
      <div className="bg-white rounded-2xl border border-gray-100 p-5 sm:p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-bold text-base">Recommended for You</h2>
          <Link to="/student/find-jobs" className="text-xs text-brand hover:underline flex items-center gap-1">
            Explore Jobs <ArrowRight size={12} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {recommended.map((job) => (
            <div key={job.title} className="border border-gray-100 rounded-xl p-4">
              <p className="text-sm font-medium mb-2">{job.title}</p>
              <div className="flex flex-wrap gap-1.5">
                {job.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-brand-light text-brand px-2 py-0.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;