import { BrowserRouter } from 'react-router-dom';
import PublicLayout from './modules/public/components/PublicLayout';
import LandingPage from './modules/public/pages/LandingPage';

function App() {
  return (
    <BrowserRouter>
      <PublicLayout>
        <LandingPage />
      </PublicLayout>
    </BrowserRouter>
  );
}

export default App;