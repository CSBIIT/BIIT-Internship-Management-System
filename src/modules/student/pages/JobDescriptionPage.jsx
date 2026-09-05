import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  MapPin,
  Clock,
  Briefcase,
  ExternalLink,
  Sparkles,
} from 'lucide-react';

import Button from '../../../components/common/Button';

// Static placeholder data — will be replaced with a real API call using the :id param
const jobDetails = {
  title: 'Android Developer Intern',
  company: 'Monique InfoTech',
  location: 'Islamabad',
  type: 'Internship - Paid',
  postedAgo: 'Posted 1 day ago',
  description:
    "We're looking for an Android Developer Intern to join our team and work alongside real-world projects. If you're passionate about mobile development and eager to learn, this internship is for you.",
  responsibilities: [
    'Collaborate with cross-functional teams to define and build new features',
    'Work on bug fixing and improving application performance',
    'Continually discover, evaluate, and implement new technologies to maximize development efficiency',
    'Unit-test code for robustness, including edge cases, usability, and general reliability',
  ],
  requirements: [
    'Basic understanding of Android SDK and different versions of Android',
    'Familiarity with RESTful APIs to connect Android applications to back-end services',
    'Strong knowledge of Android UI design principles, patterns, and best practices',
    'Experience with offline storage, threading, and performance tuning',
  ],
  skills: ['Java', 'Kotlin', 'Android SDK', 'REST API', 'Git'],
  aboutCompany:
    'Monique InfoTech is a leading technology solutions provider specializing in mobile and web application development. We work with clients across various industries, delivering innovative solutions with the latest technologies.',
};

const JobDescriptionPage = () => {
  const { jobId } = useParams();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 80);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="max-w-3xl space-y-6 overflow-hidden">

      {/* =====================================================
          BACK TO JOBS
      ====================================================== */}

      <Link
        to="/student/find-jobs"
        className="
          group
          flex
          w-fit
          items-center
          gap-1
          text-sm
          text-gray-500
          transition-all
          duration-300
          hover:gap-2
          hover:text-brand
        "
      >
        <ArrowLeft
          size={14}
          className="
            transition-transform
            duration-300
            group-hover:-translate-x-1
          "
        />

        Back to Jobs
      </Link>


      {/* =====================================================
          JOB HEADER CARD
      ====================================================== */}

      <div
        className={`
          group
          relative
          overflow-hidden
          rounded-2xl
          border
          border-gray-100
          bg-white
          p-5
          shadow-sm
          transition-all
          duration-500
          ease-out
          hover:-translate-y-1
          hover:shadow-lg
          sm:p-6
          ${
            mounted
              ? 'translate-y-0 opacity-100'
              : 'translate-y-5 opacity-0'
          }
        `}
      >

        {/* Animated green line */}

        <div
          className="
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

        {/* Soft green glow */}

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

        {/* Decorative glow */}

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

        <div
          className="
            relative
            z-10
            flex
            flex-col
            justify-between
            gap-4
            sm:flex-row
            sm:items-start
          "
        >

          {/* Job information */}

          <div>

            <div className="mb-2 flex items-center gap-2">

              <Sparkles
                size={15}
                className="
                  text-brand
                  transition-transform
                  duration-300
                  group-hover:rotate-6
                  group-hover:scale-110
                "
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
                Internship Opportunity
              </span>

            </div>

            <h1 className="mb-1 text-xl font-bold text-gray-900 sm:text-2xl">
              {jobDetails.title}
            </h1>

            <p className="mb-3 text-sm text-gray-500">
              {jobDetails.company}
            </p>


            {/* Job metadata */}

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-gray-500">

              <span
                className="
                  flex
                  items-center
                  gap-1
                  transition-colors
                  duration-300
                  hover:text-brand
                "
              >
                <MapPin size={12} />
                {jobDetails.location}
              </span>

              <span
                className="
                  flex
                  items-center
                  gap-1
                  transition-colors
                  duration-300
                  hover:text-brand
                "
              >
                <Briefcase size={12} />
                {jobDetails.type}
              </span>

              <span
                className="
                  flex
                  items-center
                  gap-1
                  transition-colors
                  duration-300
                  hover:text-brand
                "
              >
                <Clock size={12} />
                {jobDetails.postedAgo}
              </span>

            </div>

          </div>


          {/* Apply button */}

          <div className="shrink-0">

            <Button
              icon={ExternalLink}
              className="
                w-full
                justify-center
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:shadow-md
                sm:w-auto
              "
            >
              Apply Now
            </Button>

          </div>

        </div>

      </div>


      {/* =====================================================
          JOB INFORMATION
      ====================================================== */}

      <div
        className={`
          group
          relative
          overflow-hidden
          rounded-2xl
          border
          border-gray-100
          bg-white
          p-5
          shadow-sm
          transition-all
          duration-500
          ease-out
          hover:-translate-y-1
          hover:shadow-lg
          sm:p-6
          ${
            mounted
              ? 'translate-y-0 opacity-100'
              : 'translate-y-5 opacity-0'
          }
        `}
        style={{
          transitionDelay: '150ms',
        }}
      >

        {/* Animated green line */}

        <div
          className="
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

        {/* Glow */}

        <div
          className="
            pointer-events-none
            absolute
            -right-16
            -top-16
            h-36
            w-36
            rounded-full
            bg-brand/5
            blur-2xl
            opacity-0
            transition-all
            duration-500
            group-hover:scale-150
            group-hover:opacity-100
          "
        />

        <div className="relative z-10 space-y-6">

          {/* Job Description */}

          <div>

            <h2 className="mb-2 text-base font-bold text-gray-900">
              Job Description
            </h2>

            <p className="text-sm leading-relaxed text-gray-600">
              {jobDetails.description}
            </p>

          </div>


          {/* Responsibilities */}

          <div>

            <h2 className="mb-2 text-base font-bold text-gray-900">
              Responsibilities
            </h2>

            <ul className="space-y-2">

              {jobDetails.responsibilities.map((item, index) => (

                <li
                  key={item}
                  className="
                    group/item
                    flex
                    gap-2
                    text-sm
                    text-gray-600
                    transition-all
                    duration-300
                    hover:translate-x-1
                  "
                  style={{
                    transitionDelay: `${index * 30}ms`,
                  }}
                >
                  <span
                    className="
                      shrink-0
                      text-brand
                      transition-transform
                      duration-300
                      group-hover/item:scale-125
                    "
                  >
                    •
                  </span>

                  {item}

                </li>

              ))}

            </ul>

          </div>


          {/* Requirements */}

          <div>

            <h2 className="mb-2 text-base font-bold text-gray-900">
              Requirements
            </h2>

            <ul className="space-y-2">

              {jobDetails.requirements.map((item, index) => (

                <li
                  key={item}
                  className="
                    group/item
                    flex
                    gap-2
                    text-sm
                    text-gray-600
                    transition-all
                    duration-300
                    hover:translate-x-1
                  "
                  style={{
                    transitionDelay: `${index * 30}ms`,
                  }}
                >
                  <span
                    className="
                      shrink-0
                      text-brand
                      transition-transform
                      duration-300
                      group-hover/item:scale-125
                    "
                  >
                    •
                  </span>

                  {item}

                </li>

              ))}

            </ul>

          </div>


          {/* Skills */}

          <div>

            <h2 className="mb-2 text-base font-bold text-gray-900">
              Skills
            </h2>

            <div className="flex flex-wrap gap-2">

              {jobDetails.skills.map((skill) => (

                <span
                  key={skill}
                  className="
                    rounded-full
                    bg-brand-light
                    px-3
                    py-1
                    text-xs
                    text-brand
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:bg-brand/10
                    hover:shadow-sm
                  "
                >
                  {skill}
                </span>

              ))}

            </div>

          </div>

        </div>

      </div>


      {/* =====================================================
          ABOUT COMPANY
      ====================================================== */}

      <div
        className={`
          group
          relative
          overflow-hidden
          rounded-2xl
          border
          border-gray-100
          bg-white
          p-5
          shadow-sm
          transition-all
          duration-500
          ease-out
          hover:-translate-y-1
          hover:shadow-lg
          sm:p-6
          ${
            mounted
              ? 'translate-y-0 opacity-100'
              : 'translate-y-5 opacity-0'
          }
        `}
        style={{
          transitionDelay: '300ms',
        }}
      >

        {/* Animated green line */}

        <div
          className="
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

        {/* Green glow */}

        <div
          className="
            pointer-events-none
            absolute
            -right-12
            -top-12
            h-32
            w-32
            rounded-full
            bg-brand/5
            blur-2xl
            opacity-0
            transition-all
            duration-500
            group-hover:scale-150
            group-hover:opacity-100
          "
        />

        <div className="relative z-10">

          <div className="mb-2 flex items-center justify-between gap-3">

            <h2 className="text-base font-bold text-gray-900">
              About {jobDetails.company}
            </h2>

            <button
              className="
                shrink-0
                text-xs
                font-medium
                text-brand
                transition-all
                duration-300
                hover:translate-x-0.5
                hover:underline
              "
            >
              View Company
            </button>

          </div>

          <p className="text-sm leading-relaxed text-gray-600">
            {jobDetails.aboutCompany}
          </p>

        </div>

      </div>

    </div>
  );
};

export default JobDescriptionPage;