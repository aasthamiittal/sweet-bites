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
  const baseStyles = 'font-semibold transition-all duration-200 flex items-center justify-center gap-2 rounded-xl touch-manipulation';

  const variants = {
    primary: 'bg-primary text-white hover:bg-primary-dark active:scale-95 shadow-sm hover:shadow-md',
    secondary: 'bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white shadow-sm',
    outline: 'bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-white',
    text: 'bg-transparent text-primary hover:text-primary-dark',
  };

  const sizes = {
    small: 'px-4 py-2.5 text-sm min-h-[40px]',
    medium: 'px-6 py-3 text-base min-h-[44px]',
    large: 'px-8 py-4 text-lg min-h-[48px]',
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
