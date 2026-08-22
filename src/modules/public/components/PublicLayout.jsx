import { Outlet } from 'react-router-dom';
import PublicNavbar from './PublicNavbar';
import PublicFooter from './PublicFooter';
import LandingPage from '../pages/LandingPage';

const PublicLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <PublicNavbar />
      <main className="flex-1">
        <LandingPage />
      </main>
      <PublicFooter />
    </div>
  );
};

export default PublicLayout;