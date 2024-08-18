import React from "react";
import Container from "../CommonLayout/Container";
import Button from "../CommonComponents/Button";

const JoinNow = () => {
  return (
    <section>
      <Container>
        {/* Main Div */}
        <div className="rounded-[15px] bg-[#F2E7DB]">
          <div className="flex justify-between px-[67px] py-[71px]">
            {/* Left */}
            <div>
              <h1 className="text-[#2C2C2C] text-[36px] font-poppins font-semibold leading-[54px] max-w-[635px]">
                <span className="text-[#CB8461]">Improve</span> your skills, and
                reach your career as soon as possible
              </h1>
            </div>
            {/* Right */}
            <div>
              <div className="flex gap-[20px]">
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
