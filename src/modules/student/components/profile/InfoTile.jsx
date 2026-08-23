const InfoTile = ({ icon: Icon, label, value, className = '' }) => (
  <div className={`bg-white rounded-xl border border-gray-100 p-4 flex items-center gap-3 ${className}`}>
    <div className="w-9 h-9 rounded-lg bg-brand-light flex items-center justify-center shrink-0">
      <Icon size={16} className="text-brand" />
    </div>
    <div className="min-w-0 flex-1">
      <p className="text-[10px] uppercase tracking-wide text-gray-400">{label}</p>
      <p className="text-sm font-bold whitespace-nowrap">{value}</p>
    </div>
  </div>
);

export default InfoTile;