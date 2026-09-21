const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  onClick,
  disabled = false,
  type = 'button',
  className = '',
  ...props
}) => {
  const baseStyles = 'font-semibold transition-all duration-300 flex items-center justify-center gap-2';

  const variants = {
    primary: 'bg-primary text-white hover:bg-primary-dark active:scale-95',
    secondary: 'bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white',
    outline: 'bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-white',
    text: 'bg-transparent text-primary hover:text-primary-dark',
  };

  const sizes = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg',
  };

  const widthClass = fullWidth ? 'w-full' : '';
  const disabledClass = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';

  return (
    <button
      type={type}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${disabledClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
