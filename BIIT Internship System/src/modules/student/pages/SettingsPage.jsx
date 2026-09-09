import { useState, useEffect } from 'react';
import { User, Lock, Bell, Sparkles } from 'lucide-react';

import Input from '../../../components/common/Input';
import PasswordInput from '../../../components/common/PasswordInput';
import Button from '../../../components/common/Button';
import { SectionCard } from '../components/profile/ProfileSections';
import { useProfile } from '../../../context/ProfileContext';

const SettingsPage = () => {
  const { profileData, updateUserName } = useProfile();

  const [accountData, setAccountData] = useState({
    fullName: profileData?.basic?.name || 'Ali Khan',
    studentId: '2023-ARID-0000',
    email: profileData?.basic?.email || 'ali.khan@biit.edu.pk',
  });

  // Keep local input in sync if profileData changes externally
  useEffect(() => {
    if (profileData?.basic?.name) {
      setAccountData((prev) => ({
        ...prev,
        fullName: profileData.basic.name,
      }));
    }
  }, [profileData?.basic?.name]);

  const [passwordData, setPasswordData] = useState({
    current: '',
    newPassword: '',
    confirm: '',
  });

  const [passwordError, setPasswordError] = useState('');

  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [saved, setSaved] = useState(false);

  const handleAccountChange = (e) => {
    setAccountData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handlePasswordChange = (e) => {
    setPasswordData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    setPasswordError('');
  };

  const handleUpdatePassword = () => {
    if (
      !passwordData.current ||
      !passwordData.newPassword ||
      !passwordData.confirm
    ) {
      setPasswordError('Please fill in all password fields');
      return;
    }

    if (passwordData.newPassword !== passwordData.confirm) {
      setPasswordError('New password and confirm password do not match');
      return;
    }

    console.log('Updating password...');

    setPasswordData({
      current: '',
      newPassword: '',
      confirm: '',
    });
  };

  const handleSaveChanges = () => {
    // ✅ Synchronize user name globally to ProfileContext
    if (accountData.fullName.trim()) {
      updateUserName(accountData.fullName.trim());
    }

    console.log('Saving settings:', {
      accountData,
      notificationsEnabled,
    });

    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2000);
  };

  return (
    <div className="mx-auto w-full max-w-full px-3 py-3 sm:px-4 sm:py-4 lg:px-8 lg:py-6 xl:px-10">

      {/* =====================================================
          PAGE HEADER
      ====================================================== */}

      <div
        className="
          group
          relative
          overflow-hidden
          rounded-2xl
          border
          border-gray-100
          bg-white
          p-4
          shadow-sm
          animate-fade-in-up
          transition-all
          duration-500
          ease-out
          hover:-translate-y-1
          hover:shadow-lg
          sm:p-6
        "
        style={{ animationDelay: '0ms' }}
      >

        {/* Animated green top line */}
        <div
          className="
            pointer-events-none
            absolute
            left-0
            top-0
            z-30
            h-0.5
            w-0
            bg-brand
            transition-all
            duration-500
            ease-out
            group-hover:w-full
          "
        />

        {/* Green glow */}
        <div
          className="
            pointer-events-none
            absolute
            -right-16
            -top-16
            z-0
            h-40
            w-40
            rounded-full
            bg-brand/5
            blur-2xl
            transition-all
            duration-700
            group-hover:scale-150
            group-hover:bg-brand/10
          "
        />

        {/* Decorative circle */}
        <div
          className="
            pointer-events-none
            absolute
            -bottom-10
            left-1/3
            z-0
            h-20
            w-20
            rounded-full
            bg-emerald-100/40
            blur-xl
            transition-transform
            duration-700
            group-hover:scale-125
          "
        />

        <div className="relative z-10">

          {/* Small label */}
          <div className="mb-2 flex items-center gap-2">
            <Sparkles
              size={15}
              className="
                text-brand
                transition-transform
                duration-500
                group-hover:rotate-12
                group-hover:scale-110
              "
            />

            <span
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.16em]
                text-brand
              "
            >
              Account Preferences
            </span>
          </div>

          <h1 className="mb-1 text-xl font-bold text-gray-900 sm:text-2xl">
            Settings
          </h1>

          <p className="max-w-2xl text-sm leading-relaxed text-gray-500">
            Manage your account, security, notifications, and preferences.
          </p>

        </div>
      </div>


      {/* =====================================================
          SETTINGS CONTENT
      ====================================================== */}

      <div
        className="
          mt-4
          grid
          grid-cols-1
          gap-4
          sm:mt-6
          sm:gap-6
          lg:grid-cols-12
          lg:items-start
        "
      >

        {/* =================================================
            ACCOUNT INFORMATION
        ================================================== */}

        <div className="lg:col-span-8">

          <div
            className="
              group
              relative
              overflow-hidden
              rounded-2xl
              animate-fade-in-up
              transition-all
              duration-500
              ease-out
              hover:-translate-y-1
              hover:shadow-lg
            "
            style={{ animationDelay: '150ms' }}
          >

            {/* Animated green line */}
            <div
              className="
                pointer-events-none
                absolute
                left-0
                top-0
                z-30
                h-0.5
                w-0
                bg-brand
                transition-all
                duration-500
                ease-out
                group-hover:w-full
              "
            />

            {/* Green glow */}
            <div
              className="
                pointer-events-none
                absolute
                -right-10
                -top-10
                z-0
                h-24
                w-24
                rounded-full
                bg-brand/0
                blur-2xl
                transition-all
                duration-500
                group-hover:scale-150
                group-hover:bg-brand/10
              "
            />

            <div className="relative z-10 bg-white p-4 sm:p-6">

              <SectionCard
                title="Account Information"
                icon={User}
              >

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

                  <div className="w-full">
                    <Input
                      label="Full Name"
                      name="fullName"
                      value={accountData.fullName}
                      onChange={handleAccountChange}
                      className="w-full text-sm sm:text-base"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="w-full">
                    <Input
                      label="Student ID"
                      name="studentId"
                      value={accountData.studentId}
                      onChange={handleAccountChange}
                      disabled
                      className="w-full text-sm sm:text-base"
                      placeholder="Student ID"
                    />
                  </div>

                </div>

                <div className="mt-4 w-full">

                  <Input
                    label="Email Address"
                    type="email"
                    name="email"
                    value={accountData.email}
                    onChange={handleAccountChange}
                    className="w-full text-sm sm:text-base"
                    placeholder="Enter your email address"
                  />

                </div>

              </SectionCard>

            </div>

          </div>

        </div>


        {/* =================================================
            NOTIFICATIONS
        ================================================== */}

        <div className="lg:col-span-4">

          <div
            className="
              group
              relative
              overflow-hidden
              rounded-2xl
              animate-fade-in-up
              transition-all
              duration-500
              ease-out
              hover:-translate-y-1
              hover:shadow-lg
            "
            style={{ animationDelay: '450ms' }}
          >

            {/* Animated green line */}
            <div
              className="
                pointer-events-none
                absolute
                left-0
                top-0
                z-30
                h-0.5
                w-0
                bg-brand
                transition-all
                duration-500
                ease-out
                group-hover:w-full
              "
            />

            {/* Green glow */}
            <div
              className="
                pointer-events-none
                absolute
                -right-10
                -top-10
                z-0
                h-24
                w-24
                rounded-full
                bg-brand/0
                blur-2xl
                transition-all
                duration-500
                group-hover:scale-150
                group-hover:bg-brand/10
              "
            />

            <div className="relative z-10 bg-white p-4 sm:p-6">

              <SectionCard
                title="Notifications"
                icon={Bell}
              >

                <div className="flex items-center justify-between gap-3">

                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-800 truncate">
                      Notifications
                    </p>

                    <p className="mt-0.5 text-xs text-gray-400 break-words">
                      Receive updates about your applications
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    {/* Toggle Button */}
                    <button
                      onClick={() =>
                        setNotificationsEnabled((prev) => !prev)
                      }
                      className={`
                        relative
                        h-8
                        w-14
                        shrink-0
                        rounded-full
                        transition-all
                        duration-300
                        ease-in-out
                        hover:scale-105
                        focus:outline-none
                        focus:ring-2
                        focus:ring-brand/50
                        focus:ring-offset-2
                        ${notificationsEnabled ? 'bg-brand shadow-md' : 'bg-gray-300'}
                      `}
                      role="switch"
                      aria-checked={notificationsEnabled}
                      aria-label="Toggle notifications"
                    >
                      <span
                        className={`
                          absolute
                          top-1
                          h-6
                          w-6
                          rounded-full
                          bg-white
                          shadow-lg
                          transition-all
                          duration-300
                          ease-in-out
                          ${notificationsEnabled ? 'translate-x-7' : 'translate-x-1'}
                        `}
                      />

                      {/* Status indicator for accessibility */}
                      <span className="sr-only">
                        {notificationsEnabled ? 'Notifications enabled' : 'Notifications disabled'}
                      </span>
                    </button>
                  </div>

                </div>

                {/* Status text for mobile */}
                <div className="mt-3 flex items-center justify-between text-xs">
                  <span className="text-gray-400">Status</span>
                  <span className={`font-medium ${notificationsEnabled ? 'text-brand' : 'text-gray-500'}`}>
                    {notificationsEnabled ? 'On' : 'Off'}
                  </span>
                </div>

              </SectionCard>

            </div>

          </div>

        </div>


        {/* =================================================
            SECURITY
        ================================================== */}

        <div className="lg:col-span-12">

          <div
            className="
              group
              relative
              overflow-hidden
              rounded-2xl
              animate-fade-in-up
              transition-all
              duration-500
              ease-out
              hover:-translate-y-1
              hover:shadow-lg
            "
            style={{ animationDelay: '300ms' }}
          >

            {/* Animated green line */}
            <div
              className="
                pointer-events-none
                absolute
                left-0
                top-0
                z-30
                h-0.5
                w-0
                bg-brand
                transition-all
                duration-500
                ease-out
                group-hover:w-full
              "
            />

            {/* Green glow */}
            <div
              className="
                pointer-events-none
                absolute
                -right-10
                -top-10
                z-0
                h-24
                w-24
                rounded-full
                bg-brand/0
                blur-2xl
                transition-all
                duration-500
                group-hover:scale-150
                group-hover:bg-brand/10
              "
            />

            <div className="relative z-10 bg-white p-4 sm:p-6">

              <SectionCard
                title="Security"
                icon={Lock}
              >

                {passwordError && (
                  <p
                    className="
                      mb-4
                      rounded-lg
                      bg-red-50
                      px-3
                      py-2
                      text-xs
                      text-red-500
                      animate-fade-in-up
                      break-words
                    "
                  >
                    {passwordError}
                  </p>
                )}

                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">

                  <div className="w-full">
                    <PasswordInput
                      label="Current Password"
                      name="current"
                      placeholder="Enter current password"
                      value={passwordData.current}
                      onChange={handlePasswordChange}
                      className="w-full text-sm sm:text-base"
                    />
                  </div>

                  <div className="w-full">
                    <PasswordInput
                      label="New Password"
                      name="newPassword"
                      placeholder="Enter new password"
                      value={passwordData.newPassword}
                      onChange={handlePasswordChange}
                      className="w-full text-sm sm:text-base"
                    />
                  </div>

                  <div className="w-full">
                    <PasswordInput
                      label="Confirm New Password"
                      name="confirm"
                      placeholder="Confirm new password"
                      value={passwordData.confirm}
                      onChange={handlePasswordChange}
                      className="w-full text-sm sm:text-base"
                    />
                  </div>

                </div>

                <div className="mt-4">

                  <Button
                    onClick={handleUpdatePassword}
                    variant="outline"
                    className="
                      w-full
                      sm:w-auto
                      text-sm
                      transition-all
                      duration-300
                      hover:-translate-y-0.5
                      hover:shadow-md
                    "
                  >
                    Update Password
                  </Button>

                </div>

              </SectionCard>

            </div>

          </div>

        </div>

      </div>


      {/* =====================================================
          SAVE CHANGES
      ====================================================== */}

      <div
        className="
          mt-4
          flex
          justify-center
          sm:justify-end
          animate-fade-in-up
          sm:mt-6
        "
        style={{ animationDelay: '650ms' }}
      >

        <Button
          onClick={handleSaveChanges}
          className="
            w-full
            sm:w-auto
            px-6
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-lg
          "
        >
          {saved ? 'Saved!' : 'Save Changes'}
        </Button>

      </div>

    </div>
  );
};

export default SettingsPage;