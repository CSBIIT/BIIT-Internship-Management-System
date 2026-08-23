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

const StudentRoutes = (
  <Route element={<ProtectedRoute allowedRole="student" />}>
    <Route path="student" element={<StudentLayout />}>
      <Route index element={<DashboardPage />} />
      <Route path="dashboard" element={<DashboardPage />} />
      <Route path="applications" element={<ApplicationsPage />} />
      <Route path="find-jobs" element={<FindJobsPage />} />
      <Route path="find-jobs/:jobId" element={<JobDescriptionPage />} />
      <Route path="my-profile" element={<MyProfilePage />} />
      <Route path="my-profile/share" element={<ShareProfilePage />} />
      <Route path="settings" element={<SettingsPage />} />
    </Route>
  </Route>
);

export default StudentRoutes;