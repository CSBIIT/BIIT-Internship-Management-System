import { createContext, useContext, useState } from 'react';

const ProfileContext = createContext(null);

export const ProfileProvider = ({ children }) => {
  const [profileData, setProfileData] = useState({
    basic: {
      name: 'Ali Khan',
      email: '2023-ARID-0000@biit.edu.pk',
      phone: '312 3456789',
      location: 'Rawalpindi, Pakistan',
      summary: '',
    },
    academic: {
      degree: 'BS Software Engineering',
      currentSemester: '5th',
      expectedGraduation: 'June 2027',
    },
    technicalSkills: ['React.js', 'JavaScript'],
    softSkills: ['Problem Solving', 'Teamwork'],
    experiences: [
      {
        id: 'exp-1',
        title: 'Software Engineering Intern',
        company: 'XYZ Solutions',
        duration: 'June 2023 - Aug 2023',
        location: 'Islamabad, Pakistan',
        startMonth: 'June',
        startYear: '2023',
        endMonth: 'August',
        endYear: '2023',
        isPresent: false,
      },
    ],
    projects: [
      {
        id: 'proj-1',
        title: 'Student Attendance System',
        description: 'A desktop application for managing student attendance efficiently.',
        tags: ['Java', 'MySQL'],
      },
      {
        id: 'proj-2',
        title: 'Portfolio Website',
        description: 'A responsive personal portfolio website built to showcase my projects.',
        tags: ['HTML/CSS', 'Tailwind'],
      },
    ],
  });

  const updateProfileSection = (sectionKey, newData) => {
    setProfileData((prev) => ({
      ...prev,
      [sectionKey]: newData,
    }));
  };

  const updateUserName = (newName) => {
    setProfileData((prev) => ({
      ...prev,
      basic: {
        ...prev.basic,
        name: newName,
      },
    }));
  };

  return (
    <ProfileContext.Provider value={{ profileData, updateProfileSection, updateUserName }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => useContext(ProfileContext);