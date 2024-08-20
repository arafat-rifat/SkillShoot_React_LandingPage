const ExistCart = ({ title, desCription, src }) => {
  return (
    // Cart div
    <div className="flex flex-col items-center laptop:items-start gap-[30px]">
      {/* img */}
      <div>
        <img src={src} />
      </div>
      {/* Description */}
      <div>
        <h3 className="text-[#245D51] text-lg laptop:text-2xl font-poppins font-semibold leading-9 text-center laptop:items-start">
          {title}
        </h3>
        <p className="text-[#808080] text-xs laptop:text-base leading-7 laptop:leading-9 font-poppins font-normal text-center laptop:items-start">
          {desCription}
        </p>
      </div>
    </div>
  );
};

export default ExistCart;
