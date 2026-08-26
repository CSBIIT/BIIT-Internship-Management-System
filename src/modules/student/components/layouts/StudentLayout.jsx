import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import StudentSidebar from './StudentSidebar';
import StudentTopbar from './StudentTopbar';
import PublicFooter from '../../../public/components/PublicFooter';

const StudentLayout = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-50">
      <StudentSidebar
        mobileOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />

      <div className="flex-1 flex flex-col min-w-0">
        <StudentTopbar onMenuClick={() => setMobileMenuOpen(true)} />

        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>

        <PublicFooter />
      </div>
    </div>
  );
};

export default StudentLayout;