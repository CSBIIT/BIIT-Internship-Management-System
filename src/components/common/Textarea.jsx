const Textarea = ({ label, placeholder, error, rows = 4, className = '', ...props }) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <textarea
        placeholder={placeholder}
        rows={rows}
        className={`w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition-colors resize-none
          ${error ? 'border-red-400 focus:border-red-500' : 'border-gray-300 focus:border-brand'}
          ${className}`}
        {...props}
      />
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
};

export default Textarea;