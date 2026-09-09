import { ChevronDown } from 'lucide-react';

const Select = ({ label, options = [], placeholder = 'Select', error, className = '', ...props }) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <div className="relative">
        <select
          className={`w-full appearance-none rounded-lg border px-4 py-2.5 pr-10 text-sm outline-none transition-colors bg-white
            ${error ? 'border-red-400 focus:border-red-500' : 'border-gray-300 focus:border-brand'}
            ${className}`}
          defaultValue=""
          {...props}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <ChevronDown
          size={16}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
        />
      </div>
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
};

export default Select;