import { useState } from 'react';
import { User, Lock, Bell, Sun, Moon } from 'lucide-react';
import Input from '../../../components/common/Input';
import PasswordInput from '../../../components/common/PasswordInput';
import Button from '../../../components/common/Button';
import { SectionCard } from '../components/profile/ProfileSections';

const SettingsPage = () => {
  const [accountData, setAccountData] = useState({
    fullName: 'Ali Khan',
    studentId: '2023-ARID-0000',
    email: 'ali.khan@biit.edu.pk',
  });

  const [passwordData, setPasswordData] = useState({
    current: '',
    newPassword: '',
    confirm: '',
  });
  const [passwordError, setPasswordError] = useState('');

  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [appearance, setAppearance] = useState('light');
  const [saved, setSaved] = useState(false);

  const handleAccountChange = (e) => {
    setAccountData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlePasswordChange = (e) => {
    setPasswordData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setPasswordError('');
  };

  const handleUpdatePassword = () => {
    if (!passwordData.current || !passwordData.newPassword || !passwordData.confirm) {
      setPasswordError('Please fill in all password fields');
      return;
    }
    if (passwordData.newPassword !== passwordData.confirm) {
      setPasswordError('New password and confirm password do not match');
      return;
    }
    // TODO: replace with real API call
    console.log('Updating password...');
    setPasswordData({ current: '', newPassword: '', confirm: '' });
  };

  const handleSaveChanges = () => {
    // TODO: replace with real API call for accountData, notificationsEnabled, appearance
    console.log('Saving settings:', { accountData, notificationsEnabled, appearance });
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold mb-1">Settings</h1>
        <p className="text-gray-500 text-sm">
          Manage your account, security, notifications, and preferences.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Account Information */}
          <SectionCard title="Account Information" icon={User}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                label="Full Name"
                name="fullName"
                value={accountData.fullName}
                onChange={handleAccountChange}
              />
              <Input
                label="Student ID"
                name="studentId"
                value={accountData.studentId}
                onChange={handleAccountChange}
                disabled
              />
            </div>
            <div className="mt-4">
              <Input
                label="Email Address"
                type="email"
                name="email"
                value={accountData.email}
                onChange={handleAccountChange}
              />
            </div>
          </SectionCard>

          {/* Security */}
          <SectionCard title="Security" icon={Lock}>
            {passwordError && (
              <p className="text-red-500 text-xs bg-red-50 rounded-lg px-3 py-2 mb-4">
                {passwordError}
              </p>
            )}
            <div className="space-y-4">
              <PasswordInput
                label="Current Password"
                name="current"
                placeholder="Enter current password"
                value={passwordData.current}
                onChange={handlePasswordChange}
              />
              <PasswordInput
                label="New Password"
                name="newPassword"
                placeholder="Enter new password"
                value={passwordData.newPassword}
                onChange={handlePasswordChange}
              />
              <PasswordInput
                label="Confirm New Password"
                name="confirm"
                placeholder="Confirm new password"
                value={passwordData.confirm}
                onChange={handlePasswordChange}
              />
              <Button onClick={handleUpdatePassword} variant="outline" className="text-sm">
                Update Password
              </Button>
            </div>
          </SectionCard>
        </div>

        <div className="space-y-6">
          {/* Notifications */}
          <SectionCard title="Notifications" icon={Bell}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Notifications</p>
                <p className="text-xs text-gray-400 mt-0.5">
                  Receive updates about your applications
                </p>
              </div>
              <button
                onClick={() => setNotificationsEnabled((prev) => !prev)}
                className={`w-11 h-6 rounded-full transition-colors shrink-0 relative ${
                  notificationsEnabled ? 'bg-brand' : 'bg-gray-200'
                }`}
              >
                <span
                  className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${
                    notificationsEnabled ? 'translate-x-5' : 'translate-x-0.5'
                  }`}
                />
              </button>
            </div>
          </SectionCard>

          {/* Appearance */}
          <SectionCard title="Appearance">
            <p className="text-xs text-gray-400 mb-3">Choose how the app looks to you</p>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setAppearance('light')}
                className={`flex items-center justify-center gap-2 rounded-lg py-2.5 text-sm font-medium border transition-colors ${
                  appearance === 'light'
                    ? 'border-brand bg-brand-light text-brand'
                    : 'border-gray-200 text-gray-500 hover:bg-gray-50'
                }`}
              >
                <Sun size={15} /> Light
              </button>
              <button
                onClick={() => setAppearance('dark')}
                className={`flex items-center justify-center gap-2 rounded-lg py-2.5 text-sm font-medium border transition-colors ${
                  appearance === 'dark'
                    ? 'border-brand bg-brand-light text-brand'
                    : 'border-gray-200 text-gray-500 hover:bg-gray-50'
                }`}
              >
                <Moon size={15} /> Dark
              </button>
            </div>
          </SectionCard>
        </div>
      </div>

      <div className="flex justify-end">
        <Button onClick={handleSaveChanges} className="px-6">
          {saved ? 'Saved!' : 'Save Changes'}
        </Button>
      </div>
    </div>
  );
};

export default SettingsPage;