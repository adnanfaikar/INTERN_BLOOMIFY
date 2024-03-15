const Button = ({
  variation,
  type,
  children,
  onClick,
  className,
  disabled = false,
}) => {
  const getButtonVariation = (variation) => {
    switch (variation) {
      case "primary":
        return "bg-[#0E556C] text-white hover:bg-[#398097] hover:text-white active:bg-[#06222B] border border-[#4D4D2D] rounded-[8px] transition-colors font-regular";
      case "secondary":
        return "bg-white text-[#0B4457] border-2 border-[#0E556C] hover:bg-[#CFE0E6] hover:text-[#116682] font-regular";
      case "tertiary":
        return "bg-trasparent text-[#999B5A] hover:text-#[999B5A] hover:underline font-regular";
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
