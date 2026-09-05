import { useState } from 'react';
import { User, Lock, Bell, Sun, Moon, Sparkles } from 'lucide-react';

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

    // TODO: replace with real API call
    console.log('Updating password...');

    setPasswordData({
      current: '',
      newPassword: '',
      confirm: '',
    });
  };

  const handleSaveChanges = () => {
    // TODO: replace with real API call
    console.log('Saving settings:', {
      accountData,
      notificationsEnabled,
      appearance,
    });

    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2000);
  };

  return (
    <div className="max-w-4xl space-y-6 overflow-hidden">

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
          p-5
          shadow-sm
          animate-fade-in-up
          transition-all
          duration-500
          ease-out
          hover:-translate-y-1
          hover:shadow-lg
          sm:p-6
        "
        style={{
          animationDelay: '0ms',
        }}
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

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">

        {/* ===================================================
            LEFT COLUMN
        ==================================================== */}

        <div className="space-y-6 lg:col-span-2">

          {/* =================================================
              ACCOUNT INFORMATION
          ================================================== */}

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
            style={{
              animationDelay: '150ms',
            }}
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

            <div className="relative z-10">
              <SectionCard
                title="Account Information"
                icon={User}
              >
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

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
            </div>

          </div>


          {/* =================================================
              SECURITY
          ================================================== */}

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
            style={{
              animationDelay: '300ms',
            }}
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

            <div className="relative z-10">

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
                    "
                  >
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

                  <Button
                    onClick={handleUpdatePassword}
                    variant="outline"
                    className="
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


        {/* ===================================================
            RIGHT COLUMN
        ==================================================== */}

        <div className="space-y-6">

          {/* =================================================
              NOTIFICATIONS
          ================================================== */}

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
            style={{
              animationDelay: '450ms',
            }}
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

            <div className="relative z-10">

              <SectionCard
                title="Notifications"
                icon={Bell}
              >

                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-sm font-medium text-gray-800">
                      Notifications
                    </p>

                    <p className="mt-0.5 text-xs text-gray-400">
                      Receive updates about your applications
                    </p>

                  </div>

                  <button
                    onClick={() =>
                      setNotificationsEnabled((prev) => !prev)
                    }
                    className={`
                      relative
                      h-6
                      w-11
                      shrink-0
                      rounded-full
                      transition-all
                      duration-300
                      hover:scale-105
                      ${
                        notificationsEnabled
                          ? 'bg-brand shadow-sm'
                          : 'bg-gray-200'
                      }
                    `}
                  >

                    <span
                      className={`
                        absolute
                        top-0.5
                        h-5
                        w-5
                        rounded-full
                        bg-white
                        shadow
                        transition-transform
                        duration-300
                        ${
                          notificationsEnabled
                            ? 'translate-x-5'
                            : 'translate-x-0.5'
                        }
                      `}
                    />

                  </button>

                </div>

              </SectionCard>

            </div>

          </div>


          {/* =================================================
              APPEARANCE
          ================================================== */}

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
            style={{
              animationDelay: '550ms',
            }}
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

            <div className="relative z-10">

              <SectionCard title="Appearance">

                <p className="mb-3 text-xs text-gray-400">
                  Choose how the app looks to you
                </p>

                <div className="grid grid-cols-2 gap-3">

                  {/* Light */}
                  <button
                    onClick={() => setAppearance('light')}
                    className={`
                      group/option
                      relative
                      flex
                      items-center
                      justify-center
                      gap-2
                      overflow-hidden
                      rounded-lg
                      border
                      py-2.5
                      text-sm
                      font-medium
                      transition-all
                      duration-300
                      hover:-translate-y-0.5
                      hover:shadow-md
                      ${
                        appearance === 'light'
                          ? 'border-brand bg-brand-light text-brand shadow-sm'
                          : 'border-gray-200 text-gray-500 hover:border-brand/20 hover:bg-gray-50 hover:text-brand'
                      }
                    `}
                  >

                    <span
                      className="
                        absolute
                        left-0
                        top-0
                        h-0.5
                        w-0
                        bg-brand
                        transition-all
                        duration-300
                        group-hover/option:w-full
                      "
                    />

                    <Sun
                      size={15}
                      className="
                        transition-transform
                        duration-300
                        group-hover/option:rotate-12
                      "
                    />

                    Light

                  </button>


                  {/* Dark */}
                  <button
                    onClick={() => setAppearance('dark')}
                    className={`
                      group/option
                      relative
                      flex
                      items-center
                      justify-center
                      gap-2
                      overflow-hidden
                      rounded-lg
                      border
                      py-2.5
                      text-sm
                      font-medium
                      transition-all
                      duration-300
                      hover:-translate-y-0.5
                      hover:shadow-md
                      ${
                        appearance === 'dark'
                          ? 'border-brand bg-brand-light text-brand shadow-sm'
                          : 'border-gray-200 text-gray-500 hover:border-brand/20 hover:bg-gray-50 hover:text-brand'
                      }
                    `}
                  >

                    <span
                      className="
                        absolute
                        left-0
                        top-0
                        h-0.5
                        w-0
                        bg-brand
                        transition-all
                        duration-300
                        group-hover/option:w-full
                      "
                    />

                    <Moon
                      size={15}
                      className="
                        transition-transform
                        duration-300
                        group-hover/option:rotate-12
                      "
                    />

                    Dark

                  </button>

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
          flex
          justify-end
          animate-fade-in-up
        "
        style={{
          animationDelay: '650ms',
        }}
      >

        <Button
          onClick={handleSaveChanges}
          className="
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