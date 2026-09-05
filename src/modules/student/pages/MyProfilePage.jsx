import { Hash, GraduationCap, Mail, Smartphone, Users, Monitor } from 'lucide-react';

import ProfileHeader from '../components/profile/ProfileHeader';
import InfoTile from '../components/profile/InfoTile';

import {
  ProfessionalSummary,
  AcademicInfo,
  SkillsList,
  ExperienceList,
  ProjectsList,
  ResumeCard,
} from '../components/profile/ProfileSections';

const profile = {
  name: 'Ali Khan',
  degree: 'BS Software Engineering',
  semester: '5th Semester',
  university: 'Barani Institute of Information Technology',
  location: 'Rawalpindi, Pakistan',
  photoUrl: null,
};

const infoTiles = [
  { icon: Hash, label: 'Roll Number', value: '2023-ARID-0000' },
  { icon: GraduationCap, label: 'CGPA', value: '3.94 / 4.00' },
  { icon: Mail, label: 'Email', value: 'ali.khan@biit.edu.pk' },
  { icon: Smartphone, label: 'Phone', value: '+92 300 1234567' },
];

const summary =
  'Highly motivated and detail-oriented Software Engineering student currently in the 5th semester at BIIT. Passionate about developing scalable web applications and exploring modern technologies. Possesses a strong academic foundation with a CGPA of 3.94, complemented by hands-on experience in various academic projects. Seeking an internship opportunity to apply theoretical knowledge in a practical, fast-paced environment and contribute to innovative software solutions.';

const technicalSkills = ['React.js', 'Node.js', 'Python', 'Java', 'SQL'];

const softSkills = ['Communication', 'Leadership', 'Teamwork'];

const experiences = [
  {
    title: 'Software Engineering Intern',
    company: 'XYZ Solutions',
    duration: 'June 2023 - Aug 2023',
    location: 'Islamabad, Pakistan',
  },
];

const projects = [
  {
    title: 'Student Attendance System',
    description:
      'A desktop application developed for managing student attendance records efficiently with automated reporting features.',
    icon: Users,
    tags: ['Java', 'MySQL'],
  },
  {
    title: 'Portfolio Website',
    description:
      'A responsive personal portfolio website built to showcase my projects, skills, and professional journey to potential employers.',
    icon: Monitor,
    tags: ['HTML/CSS', 'Tailwind'],
  },
];

const MyProfilePage = () => {
  return (
    <div className="space-y-6 overflow-hidden">

      {/* =====================================================
          PROFILE HEADER
      ====================================================== */}

      <div
        className="
          group
          relative
          overflow-hidden
          rounded-2xl
          animate-fade-in-up
          transition-all
          duration-500
          ease-out
          hover:-translate-y-1
          hover:shadow-lg
        "
        style={{
          animationDelay: '0ms',
        }}
      >

        {/* Animated green top line */}
        <div
          className="
            pointer-events-none
            absolute
            left-0
            top-0
            z-30
            h-0.5
            w-0
            bg-brand
            transition-all
            duration-500
            ease-out
            group-hover:w-full
          "
        />

        {/* Green glow */}
        <div
          className="
            pointer-events-none
            absolute
            -right-16
            -top-16
            z-0
            h-40
            w-40
            rounded-full
            bg-brand/5
            blur-2xl
            transition-all
            duration-700
            group-hover:scale-150
            group-hover:bg-brand/10
          "
        />

        <div className="relative z-10">
          <ProfileHeader profile={profile} />
        </div>

      </div>


      {/* =====================================================
          INFORMATION TILES
      ====================================================== */}

      <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">

        {infoTiles.map((tile, index) => (

          <div
            key={tile.label}
            className="
              group
              relative
              overflow-hidden
              rounded-xl
              animate-fade-in-up
              transition-all
              duration-300
              ease-out
              hover:-translate-y-1
              hover:shadow-lg
              sm:flex-1
              sm:min-w-fit
            "
            style={{
              animationDelay: `${120 + index * 100}ms`,
            }}
          >

            {/* Animated green top line */}
            <div
              className="
                pointer-events-none
                absolute
                left-0
                top-0
                z-30
                h-0.5
                w-0
                bg-brand
                transition-all
                duration-500
                ease-out
                group-hover:w-full
              "
            />

            {/* Subtle green glow */}
            <div
              className="
                pointer-events-none
                absolute
                -right-8
                -top-8
                z-0
                h-20
                w-20
                rounded-full
                bg-brand/0
                blur-xl
                transition-all
                duration-500
                group-hover:scale-150
                group-hover:bg-brand/10
              "
            />

            <div className="relative z-10 h-full">
              <InfoTile
                {...tile}
                className="w-full"
              />
            </div>

          </div>

        ))}

      </div>


      {/* =====================================================
          PROFESSIONAL SUMMARY
      ====================================================== */}

      <div
        className="
          group
          relative
          overflow-hidden
          rounded-2xl
          animate-fade-in-up
          transition-all
          duration-500
          ease-out
          hover:-translate-y-1
          hover:shadow-lg
        "
        style={{
          animationDelay: '520ms',
        }}
      >

        {/* Animated green line */}
        <div
          className="
            pointer-events-none
            absolute
            left-0
            top-0
            z-30
            h-0.5
            w-0
            bg-brand
            transition-all
            duration-500
            ease-out
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
            z-0
            h-32
            w-32
            rounded-full
            bg-brand/5
            blur-2xl
            transition-all
            duration-700
            group-hover:scale-150
          "
        />

        <div className="relative z-10">
          <ProfessionalSummary summary={summary} />
        </div>

      </div>


      {/* =====================================================
          ACADEMIC + SKILLS
      ====================================================== */}

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">

        <div
          className="
            group
            relative
            overflow-hidden
            rounded-2xl
            animate-fade-in-up
            transition-all
            duration-500
            ease-out
            hover:-translate-y-1
            hover:shadow-lg
          "
          style={{
            animationDelay: '620ms',
          }}
        >

          {/* Green line */}
          <div
            className="
              pointer-events-none
              absolute
              left-0
              top-0
              z-30
              h-0.5
              w-0
              bg-brand
              transition-all
              duration-500
              ease-out
              group-hover:w-full
            "
          />

          <div className="relative z-10 h-full">
            <AcademicInfo
              degree="BS Software Engineering"
              currentSemester="5th"
              expectedGraduation="June 2027"
            />
          </div>

        </div>


        <div
          className="
            group
            relative
            overflow-hidden
            rounded-2xl
            animate-fade-in-up
            transition-all
            duration-500
            ease-out
            hover:-translate-y-1
            hover:shadow-lg
          "
          style={{
            animationDelay: '720ms',
          }}
        >

          {/* Green line */}
          <div
            className="
              pointer-events-none
              absolute
              left-0
              top-0
              z-30
              h-0.5
              w-0
              bg-brand
              transition-all
              duration-500
              ease-out
              group-hover:w-full
            "
          />

          <div className="relative z-10 h-full">
            <SkillsList
              technicalSkills={technicalSkills}
              softSkills={softSkills}
            />
          </div>

        </div>

      </div>


      {/* =====================================================
          EXPERIENCE
      ====================================================== */}

      <div
        className="
          group
          relative
          overflow-hidden
          rounded-2xl
          animate-fade-in-up
          transition-all
          duration-500
          ease-out
          hover:-translate-y-1
          hover:shadow-lg
        "
        style={{
          animationDelay: '820ms',
        }}
      >

        {/* Green line */}
        <div
          className="
            pointer-events-none
            absolute
            left-0
            top-0
            z-30
            h-0.5
            w-0
            bg-brand
            transition-all
            duration-500
            ease-out
            group-hover:w-full
          "
        />

        <div className="relative z-10">
          <ExperienceList experiences={experiences} />
        </div>

      </div>


      {/* =====================================================
          PROJECTS
      ====================================================== */}

      <div
        className="
          group
          relative
          overflow-hidden
          rounded-2xl
          animate-fade-in-up
          transition-all
          duration-500
          ease-out
          hover:-translate-y-1
          hover:shadow-lg
        "
        style={{
          animationDelay: '920ms',
        }}
      >

        {/* Green line */}
        <div
          className="
            pointer-events-none
            absolute
            left-0
            top-0
            z-30
            h-0.5
            w-0
            bg-brand
            transition-all
            duration-500
            ease-out
            group-hover:w-full
          "
        />

        <div className="relative z-10">
          <ProjectsList projects={projects} />
        </div>

      </div>


      {/* =====================================================
          RESUME
      ====================================================== */}

      <div
        className="
          group
          relative
          overflow-hidden
          rounded-2xl
          animate-fade-in-up
          transition-all
          duration-500
          ease-out
          hover:-translate-y-1
          hover:shadow-lg
        "
        style={{
          animationDelay: '1020ms',
        }}
      >

        {/* Green line */}
        <div
          className="
            pointer-events-none
            absolute
            left-0
            top-0
            z-30
            h-0.5
            w-0
            bg-brand
            transition-all
            duration-500
            ease-out
            group-hover:w-full
          "
        />

        <div className="relative z-10">
          <ResumeCard
            fileName="Ali_Khan_Resume.pdf"
            updatedAgo="2 days ago"
            fileSize="1.2 MB"
          />
        </div>

      </div>

    </div>
  );
};

export default MyProfilePage;