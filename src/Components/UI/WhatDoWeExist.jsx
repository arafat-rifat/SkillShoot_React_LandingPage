import ExistCart from "../CommonComponents/ExistCart";
import Container from "../CommonLayout/Container";

const WhatDoWeExist = () => {
  return (
    <section>
      <Container>
        {/* Main Div */}
        <div className="grid grid-cols-2 gap-[100px] pt-[100px] mb-[100px]">
          {/* Left */}
          <div className="flex flex-col gap-[30px]">
            {/* heading */}
            <div>
              <h1 className="text-[#2C2C2C] text-[36px] font-poppins font-semibold">
                Why do we <span className="text-[#CB8461]">exist?</span>
              </h1>
              <p className="text-[#808080] text-base font-poppins font-normal leading-9 pt-[20px] max-w-[424px]">
                Because we know that many people or companies have the same
                problem when it comes to how difficult it is to improve their
                skills
              </p>
            </div>

            {/* Profile div */}
            <div className="flex items-center gap-[13px] pb-[30px] border-b border-[#2C2C2C33] max-w-[413px]">
              {/* img */}
              <div>
                <img src="/src/assets/profilePic.png" />
              </div>

              {/* Description */}
              <div className="flex flex-col gap-[13px]">
                <p className="text-[#2C2C2C] text-lg font-poppins font-semibold ">
                  Jerony Pulquosta
                </p>
                <p className="text-[#808080] text-[12px] font-poppins font-normal">
                  CEO Skill Shoot
                </p>
              </div>
            </div>

            {/* Number of member and product */}

            <div className="flex gap-[50px]">
              <div>
                <h3 className="text-[#2C2C2C] text-[36px] font-poppins font-bold leading-[54px]">
                  100+
                </h3>
                <p className="text-[#808080] text-xs font-poppins font-normal">
                  Updated Material
                </p>
              </div>

              <div>
                <h3 className="text-[#2C2C2C] text-[36px] font-poppins font-bold leading-[54px]">
                  15K
                </h3>
                <p className="text-[#808080] text-xs font-poppins font-normal">
                  Member Join
                </p>
              </div>
            </div>
          </div>
          {/* Right */}
          <div className="grid grid-cols-2 gap-[50px]">
            <ExistCart
              title="Material Limitations"
              desCription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              src="/src/assets/exitCart1.png"
            />
            <ExistCart
              title="Unprofessional Mentor"
              desCription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              src="/src/assets/exitCart2.png"
            />
            <ExistCart
              title="Video Quality"
              desCription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              src="/src/assets/exitCart3.png"
            />
            <ExistCart
              title="High Price"
              desCription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              src="/src/assets/exitCart4.png"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhatDoWeExist;
