import Button from "./Button";

const SubscribeCart = () => {
  return (
    // Cart Div
    <div className="flex flex-col gap-[20px] px-[30px] pt-[20px] pb-[33px] bg-[#245D51] rounded-2xl">
      {/* Button */}
      <div className="flex justify-end">
        <Button className="text-[10px] text-[#FFFFFF] py-[5px] px-[17px] rounded-2xl bg-[#CB8461]">
          MOST POPULAR
        </Button>
      </div>
      {/* price */}
      <div>
        <h3 className="text-[#FFFFFF] text-[36px] font-poppins font-bold">
          $100{" "}
          <span className="text-[16px] font-poppins font-normal">
            / 6 month
          </span>
        </h3>
      </div>

      {/* Version */}
      <div>
        <h3 className="text-[#FFFFFF] text-[28px] font-poppins font-bold">
          Pro
        </h3>
      </div>
      {/* Description */}
      <div>
        <p className="text-[#FFFFFF] text-base font-poppins font-normal max-w-[232px]">
          Lorem Ipsum is simply dummy text of the printing{" "}
        </p>
      </div>

      {/* bulet points */}
      <div>
        <p className="text-[#FFFFFF] text-[16px] font-poppins font-normal flex items-center gap-[10px]">
          <span>
            <img src="/src/assets/Path.png" alt="pathPng" />
          </span>
          <span>Access all videos</span>
        </p>
        <p className="text-[#FFFFFF] text-[16px] font-poppins font-normal flex items-center gap-[10px]">
          <span>
            <img src="/src/assets/Path.png" alt="pathPng" />
          </span>
          <span>Get Certificate</span>
        </p>
        <p className="text-[#FFFFFF] text-[16px] font-poppins font-normal flex items-center gap-[10px]">
          <span>
            <img src="/src/assets/Path.png" alt="pathPng" />
          </span>
          <span>Chat support</span>
        </p>
        <p className="text-[#FFFFFF] text-[16px] font-poppins font-normal flex items-center gap-[10px]">
          <span>
            <img src="/src/assets/Path.png" alt="pathPng" />
          </span>
          <span>Update Notification</span>
        </p>
        <p className="text-[#FFFFFF] text-[16px] font-poppins font-normal flex items-center gap-[10px]">
          <span>
            <img src="/src/assets/Path.png" alt="pathPng" />
          </span>
          <span>Download material</span>
        </p>
      </div>

      {/*Choose plan Button */}
      <div className="flex justify-center">
        <Button className="font-poppins font-semibold leading-9 text-[16px] text-[#FFFFFF] py-[5px] px-[64px] rounded-3xl bg-[#CB8461]">
          Choose plan
        </Button>
      </div>
    </div>
  );
};

export default SubscribeCart;