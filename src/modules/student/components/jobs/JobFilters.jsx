import { Search, ChevronDown } from 'lucide-react';

const filterOptions = [
  { label: 'All Jobs', value: 'all' },
  { label: 'Remote', value: 'remote' },
  { label: 'Date posted', value: 'date' },
  { label: 'Contract Type', value: 'contract' },
  { label: 'All Locations', value: 'location' },
];

const JobFilters = ({ search, onSearchChange }) => {
  return (
    <div className="space-y-3">
      <div className="relative">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search jobs by title or skills..."
          className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-gray-300 text-sm outline-none focus:border-brand"
        />
      </div>

      <div className="flex flex-wrap gap-2">
        {filterOptions.map((filter) => (
          <button
            key={filter.value}
            className="flex items-center gap-1 text-xs text-gray-600 border border-gray-200 rounded-full px-3 py-1.5 hover:border-brand hover:text-brand transition-colors"
          >
            {filter.label}
            <ChevronDown size={12} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default JobFilters;