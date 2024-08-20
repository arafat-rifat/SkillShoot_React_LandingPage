import React from "react";
import Container from "../CommonLayout/Container";
import Button from "../CommonComponents/Button";

const JoinNow = () => {
  return (
    <section>
      <Container>
        {/* Main Div */}
        <div className="rounded-[15px] bg-[#F2E7DB] mx-[44px] laptop:mx-0">
          <div className="flex flex-col laptop:flex-row gap-[20px] laptop:gap-0 justify-between items-center laptop:items-start px-[39px] laptop:px-[67px] py-[45px] laptop:py-[71px]">
            {/* Left */}
            <div>
              <h1 className="text-[#2C2C2C] text-lg laptop:text-[36px] font-poppins font-semibold leading-[27px] laptop:leading-[54px] max-w-[262px] laptop:max-w-[635px] text-center laptop:text-start">
                <span className="text-[#CB8461]">Improve</span> your skills, and
                reach your career as soon as possible
              </h1>
            </div>
            {/* Right */}
            <div>
              <div className="flex flex-col laptop:flex-row gap-[20px]">
                <Button className="py-[15px] px-[25px] rounded bg-[#CB8461] text-[#FFFFFF] text-[20px] font-poppins font-bold">
                  Join Now
                </Button>
                <Button className="text-[#FFFFFF] text-[20px] font-poppins font-bold rounded py-[15px] px-[25px] bg-[#245D51]">
                  Subscribe Course
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default JoinNow;
