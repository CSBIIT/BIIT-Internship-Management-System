import { useState } from 'react';
import { ChevronDown, MapPin, Calendar, FileText, Download } from 'lucide-react';
import Badge from '../../../../components/common/Badge';

const ApplicationCard = ({ application }) => {
  const [expanded, setExpanded] = useState(false);
  const { role, company, location, appliedDate, status, statusLabel, resumeName } = application;

  return (
    <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
      <button
        onClick={() => setExpanded((prev) => !prev)}
        className="w-full flex items-center justify-between gap-3 p-4 text-left"
      >
        <div className="min-w-0">
          <p className="text-sm font-semibold truncate">{role}</p>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-500 mt-1">
            <span className="flex items-center gap-1">
              <MapPin size={12} /> {company}
            </span>
            <span className="flex items-center gap-1">
              <Calendar size={12} /> Applied on {appliedDate}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <Badge status={status}>{statusLabel}</Badge>
          <ChevronDown
            size={16}
            className={`text-gray-400 transition-transform ${expanded ? 'rotate-180' : ''}`}
          />
        </div>
      </button>

      {expanded && (
        <div className="px-4 pb-4 pt-1 border-t border-gray-50">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-gray-500 mb-3">
            <div>
              <p className="text-gray-400 mb-0.5">Application Status</p>
              <p className="text-gray-700 font-medium">Your application is under review</p>
            </div>
            <div>
              <p className="text-gray-400 mb-0.5">Applied For</p>
              <p className="text-gray-700 font-medium">{role}</p>
            </div>
            <div>
              <p className="text-gray-400 mb-0.5">Location</p>
              <p className="text-gray-700 font-medium">{location}</p>
            </div>
          </div>

          <div className="flex items-center justify-between bg-gray-50 rounded-lg px-3 py-2">
            <div className="flex items-center gap-2 text-xs text-gray-600 min-w-0">
              <FileText size={14} className="text-red-500 shrink-0" />
              <span className="truncate">{resumeName}</span>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <button className="text-xs text-brand hover:underline">Replace</button>
              <button className="text-xs text-brand hover:underline flex items-center gap-1">
                <Download size={12} /> Download
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ApplicationCard;