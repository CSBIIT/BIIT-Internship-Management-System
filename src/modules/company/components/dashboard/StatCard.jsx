const iconBgStyles = {
  blue: 'bg-blue-50 text-blue-600',
  green: 'bg-emerald-50 text-emerald-600',
  orange: 'bg-orange-50 text-orange-600',
  red: 'bg-rose-50 text-rose-600',
};

const StatCard = ({ icon: Icon, value, label, sublabel, color = 'green' }) => {
  return (
    <div className="relative z-10 p-5">
      <div className="flex items-start gap-4">
        <div
          className={`
            flex h-10 w-10 shrink-0 items-center justify-center rounded-xl
            ${iconBgStyles[color]}
          `}
        >
          <Icon size={20} />
        </div>
        <div>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
          <p className="text-sm font-semibold text-gray-700">{label}</p>
          <p className="mt-0.5 text-xs text-gray-400">{sublabel}</p>
        </div>
      </div>
    </div>
  );
};

export default StatCard;