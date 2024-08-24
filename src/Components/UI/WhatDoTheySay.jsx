import TestimonialSlider from "../CommonComponents/TestimonialSlider";
import Container from "../CommonLayout/Container";

const WhatDoTheySay = () => {
  return (
    <section className="bg-[#F8F8F8] overflow-hidden" id="testimonial">
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
          <div className="pt-[50px] ">
            {/* <TestimonialCart />
            <TestimonialCart />
            <TestimonialCart /> */}
            <TestimonialSlider />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhatDoTheySay;
