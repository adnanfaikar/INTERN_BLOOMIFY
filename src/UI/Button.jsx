const Button = ({
  variation,
  type,
  children,
  onClick,
  className,
  disabled = false,
}) => {
  // STYLE LIST BUTTON
  const getButtonVariation = (variation) => {
    switch (variation) {
      case "primary":
        return "bg-[#806C55] text-[#F3F4C3] hover:bg-[#9A8266] hover:text-white border border-[#4D4D2D] rounded-xl transition-colors ";
      case "secondary":
        return "bg-white text-[#999B5A] border-2 border-[#999B5A] hover:bg-[#E6E887]          ";
      case "tertiary":
        return "bg-trasparent text-[#999B5A] hover:text-#[999B5A] hover:underline";
      case "tertiary-red":
        return "border border-red-300 hover:bg-red-500 text-red-500 hover:text-white";
      default:
        return "";
    }
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${getButtonVariation(variation)}
       font-medium rounded-lg py-2 md:py-2.5 px-3 md:px-4 text-sm md:text-base transition-colors duration-300 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
