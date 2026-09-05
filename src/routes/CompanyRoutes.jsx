import { Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import CompanyLayout from '../modules/company/components/layouts/CompanyLayout';
import DashboardPage from '../modules/company/pages/DashboardPage';
import JobPostingsPage from '../modules/company/pages/JobPostingsPage';
import ApplicantsPage from '../modules/company/pages/ApplicantsPage';

const CompanyRoutes = (
  <Route element={<ProtectedRoute allowedRole="company" />}>
    <Route path="company" element={<CompanyLayout />}>
      <Route index element={<DashboardPage />} />
      <Route path="dashboard" element={<DashboardPage />} />
      <Route path="job-postings" element={<JobPostingsPage />} />
      <Route path="applicants" element={<ApplicantsPage />} />
      {/* Future pages */}
      {/* <Route path="post-job" element={<PostJobPage />} /> */}
      {/* <Route path="interviews" element={<InterviewsPage />} /> */}
      {/* <Route path="company-profile" element={<CompanyProfilePage />} /> */}
      {/* <Route path="settings" element={<SettingsPage />} /> */}
    </Route>
  </Route>
);

export default CompanyRoutes;