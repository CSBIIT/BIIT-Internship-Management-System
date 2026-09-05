import { Link } from 'react-router-dom';
import {
  Send,
  CheckCircle2,
  Clock,
  XCircle,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

import Avatar from '../../../components/common/Avatar';
import Badge from '../../../components/common/Badge';
import Button from '../../../components/common/Button';
import StatCard from '../components/dashboard/StatCard';

const stats = [
  {
    icon: Send,
    value: 12,
    label: 'Applied Requests',
    color: 'blue',
  },
  {
    icon: CheckCircle2,
    value: 3,
    label: 'Accepted Requests',
    color: 'green',
  },
  {
    icon: Clock,
    value: 5,
    label: 'Pending Requests',
    color: 'yellow',
  },
  {
    icon: XCircle,
    value: 2,
    label: 'Rejected Requests',
    color: 'red',
  },
];

const interviews = [
  {
    company: 'TechDay Innovations',
    role: 'Frontend Engineering Intern',
    date: 'Oct 24, 10:00 AM',
    status: 'interview-scheduled',
  },
  {
    company: 'Global Phones LLC',
    role: 'Data Analyst Intern',
    date: 'Oct 26, 2:00 PM',
    status: 'interview-scheduled',
  },
];

const deadlines = [
  {
    title: 'Frontend Developer Intern',
    company: 'Amazing Tech Ltd',
    daysLeft: 2,
  },
  {
    title: 'UI/UX Designer Intern',
    company: 'Creative Studio Agency',
    daysLeft: 5,
  },
];

const recommended = [
  {
    title: 'iOS Design Intern',
    tags: ['Design', 'Figma'],
  },
  {
    title: 'Backend Developer',
    tags: ['Engineering', 'Node.js'],
  },
  {
    title: 'Data Science Intern',
    tags: ['Python', 'ML'],
  },
];

/*
  ============================================================
  CONSISTENT CARD STYLE
  ------------------------------------------------------------
  This same hover interaction will be used as the baseline
  for the other pages after the Dashboard is approved.
  ============================================================
*/

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

const DashboardPage = () => {
  return (
    <div className="space-y-6 overflow-hidden">

      {/* =====================================================
          WELCOME BANNER
      ====================================================== */}

      <div
        className={`
          ${cardClass}
          p-5
          animate-fade-in-up
          sm:p-6
        `}
        style={{
          animationDelay: '0ms',
        }}
      >

        {/* Consistent green hover line */}
        <div className={greenTopLine} />

        <div className="relative z-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          {/* Welcome text */}
          <div>

            <div className="mb-2 flex items-center gap-2">

              <Sparkles
                size={15}
                className="text-brand"
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
                Student Dashboard
              </span>

            </div>

            <h1 className="mb-1 text-xl font-bold text-gray-900 sm:text-2xl">
              Welcome back, Ali!
            </h1>

            <p className="text-sm text-gray-500">
              Discover new opportunities and take the next step in your career.
            </p>

          </div>


          {/* Profile */}
          <div className="flex shrink-0 items-center gap-3">

            <div className="text-right">

              <p className="text-xs text-gray-400">
                Profile Completion
              </p>

              <p className="text-sm font-semibold text-brand">
                75%
              </p>

              <div className="mt-1 h-1.5 w-20 overflow-hidden rounded-full bg-gray-100">

                <div
                  className="
                    h-full
                    rounded-full
                    bg-brand
                    animate-[progress_1.2s_ease-out_forwards]
                  "
                  style={{
                    width: '75%',
                  }}
                />

              </div>

            </div>

            <Avatar
              name="Ali Khan"
              size="md"
            />

          </div>

        </div>

      </div>


      {/* =====================================================
          STAT CARDS
      ====================================================== */}

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">

        {stats.map((stat, index) => (

          <div
            key={stat.label}
            className={`
              ${cardClass}
              animate-fade-in-up
            `}
            style={{
              animationDelay: `${100 + index * 100}ms`,
            }}
          >

            {/* Same green top line */}
            <div className={greenTopLine} />

            <div className="relative z-10">
              <StatCard {...stat} />
            </div>

          </div>

        ))}

      </div>


      {/* =====================================================
          INTERVIEWS + DEADLINES
      ====================================================== */}

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">


        {/* ===================================================
            UPCOMING INTERVIEWS
        ==================================================== */}

        <div
          className={`
            ${cardClass}
            p-5
            animate-fade-in-up
            sm:p-6
          `}
          style={{
            animationDelay: '500ms',
          }}
        >

          {/* Same green top line */}
          <div className={greenTopLine} />

          <div className="relative z-10">

            <div className="mb-4 flex items-center justify-between">

              <div>

                <p className="mb-0.5 text-[10px] font-bold uppercase tracking-wider text-brand">
                  Career Progress
                </p>

                <h2 className="text-base font-bold text-gray-900">
                  Upcoming Interviews
                </h2>

              </div>

              <Link
                to="/student/applications"
                className="
                  flex
                  items-center
                  gap-1
                  text-xs
                  font-medium
                  text-brand
                  transition-all
                  duration-300
                  hover:gap-2
                  hover:underline
                "
              >
                View All
                <ArrowRight size={12} />
              </Link>

            </div>


            <div className="space-y-3">

              {interviews.map((item) => (

                <div
                  key={item.company}
                  className="
                    flex
                    items-center
                    justify-between
                    gap-3
                    rounded-xl
                    border-b
                    border-gray-50
                    p-2
                    pb-3
                    last:border-0
                    last:pb-0
                  "
                >

                  <div className="min-w-0">

                    <p className="truncate text-sm font-medium text-gray-800">
                      {item.company}
                    </p>

                    <p className="truncate text-xs text-gray-500">
                      {item.role}
                    </p>

                    <p className="mt-1 text-xs text-gray-400">
                      {item.date}
                    </p>

                  </div>

                  <div className="shrink-0">
                    <Badge status={item.status}>
                      Interview Scheduled
                    </Badge>
                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>


        {/* ===================================================
            UPCOMING DEADLINES
        ==================================================== */}

        <div
          className={`
            ${cardClass}
            p-5
            animate-fade-in-up
            sm:p-6
          `}
          style={{
            animationDelay: '600ms',
          }}
        >

          {/* Same green top line */}
          <div className={greenTopLine} />

          <div className="relative z-10">

            <div className="mb-4">

              <p className="mb-0.5 text-[10px] font-bold uppercase tracking-wider text-brand">
                Don't Miss Out
              </p>

              <h2 className="text-base font-bold text-gray-900">
                Upcoming Deadlines
              </h2>

            </div>


            <div className="space-y-3">

              {deadlines.map((item, index) => (

                <div
                  key={item.title}
                  className="
                    flex
                    items-center
                    justify-between
                    gap-3
                    rounded-xl
                    p-2
                  "
                  style={{
                    animationDelay: `${700 + index * 100}ms`,
                  }}
                >

                  <div className="min-w-0">

                    <p className="truncate text-sm font-medium text-gray-800">
                      {item.title}
                    </p>

                    <p className="truncate text-xs text-gray-500">
                      {item.company}
                    </p>

                    <p className="mt-1 text-xs font-medium text-red-500">
                      {item.daysLeft} days left
                    </p>

                  </div>

                  <Button
                    className="
                      shrink-0
                      px-4
                      py-2
                      text-xs
                      transition-all
                      duration-300
                      hover:-translate-y-0.5
                      hover:shadow-md
                    "
                  >
                    Apply Now
                  </Button>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>


      {/* =====================================================
          RECOMMENDED FOR YOU
      ====================================================== */}

      <div
        className={`
          ${cardClass}
          p-5
          animate-fade-in-up
          sm:p-6
        `}
        style={{
          animationDelay: '800ms',
        }}
      >

        {/* Same green top line */}
        <div className={greenTopLine} />

        <div className="relative z-10">

          <div className="mb-5 flex items-center justify-between">

            <div>

              <p className="mb-0.5 text-[10px] font-bold uppercase tracking-wider text-brand">
                Based On Your Profile
              </p>

              <h2 className="text-base font-bold text-gray-900">
                Recommended for You
              </h2>

            </div>

            <Link
              to="/student/find-jobs"
              className="
                flex
                items-center
                gap-1
                text-xs
                font-medium
                text-brand
                transition-all
                duration-300
                hover:gap-2
                hover:underline
              "
            >
              Explore Jobs
              <ArrowRight size={12} />
            </Link>

          </div>


          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">

            {recommended.map((job, index) => (

              <div
                key={job.title}
                className="
                  group/recommended
                  relative
                  overflow-hidden
                  rounded-xl
                  border
                  border-gray-100
                  bg-white
                  p-4
                  animate-fade-in-up
                  transition-all
                  duration-300
                  ease-out
                  hover:-translate-y-1
                  hover:shadow-lg
                "
                style={{
                  animationDelay: `${850 + index * 100}ms`,
                }}
              >

                {/* Same green top line */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    left-0
                    top-0
                    h-0.5
                    w-0
                    bg-brand
                    transition-all
                    duration-300
                    group-hover/recommended:w-full
                  "
                />

                <div className="relative z-10">

                  <div className="mb-3 flex items-center justify-between">

                    <span
                      className="
                        flex
                        h-8
                        w-8
                        items-center
                        justify-center
                        rounded-lg
                        bg-brand-light
                        text-brand
                      "
                    >
                      <Send size={14} />
                    </span>

                    <ArrowRight
                      size={14}
                      className="
                        text-gray-300
                        transition-all
                        duration-300
                        group-hover/recommended:translate-x-1
                        group-hover/recommended:text-brand
                      "
                    />

                  </div>


                  <p className="mb-2 text-sm font-semibold text-gray-800">
                    {job.title}
                  </p>


                  <div className="flex flex-wrap gap-1.5">

                    {job.tags.map((tag) => (

                      <span
                        key={tag}
                        className="
                          rounded-full
                          bg-brand-light
                          px-2
                          py-0.5
                          text-xs
                          text-brand
                        "
                      >
                        {tag}
                      </span>

                    ))}

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>
  );
};

export default DashboardPage;