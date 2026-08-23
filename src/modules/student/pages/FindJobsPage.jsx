import { useState } from 'react';
import JobCard from '../components/jobs/JobCard';
import JobFilters from '../components/jobs/JobFilters';

const jobs = [
  { id: 1, title: 'Android Developer Intern', company: 'TechDay Innovations', location: 'Islamabad', type: 'Internship - Paid', postedAgo: 'Posted 1 day ago' },
  { id: 2, title: 'Data Analyst Intern', company: 'DataForce LLC', location: 'Rawalpindi', type: 'Internship - Paid', postedAgo: 'Posted 2 days ago' },
  { id: 3, title: 'Backend Developer Intern', company: 'ServerSpace', location: 'Remote', type: 'Internship - Paid', postedAgo: 'Posted 1 day ago' },
  { id: 4, title: 'Frontend Developer Intern', company: 'Digital Labs', location: 'Lahore - Onsite', type: 'Internship - Paid', postedAgo: 'Posted 3 days ago' },
  { id: 5, title: 'Python Developer Intern', company: 'Analytics Solutions', location: 'Karachi', type: 'Internship - Paid', postedAgo: 'Posted 1 day ago' },
  { id: 6, title: 'UI/UX Design Intern', company: 'Creative Minds LLC', location: 'Remote', type: 'Internship - Paid', postedAgo: 'Posted 4 days ago' },
];

const FindJobsPage = () => {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  const filtered = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = 3; // static for now, will be based on real API response

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold mb-1">Find Jobs</h1>
        <p className="text-gray-500 text-sm">
          Discover the right opportunities that match your skills and career goals.
        </p>
      </div>

      <JobFilters search={search} onSearchChange={setSearch} />

      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      ) : (
        <p className="text-sm text-gray-400 text-center py-8">No jobs match your search.</p>
      )}

      {/* Pagination */}
      <div className="flex items-center justify-center gap-2 pt-4">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
          <button
            key={num}
            onClick={() => setPage(num)}
            className={`w-8 h-8 rounded-lg text-sm font-medium transition-colors ${
              page === num ? 'bg-brand text-white' : 'text-gray-500 hover:bg-gray-100'
            }`}
          >
            {num}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FindJobsPage;