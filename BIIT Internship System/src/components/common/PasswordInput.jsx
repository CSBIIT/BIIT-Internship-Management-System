// components/common/PasswordInput.jsx
import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

const PasswordInput = ({ label, placeholder, error, className = '', ...props }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="w-full min-w-0">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <div className="relative w-full min-w-0">
        <input
          type={visible ? 'text' : 'password'}
          placeholder={placeholder}
          className={`w-full min-w-0 rounded-lg border pl-3 pr-9 py-2.5 text-xs sm:text-sm outline-none transition-colors
            ${error ? 'border-red-400 focus:border-red-500' : 'border-gray-300 focus:border-brand'}
            ${className}`}
          {...props}
        />
        <button
          type="button"
          onClick={() => setVisible((prev) => !prev)}
          className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 shrink-0"
          tabIndex={-1}
        >
          {visible ? <EyeOff size={16} className="sm:hidden" /> : <Eye size={16} className="sm:hidden" />}
          {visible ? <EyeOff size={18} className="hidden sm:block" /> : <Eye size={18} className="hidden sm:block" />}
        </button>
      </div>
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
};

export default PasswordInput;