import { Routes, Route } from 'react-router-dom';
import ScrollToTop from '../components/common/ScrollToTop';
import PublicRoutes from './PublicRoutes';
import StudentRoutes from './StudentRoutes';
import CompanyRoutes from './CompanyRoutes';
import FooterInfoPage from '../modules/public/pages/FooterInfoPage';

const AppRouter = () => {
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