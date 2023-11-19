const Button = ({ className, variant, children, onClick }) => {
  const determineVariant = () => {
    switch (variant) {
      case 'outline':
        return 'border border-gray-300 text-gray-600 hover:border-gray-400 hover:border transition duration-300';

      default:
        return 'bg-blue-500 text-white hover:bg-blue-600';
    }
  };

  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button
      className={`flex items-center justify-center ${determineVariant()} ${className}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
