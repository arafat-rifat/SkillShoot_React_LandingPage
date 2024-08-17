import Button from "../CommonComponents/Button";

const CourseCart = () => {
  return (
    // Main Div
    <div className="flex flex-col">
      {/* Img */}
      <div>
        <img src="/src/assets/course1.png" />
      </div>
      {/* Destails */}
      <div className="flex flex-col gap-[20px] pt-[27px] pb-[18px] pl-[27px] pr-[21px] bg-[#FFFFFF]  rounded-b-2xl">
        {/* Details Heading */}
        <div>
          <h3 className="text-[#2C2C2C] text-2xl font-poppins font-semibold max-w-[365px]">
            Basics of learning team management
          </h3>
        </div>
        {/* Profile and perticipents */}
        <div className="flex justify-between items-center">
          {/* Profile */}
          <div>
            {/* profile */}
            <div>
              {/* img */}
              <img src="/src/assets/coursep1.png" />
            </div>
            {/* description */}
            <div>
              <h3 className="text-[#2C2C2C] text-sm font-poppins font-medium">
                Jone Owel
              </h3>
              <p className="text-[#808080] text-[10px] font-poppins font-normal">
                IT Manager
              </p>
            </div>
          </div>
          {/* Perticipent */}
          <div className="flex gap-[2px] items-center">
            {/* pIcon */}
            <div>
              <img src="/src/assets/pIcon.png" alt="pIcon" />
            </div>
            {/* perticipent */}
            <div>
              <h3 className="text-[#2C2C2C] font-poppins font-medium">120</h3>
              <p className="text-[#808080] text-[10px] font-poppins font-medium">
                Participant
              </p>
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-between items-center bg-[#FAFAFA]">
          {/* Button */}
          <div>
            <Button className="bg-[#245D51] rounded-[10px] text-[#FFFFFF] px-[25px] py-[12px] text-[12px] font-poppins font-semibold">
              Buy Now
            </Button>
          </div>
          {/* Pricing */}
          <div>
            <h3 className="text-[#2C2C2C] text-[24px] font-poppins font-semibold">
              $120
              <span className="text-[#808080] text-xs font-normal">
                /25 video
              </span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCart;
