import { Search } from 'lucide-react';

const JobFilters = ({ search, onSearchChange, selectedFilters, onFilterChange }) => {
  const handleChange = (key, value) => {
    onFilterChange({
      ...selectedFilters,
      [key]: value,
    });
  };

  const selectPillClass = `
    appearance-none
    rounded-full
    border
    border-gray-200
    bg-white
    px-3.5
    py-1.5
    pr-7
    text-xs
    text-gray-600
    outline-none
    transition-colors
    duration-200
    hover:border-brand
    hover:text-brand
    focus:border-brand
    focus:ring-1
    focus:ring-brand/20
    cursor-pointer
  `;

  return (
    <div className="space-y-3">
      {/* SEARCH INPUT */}
      <div className="relative">
        <Search
          size={16}
          className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        />
        <input
          type="text"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search jobs by title or skills..."
          className="w-full rounded-lg border border-gray-300 py-2.5 pl-9 pr-4 text-sm outline-none focus:border-brand"
        />
      </div>

      {/* DROPDOWN PILLS */}
      <div className="flex flex-wrap gap-2">
        {/* 1. Category / All Jobs */}
        <div className="relative inline-block">
          <select
            value={selectedFilters?.category || 'All Jobs'}
            onChange={(e) => handleChange('category', e.target.value)}
            className={selectPillClass}
          >
            <option value="All Jobs">All Jobs</option>
            <option value="Software Engineering">Software Engineering</option>
            <option value="UI/UX Design">UI/UX Design</option>
            <option value="Data Science">Data Science</option>
          </select>
          <div className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400">
            ▼
          </div>
        </div>

        {/* 2. Remote / Workplace Type */}
        <div className="relative inline-block">
          <select
            value={selectedFilters?.workplace || 'Remote'}
            onChange={(e) => handleChange('workplace', e.target.value)}
            className={selectPillClass}
          >
            <option value="All Workplaces">All Workplaces</option>
            <option value="Remote">Remote</option>
            <option value="Onsite">Onsite</option>
            <option value="Hybrid">Hybrid</option>
          </select>
          <div className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400">
            ▼
          </div>
        </div>

        {/* 3. Date Posted */}
        <div className="relative inline-block">
          <select
            value={selectedFilters?.datePosted || 'Date posted'}
            onChange={(e) => handleChange('datePosted', e.target.value)}
            className={selectPillClass}
          >
            <option value="Date posted">Date posted</option>
            <option value="24h">Past 24 hours</option>
            <option value="7d">Past week</option>
            <option value="30d">Past month</option>
          </select>
          <div className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400">
            ▼
          </div>
        </div>

        {/* 4. Contract Type */}
        <div className="relative inline-block">
          <select
            value={selectedFilters?.contractType || 'Contract Type'}
            onChange={(e) => handleChange('contractType', e.target.value)}
            className={selectPillClass}
          >
            <option value="Contract Type">Contract Type</option>
            <option value="Internship - Paid">Internship - Paid</option>
            <option value="Internship - Unpaid">Internship - Unpaid</option>
            <option value="Full-time">Full-time</option>
          </select>
          <div className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400">
            ▼
          </div>
        </div>

        {/* 5. All Locations */}
        <div className="relative inline-block">
          <select
            value={selectedFilters?.location || 'All Locations'}
            onChange={(e) => handleChange('location', e.target.value)}
            className={selectPillClass}
          >
            <option value="All Locations">All Locations</option>
            <option value="Islamabad">Islamabad</option>
            <option value="Rawalpindi">Rawalpindi</option>
            <option value="Lahore">Lahore</option>
            <option value="Karachi">Karachi</option>
          </select>
          <div className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400">
            ▼
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobFilters;