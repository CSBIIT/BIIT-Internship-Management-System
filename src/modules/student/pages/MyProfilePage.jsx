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
    description: 'A desktop application developed for managing student attendance records efficiently with automated reporting features.',
    icon: Users,
    tags: ['Java', 'MySQL'],
  },
  {
    title: 'Portfolio Website',
    description: 'A responsive personal portfolio website built to showcase my projects, skills, and professional journey to potential employers.',
    icon: Monitor,
    tags: ['HTML/CSS', 'Tailwind'],
  },
];

const MyProfilePage = () => {
  return (
    <div className="space-y-6">
      <ProfileHeader profile={profile} />

      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4">
        {infoTiles.map((tile) => (
          <InfoTile key={tile.label} {...tile} className="w-full sm:w-auto sm:flex-1 sm:min-w-fit" />
        ))}
      </div>

      <ProfessionalSummary summary={summary} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AcademicInfo
          degree="BS Software Engineering"
          currentSemester="5th"
          expectedGraduation="June 2027"
        />
        <SkillsList technicalSkills={technicalSkills} softSkills={softSkills} />
      </div>

      <ExperienceList experiences={experiences} />

      <ProjectsList projects={projects} />

      <ResumeCard fileName="Ali_Khan_Resume.pdf" updatedAgo="2 days ago" fileSize="1.2 MB" />
    </div>
  );
};

export default MyProfilePage;