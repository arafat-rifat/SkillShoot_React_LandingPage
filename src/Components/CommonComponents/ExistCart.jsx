const ExistCart = ({ title, desCription, src }) => {
  return (
    // Cart div
    <div className="flex flex-col gap-[30px]">
      {/* img */}
      <div>
        <img src={src} />
      </div>
      {/* Description */}
      <div>
        <h3 className="text-[#245D51] text-2xl font-poppins font-semibold leading-9">
          {title}
        </h3>
        <p className="text-[#808080] text-base leading-9 font-poppins font-normal">
          {desCription}
        </p>
      </div>
    </div>
  );
};

export default ExistCart;
