const Badge = ({ children, status = 'default' }) => {
  const styles = {
    accepted: 'bg-green-100 text-green-700',
    'interview-scheduled': 'bg-blue-100 text-blue-700',
    pending: 'bg-yellow-100 text-yellow-700',
    'under-review': 'bg-yellow-100 text-yellow-700',
    rejected: 'bg-red-100 text-red-700',
    default: 'bg-gray-100 text-gray-700',
  };

  return (
    <span
      className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${styles[status]}`}
    >
      {children}
    </span>
  );
};

export default Badge;