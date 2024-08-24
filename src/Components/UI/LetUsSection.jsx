import Container from "../CommonLayout/Container";

const LetUsSection = () => {
  return (
    <section id="about">
      <Container>
        {/* Main Div */}
        <div className="grid grid-cols-1 laptop:grid-cols-2 gap-0 laptop:gap-[150px] py-[50px] laptop:py-[100px] pb-[50px] laptop:pb-[100px]">
          {/* Left Img */}
          <div className="hidden laptop:block">
            <img src="/src/assets/Letus.png" />
          </div>
          {/* Right Description */}
          <div className="flex flex-col gap-[36px] px-8 laptop:px-0">
            {/* Heading */}
            <div>
              <h1 className="text-[#2C2C2C] text-[20px] laptop:text-[48px] font-poppins font-bold">
                Let us <span className="text-[#245D51]">Skill Shoot</span>
              </h1>
              <p className="text-[#808080] text-xs laptop:text-base font-poppins font-normal max-w-[339px] laptop:max-w-[522px] leading-7 laptop:leading-9 pt-[20px] laptop:pt-[37px] pb-[25px]">
                We are a company engaged in education with the aim of improving
                the skills of many people and so that younger people can reach
                the career paths they want.
              </p>
              <p className="text-[#808080] text-xs laptop:text-base font-poppins font-normal max-w-[339px] laptop:max-w-[522px] leading-7 laptop:leading-9">
                we have been around since 2019 with currently 100+ updated
                materials and 15K members who have joined.
              </p>
            </div>
            {/* Monitoring Section */}
            <div className="grid grid-cols-2 gap-y-[30px] gap-x-[40px] laptop:gap-x-[100px]">
              {/* Peoples */}
              <div className="flex items-center gap-4">
                {/* img */}
                <div>
                  <img src="/src/assets/peoples.png" />
                </div>
                <p className="text-[#2C2C2C] text-xs laptop:text-base font-poppins font-semibold">
                  15K People Join
                </p>
              </div>
              {/* Trusted Monitor*/}
              <div className="flex items-center gap-4">
                {/* img */}
                <div>
                  <img src="/src/assets/peoples.png" />
                </div>
                <p className="text-[#2C2C2C] text-xs laptop:text-base font-poppins font-semibold">
                  15K People Join
                </p>
              </div>
              {/* Free Videos*/}
              <div className="flex items-center gap-4">
                {/* img */}
                <div>
                  <img src="/src/assets/peoples.png" />
                </div>
                <p className="text-[#2C2C2C] text-xs laptop:text-base font-poppins font-semibold">
                  15K People Join
                </p>
              </div>
              {/* Premium Videos */}
              <div className="flex items-center gap-4">
                {/* img */}
                <div>
                  <img src="/src/assets/peoples.png" />
                </div>
                <p className="text-[#2C2C2C] text-xs laptop:text-base font-poppins font-semibold">
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
