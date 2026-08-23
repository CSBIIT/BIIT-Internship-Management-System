import { Link } from 'react-router-dom';

const RoleCard = ({ icon: Icon, title, description, buttonLabel, to }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 text-center w-full max-w-xs">
      <div className="w-14 h-14 rounded-full bg-brand-light flex items-center justify-center mx-auto mb-4">
        <Icon size={26} className="text-brand" />
      </div>

      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-gray-500 text-sm mb-6 leading-relaxed">{description}</p>

      <Link
        to={to}
        className="block w-full bg-brand text-white rounded-full py-3 font-medium hover:bg-brand-dark transition-colors"
      >
        {buttonLabel}
      </Link>
    </div>
  );
};

export default RoleCard;