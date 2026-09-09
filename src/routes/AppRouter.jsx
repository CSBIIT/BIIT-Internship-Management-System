import { useEffect, useRef } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import ScrollToTop from '../components/common/ScrollToTop';
import PublicRoutes from './PublicRoutes';
import StudentRoutes from './StudentRoutes';
import CompanyRoutes from './CompanyRoutes';
import FooterInfoPage from '../modules/public/pages/FooterInfoPage';

const AppRouter = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const hasCheckedAuth = useRef(false);

  useEffect(() => {
    // Run the redirect check only once on component mount
    if (hasCheckedAuth.current) return;

    const token = localStorage.getItem('token') || sessionStorage.getItem('token');
    const isPublicAuthPage = ['/', '/login', '/signup'].includes(location.pathname);

    if (token && isPublicAuthPage) {
      hasCheckedAuth.current = true;
      navigate('/student/dashboard', { replace: true });
    }
  }, []); // Empty dependency array prevents re-execution on location updates

  return (
    <>
      <ScrollToTop />
      <Routes>
        {PublicRoutes}
        {StudentRoutes}
        {CompanyRoutes}
        <Route path="info" element={<FooterInfoPage />} />
      </Routes>
    </>
  );
};

export default AppRouter;