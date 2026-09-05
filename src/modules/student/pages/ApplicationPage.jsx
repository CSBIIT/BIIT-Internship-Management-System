import { useState } from 'react';
import {
  Search,
  CheckCircle2,
  Clock,
  Send,
  XCircle,
  Sparkles,
} from 'lucide-react';

import ApplicationCard from '../components/applications/ApplicationCard';

const statPills = [
  {
    icon: CheckCircle2,
    value: 1,
    label: 'Accepted',
    color: 'text-green-600 bg-green-50',
  },
  {
    icon: Clock,
    value: 4,
    label: 'Under Review',
    color: 'text-yellow-600 bg-yellow-50',
  },
  {
    icon: Send,
    value: 2,
    label: 'Interviews',
    color: 'text-blue-600 bg-blue-50',
  },
  {
    icon: XCircle,
    value: 12,
    label: 'Total',
    color: 'text-gray-600 bg-gray-100',
  },
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

  const filtered = applications.filter(
    (app) =>
      app.role.toLowerCase().includes(search.toLowerCase()) ||
      app.company.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6 overflow-hidden">

      {/* =====================================================
    PAGE HEADER
====================================================== */}

<div
  className="
    group
    relative
    overflow-hidden
    rounded-2xl
    border
    border-gray-100
    bg-white
    p-5
    shadow-sm
    animate-fade-in-up
    transition-all
    duration-500
    hover:-translate-y-0.5
    hover:shadow-lg
    sm:p-6
  "
  style={{
    animationDelay: '0ms',
  }}
>
  {/* Same soft green glow as Dashboard */}

  <div
    className="
      pointer-events-none
      absolute
      -right-16
      -top-16
      h-40
      w-40
      rounded-full
      bg-brand/5
      blur-2xl
      transition-transform
      duration-700
      group-hover:scale-150
    "
  />

  {/* Same bottom decorative glow as Dashboard */}

  <div
    className="
      pointer-events-none
      absolute
      -bottom-20
      left-1/3
      h-32
      w-32
      rounded-full
      bg-emerald-100/40
      blur-2xl
    "
  />

  <div className="relative z-10">
    <div className="mb-2 flex items-center gap-2">
      <Sparkles
        size={15}
        className="text-brand animate-pulse"
      />

      <span
        className="
          text-[10px]
          font-bold
          uppercase
          tracking-[0.16em]
          text-brand
        "
      >
        Career Progress
      </span>
    </div>

    <h1 className="mb-1 text-xl font-bold text-gray-900 sm:text-2xl">
      My Applications
    </h1>

    <p className="text-sm text-gray-500">
      Track and manage your internship applications and stay updated on their progress.
    </p>
  </div>
</div>

      {/* =====================================================
          STAT PILLS
      ====================================================== */}

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">

        {statPills.map((stat, index) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.label}
              className="
                group
                relative
                overflow-hidden
                rounded-xl
                border
                border-gray-100
                bg-white
                p-4
                shadow-sm
                animate-fade-in-up
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-lg
              "
              style={{
                animationDelay: `${100 + index * 100}ms`,
              }}
            >

              {/* Same green hover line as Dashboard */}

              <div
                className="
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
                "
              />

              {/* Same decorative glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-8
                  -top-8
                  h-20
                  w-20
                  rounded-full
                  bg-brand/5
                  opacity-0
                  blur-xl
                  transition-all
                  duration-500
                  group-hover:scale-150
                  group-hover:opacity-100
                "
              />

              <div className="relative z-10 flex items-center gap-3">

                <div
                  className={`
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    transition-transform
                    duration-300
                    group-hover:scale-110
                    group-hover:rotate-3
                    ${stat.color}
                  `}
                >
                  <Icon size={18} />
                </div>

                <div>

                  <p className="text-lg font-bold leading-none text-gray-900">
                    {stat.value}
                  </p>

                  <p className="mt-1 text-xs text-gray-500">
                    {stat.label}
                  </p>

                </div>

              </div>

            </div>
          );
        })}

      </div>


      {/* =====================================================
          SEARCH
      ====================================================== */}

      <div
        className="
          relative
          max-w-md
          animate-fade-in-up
        "
        style={{
          animationDelay: '500ms',
        }}
      >

        <Search
          size={16}
          className="
            pointer-events-none
            absolute
            left-3
            top-1/2
            -translate-y-1/2
            text-gray-400
            transition-colors
            duration-300
          "
        />

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search applications..."
          className="
            w-full
            rounded-xl
            border
            border-gray-200
            bg-white
            py-3
            pl-9
            pr-4
            text-sm
            text-gray-800
            shadow-sm
            outline-none
            transition-all
            duration-300
            placeholder:text-gray-400
            hover:border-gray-300
            hover:shadow-md
            focus:border-brand
            focus:ring-4
            focus:ring-brand/10
          "
        />

      </div>


      {/* =====================================================
          APPLICATIONS LIST
      ====================================================== */}

      <div className="space-y-3">

        {filtered.length > 0 ? (

          filtered.map((app, index) => (

            <div
              key={app.id}
              className="
                group
                relative
                overflow-hidden
                animate-fade-in-up
                transition-all
                duration-300
                hover:-translate-y-1
              "
              style={{
                animationDelay: `${600 + index * 100}ms`,
              }}
            >

              {/* Same green line used on Dashboard cards */}

              <div
                className="
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
                "
              />

              {/* Soft hover glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-10
                  -top-10
                  z-10
                  h-24
                  w-24
                  rounded-full
                  bg-brand/5
                  opacity-0
                  blur-2xl
                  transition-all
                  duration-500
                  group-hover:scale-150
                  group-hover:opacity-100
                "
              />

              <div className="relative z-10">

                <ApplicationCard
                  application={app}
                />

              </div>

            </div>

          ))

        ) : (

          /* =================================================
             EMPTY STATE
          ================================================== */

          <div
            className="
              relative
              overflow-hidden
              rounded-2xl
              border
              border-dashed
              border-gray-200
              bg-white
              px-5
              py-12
              text-center
              shadow-sm
              animate-fade-in-up
            "
            style={{
              animationDelay: '600ms',
            }}
          >

            <div
              className="
                pointer-events-none
                absolute
                -right-10
                -top-10
                h-24
                w-24
                rounded-full
                bg-brand/5
                blur-2xl
              "
            />

            <div
              className="
                relative
                z-10
                mx-auto
                mb-3
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                bg-gray-100
                transition-transform
                duration-300
                hover:scale-110
              "
            >
              <Search
                size={20}
                className="text-gray-400"
              />
            </div>

            <p className="relative z-10 text-sm font-medium text-gray-600">
              No applications match your search.
            </p>

            <p className="relative z-10 mt-1 text-xs text-gray-400">
              Try searching for a different company or position.
            </p>

          </div>

        )}

      </div>

    </div>
  );
};

export default ApplicationsPage;