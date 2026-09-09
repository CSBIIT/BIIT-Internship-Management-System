import { createContext, useContext, useState } from 'react';

const ProfilePhotoContext = createContext(null);

export const ProfilePhotoProvider = ({ children }) => {
  const [photoUrl, setPhotoUrl] = useState(null);
  const [coverPhotoUrl, setCoverPhotoUrl] = useState(null);

  return (
    <ProfilePhotoContext.Provider
      value={{ photoUrl, setPhotoUrl, coverPhotoUrl, setCoverPhotoUrl }}
    >
      {children}
    </ProfilePhotoContext.Provider>
  );
};

export const useProfilePhoto = () => {
  const ctx = useContext(ProfilePhotoContext);
  if (!ctx) {
    throw new Error('useProfilePhoto must be used within a ProfilePhotoProvider');
  }
  return ctx;
};