import { Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import StudentLayout from '../modules/student/components/layouts/StudentLayout';
import DashboardPage from '../modules/student/pages/DashboardPage';
import ApplicationsPage from '../modules/student/pages/ApplicationPage';
import FindJobsPage from '../modules/student/pages/FindJobsPage';
import JobDescriptionPage from '../modules/student/pages/JobDescriptionPage';
import MyProfilePage from '../modules/student/pages/MyProfilePage';
import ShareProfilePage from '../modules/student/pages/ShareProfilePage';
import SettingsPage from '../modules/student/pages/SettingsPage';
import NotificationsPage from '../modules/student/pages/NotificationsPage';

// Edit Profile uses its own lighter layout (topbar + footer only, no main sidebar)
import EditProfileLayout from '../modules/student/components/profile/EditProfileLayout';
import EditProfilePage from '../modules/student/pages/EditProfilePage';

const StudentRoutes = (
  <Route element={<ProtectedRoute allowedRole="student" />}>
    {/* Main student area: full sidebar + topbar + footer */}
    <Route path="student" element={<StudentLayout />}>
      <Route index element={<DashboardPage />} />
      <Route path="dashboard" element={<DashboardPage />} />
      <Route path="applications" element={<ApplicationsPage />} />
      <Route path="find-jobs" element={<FindJobsPage />} />
      <Route path="find-jobs/:jobId" element={<JobDescriptionPage />} />
      <Route path="my-profile" element={<MyProfilePage />} />
      <Route path="my-profile/share" element={<ShareProfilePage />} />
      <Route path="settings" element={<SettingsPage />} />
      <Route path="notifications" element={<NotificationsPage />} />
    </Route>

    {/* Edit Profile: topbar + footer only, no main sidebar */}
    <Route path="student" element={<EditProfileLayout />}>
      <Route path="my-profile/edit" element={<EditProfilePage />} />
    </Route>
  </Route>
);

export default StudentRoutes;