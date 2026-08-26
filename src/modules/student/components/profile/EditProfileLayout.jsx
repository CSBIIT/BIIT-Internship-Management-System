import { Outlet } from 'react-router-dom';
import StudentTopbar from '../layouts/StudentTopbar';
import PublicFooter from '../../../public/components/PublicFooter';

const EditProfileLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <StudentTopbar onMenuClick={() => {}} />

      <main className="flex-1 p-4 sm:p-6 lg:p-8">
        <Outlet />
      </main>

      <PublicFooter />
    </div>
  );
};

export default EditProfileLayout;