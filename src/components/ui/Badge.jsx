const Badge = ({ children, variant = 'primary', className = '' }) => {
  const variants = {
    primary: 'bg-primary text-white',
    sale: 'bg-red-500 text-white',
    new: 'bg-green-500 text-white',
    bestseller: 'bg-yellow-500 text-gray-900',
    secondary: 'bg-primary-lighter text-primary-dark',
  };

  return (
    <span
      className={`inline-block px-3 py-1 text-xs font-bold uppercase tracking-wide ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;
