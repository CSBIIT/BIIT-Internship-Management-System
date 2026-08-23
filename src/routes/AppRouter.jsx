import { Routes } from 'react-router-dom';
import PublicRoutes from './PublicRoutes';
import StudentRoutes from './StudentRoutes';
// import CompanyRoutes from './CompanyRoutes'; // uncomment once Company module is built
// import AdminRoutes from './AdminRoutes';     // uncomment once Admin module is built

const AppRouter = () => {
  return (
    <Routes>
      {PublicRoutes}
      {StudentRoutes}
      {/* {CompanyRoutes} */}
      {/* {AdminRoutes} */}
    </Routes>
  );
};

export default AppRouter;