const MiniCard = ({
  imageUrl,
  title,
  description,
  category,
  doctor,
  date,
  clinic,
  onClick,
}) => {
  return (
    <div
      className="max-w-[392px] xl:w-max md:w-[300px] h-[475px] rounded-xl border-2 border-[#0B4457] shadow-lg text-[#0B4457] text-justify cursor-pointer transform hover:-translate-y-5 transition-transform"
      onClick={onClick}
    >
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-[294px] rounded-xl object-cover shadow-lg"
      />
      <div className="p-4 ">
        <h3 className="text-2xl font-bold md:text-xl">{title}</h3>
        <p className="text-xs font-bold mt-2">
          {category && `${category}`}
          {clinic && ` | ${clinic}`}
          {doctor && ` | Dr.${doctor}`}
          {date && ` | ${date}`}
        </p>
        {description && (
          <p className="text-base mt-2 font-regular md:text-sm ">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default MiniCard;
