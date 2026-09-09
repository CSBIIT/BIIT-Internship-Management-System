import AppRouter from './routes/AppRouter';
import { AuthProvider } from './context/AuthContext';
import { ProfilePhotoProvider } from './context/ProfilePhotoContext';
import { ProfileProvider } from './context/ProfileContext';

function App() {
  return (
    <ProfilePhotoProvider>
      <ProfileProvider>
        <AuthProvider>
          <AppRouter />
        </AuthProvider>
      </ProfileProvider>
    </ProfilePhotoProvider>
  );
}

export default App;