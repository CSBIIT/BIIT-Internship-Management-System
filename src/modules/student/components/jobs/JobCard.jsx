import { Link } from 'react-router-dom';
import { MapPin, Clock, Bookmark } from 'lucide-react';

const JobCard = ({ job }) => {
  const { id, title, company, location, type, postedAgo } = job;

  return (
    <div className="bg-white rounded-xl border border-gray-100 p-4 flex flex-col gap-3">
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <p className="text-sm font-semibold truncate">{title}</p>
          <p className="text-xs text-gray-500 mt-0.5">{company}</p>
        </div>
        <button className="text-gray-300 hover:text-brand shrink-0">
          <Bookmark size={18} />
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-500">
        <span className="flex items-center gap-1">
          <MapPin size={12} /> {location}
        </span>
        <span className="flex items-center gap-1">
          <Clock size={12} /> {type} &middot; {postedAgo}
        </span>
      </div>

      <Link
        to={`/student/find-jobs/${id}`}
        className="text-xs font-medium text-brand hover:underline mt-1"
      >
        View Job →
      </Link>
    </div>
  );
};

export default JobCard;