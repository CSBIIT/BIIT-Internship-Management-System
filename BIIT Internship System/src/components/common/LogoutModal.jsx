import { LogOut } from 'lucide-react';
import heroImageDesktop from '../../assets/images/BIIT.jpeg';
import Button from './Button';

const LogoutModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center">
      {/* =====================================================
          BACKDROP — Same as login screen
      ====================================================== */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={heroImageDesktop}
          alt="BIIT Building"
          className="absolute inset-0 h-full w-full object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-white/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#f7f6f2]/90 via-[#f7f6f2]/60 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#f7f6f2] to-transparent" />
        {/* Slight extra dimming so modal pops */}
        <div className="absolute inset-0 bg-gray-900/10" />
      </div>

      {/* =====================================================
          MODAL CARD
      ====================================================== */}
      <div
        className="relative z-10 mx-4 w-full max-w-md animate-fade-in-up"
        style={{ animationDelay: '0ms' }}
      >
        <div className="rounded-2xl bg-white p-6 shadow-2xl sm:p-8">
          {/* Header */}
          <div className="mb-6 flex items-center gap-2.5 text-gray-900">
            <LogOut size={20} />
            <span className="text-base font-bold">Logout</span>
          </div>

          {/* Body */}
          <div className="mb-8 text-center">
            <h2 className="text-lg font-bold text-gray-900">
              Are you sure you want to logout?
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              You are about to end your current session.
            </p>
          </div>

          {/* Buttons */}
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={onClose}
              className="
                rounded-lg
                border
                border-gray-200
                bg-white
                px-4
                py-2.5
                text-sm
                font-semibold
                text-gray-700
                transition-all
                duration-300
                hover:border-gray-300
                hover:bg-gray-50
              "
            >
              Cancel
            </button>
            <Button onClick={onConfirm} variant="primary" className="w-full py-2.5 text-sm">
              Logout
            </Button>
          </div>

          {/* Footer */}
          <p className="mt-5 text-center text-[11px] text-gray-400">
            Your account data will remain securely saved after logout.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;