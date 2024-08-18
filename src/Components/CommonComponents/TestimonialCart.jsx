const TestimonialCart = () => {
  return (
    <div className="pt-[50px] px-[48px] pb-[16px] bg-[#FFFFFF] border-b-2 border-[#245D51]">
      <div className="flex flex-col items-center justify-center gap-[10px]">
        {/* img */}
        <div className="flex flex-col items-center gap-[16px]">
          <img src="/src/assets/testimoni1.png" alt="testimonial" />
          <div className="flex gap-[8px]">
            <img src="/src/assets/Star.png" alt="star" />
            <img src="/src/assets/Star.png" alt="star" />
            <img src="/src/assets/Star.png" alt="star" />
            <img src="/src/assets/Star.png" alt="star" />
            <img src="/src/assets/Star.png" alt="star" />
          </div>
        </div>
        {/* Heading and description */}
        <div>
          <h1 className="text-[#2C2C2C] text-2xl font-poppins font-normal text-center">
            Jason Bay
          </h1>
          <p className="text-[#808080] text-base leading-9 text-center font-poppins font-normal max-w-[318px]">
            I am quite satisfied, because the skills I want or dream of can
            really be mastered
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCart;
