const Button = ({
  children,
  icon: Icon,
  variant = 'primary',
  type = 'button',
  onClick,
  className = '',
  ...props
}) => {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-brand text-white hover:bg-brand-dark',
    outline: 'border border-brand text-brand hover:bg-brand-light',
    ghost: 'text-brand hover:bg-brand-light',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {Icon && <Icon size={18} />}
    </button>
  );
};

export default Button;