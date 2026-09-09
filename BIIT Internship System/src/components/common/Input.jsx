// components/common/Input.jsx
const Input = ({
  label,
  type = 'text',
  placeholder,
  error,
  className = '',
  ...props
}) => {
  return (
    <div className="w-full min-w-0">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        className={`w-full min-w-0 rounded-lg border px-3 py-2.5 text-xs sm:text-sm outline-none transition-colors
          ${error ? 'border-red-400 focus:border-red-500' : 'border-gray-300 focus:border-brand'}
          ${className}`}
        {...props}
      />
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
};

export default Input;