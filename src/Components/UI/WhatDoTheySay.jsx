import Button from "../CommonComponents/Button";
import TestimonialCart from "../CommonComponents/TestimonialCart";
import Container from "../CommonLayout/Container";

const WhatDoTheySay = () => {
  return (
    <section className="bg-[#F8F8F8]">
      <Container>
        {/* Main Div */}
        <div className="py-[50px] laptop:py-[87px] flex flex-col items-center">
          {/* Heading */}
          <div className="flex flex-col items-center">
            <h1 className="text-[#2C2C2C] text-lg laptop:text-[36px] font-poppins font-semibold leading-[54px]">
              What do they <span className="text-[#CC8663]">say?</span>
            </h1>
            <p className="text-[#808080] text-xs laptop:text-base font-poppins font-normal leading-7 laptop:leading-9">
              This is an honest review from members who have joined us
            </p>
          </div>

          {/* Testimonial Div */}
          <div className="pt-[50px] flex flex-col laptop:flex-row justify-center items-center gap-[20px]">
            <TestimonialCart />
            <TestimonialCart />
            <TestimonialCart />
          </div>
          {/* Slider Button */}
          <div className="flex gap-[20px] items-center pt-[50px]">
            <Button className="px-[17px] py-[17px] bg-[#FFFFFF] shadow-lg rounded-full">
              <img src="/src/assets/left.png" />
            </Button>
            <Button className="px-[17px] py-[17px] bg-[#CB8461] shadow-lg rounded-full">
              <img src="/src/assets/right.png" />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhatDoTheySay;
