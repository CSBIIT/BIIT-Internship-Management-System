const colorMap = {
  blue: 'bg-blue-50 text-blue-600',
  green: 'bg-green-50 text-green-600',
  yellow: 'bg-yellow-50 text-yellow-600',
  red: 'bg-red-50 text-red-600',
};

const StatCard = ({ icon: Icon, value, label, color = 'blue' }) => {
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-4 flex items-center gap-3">
      <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${colorMap[color]}`}>
        <Icon size={18} />
      </div>
      <div>
        <p className="text-lg font-bold leading-none">{value}</p>
        <p className="text-xs text-gray-500 mt-1">{label}</p>
      </div>
    </div>
  );
};

export default StatCard;