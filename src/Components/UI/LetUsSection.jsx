import React from "react";
import Container from "../CommonLayout/Container";

const LetUsSection = () => {
  return (
    <section>
      <Container>
        {/* Main Div */}
        <div className="grid grid-cols-2 gap-[150px]">
          {/* Left Img */}
          <div>
            <img src="/src/assets/Letus.png" />
          </div>
          {/* Right Description */}
          <div className="flex flex-col gap-[36px]">
            {/* Heading */}
            <div>
              <h1 className="text-[#2C2C2C] text-[48px] font-poppins font-bold">
                Let us <span className="text-[#245D51]">Skill Shoot</span>
              </h1>
              <p className="text-[#808080] text-base font-poppins font-normal max-w-[522px] leading-9 pt-[37px] pb-[25px]">
                We are a company engaged in education with the aim of improving
                the skills of many people and so that younger people can reach
                the career paths they want.
              </p>
              <p className="text-[#808080] text-base font-poppins font-normal max-w-[522px] leading-9">
                we have been around since 2019 with currently 100+ updated
                materials and 15K members who have joined.
              </p>
            </div>
            {/* Monitoring Section */}
            <div className="grid grid-cols-2 gap-y-[30px] gap-x-[100px]">
              {/* Peoples */}
              <div className="flex items-center gap-4">
                {/* img */}
                <div>
                  <img src="/src/assets/peoples.png" />
                </div>
                <p className="text-[#2C2C2C] text-base font-poppins font-semibold">
                  15K People Join
                </p>
              </div>
              {/* Trusted Monitor*/}
              <div className="flex items-center gap-4">
                {/* img */}
                <div>
                  <img src="/src/assets/peoples.png" />
                </div>
                <p className="text-[#2C2C2C] text-base font-poppins font-semibold">
                  15K People Join
                </p>
              </div>
              {/* Free Videos*/}
              <div className="flex items-center gap-4">
                {/* img */}
                <div>
                  <img src="/src/assets/peoples.png" />
                </div>
                <p className="text-[#2C2C2C] text-base font-poppins font-semibold">
                  15K People Join
                </p>
              </div>
              {/* Premium Videos */}
              <div className="flex items-center gap-4">
                {/* img */}
                <div>
                  <img src="/src/assets/peoples.png" />
                </div>
                <p className="text-[#2C2C2C] text-base font-poppins font-semibold">
                  15K People Join
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default LetUsSection;
