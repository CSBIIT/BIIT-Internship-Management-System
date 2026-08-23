import { Route } from 'react-router-dom';
import PublicLayout from '../modules/public/components/PublicLayout';
import LandingPage from '../modules/public/pages/LandingPage';
import SelectRolePage from '../modules/public/pages/SelectRolePage';
import OpportunitiesPage from '../modules/public/pages/OppertunitiesPage';
import AboutPage from '../modules/public/pages/AboutPage';
import ContactPage from '../modules/public/pages/ContactPage';
import LoginPage from '../modules/auth/pages/LoginPage';
import SignupPage from '../modules/auth/pages/SignupPage';

const PublicRoutes = (
  <Route element={<PublicLayout />}>
    <Route index element={<LandingPage />} />
    <Route path="get-started" element={<SelectRolePage />} />
    <Route path="opportunities" element={<OpportunitiesPage />} />
    <Route path="about" element={<AboutPage />} />
    <Route path="contact" element={<ContactPage />} />
    <Route path="login" element={<LoginPage />} />
    <Route path="signup" element={<SignupPage />} />
    {/* Company auth routes: add once Company module login page is built */}
    {/* <Route path="company/login" element={<CompanyLoginPage />} /> */}
  </Route>
);

export default PublicRoutes;