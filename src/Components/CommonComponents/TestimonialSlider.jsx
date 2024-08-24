import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import TestimonialCart from "./TestimonialCart";
import Container from "../CommonLayout/Container";
import { useRef } from "react";
import Button from "./Button";

const TestimonialSlider = () => {
  // Create a reference to the Splide instance
  const splideRef = useRef(null);

  // Function to go to the previous slide
  const handlePrev = () => {
    splideRef.current.splide.go("<");
  };

  // Function to go to the next slide
  const handleNext = () => {
    splideRef.current.splide.go(">");
  };

  return (
    <Container>
      <Splide
        options={{
          rewind: true,
          focus: "center",
          pagination: false,
          perPage: 3,
          type: "loop",
          breakpoints: {
            1024: { perPage: 3 }, // Large screens
            768: { perPage: 2 }, // Medium screens
            640: { perPage: 1 }, // Small screens
          },
          arrows: false,
        }}
      >
        <SplideSlide>
          <div className="flex justify-center items-center">
            <TestimonialCart
              profile="/src/assets/testimoni1.png"
              name="Nany Brugman"
            />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="flex justify-center items-center">
            <TestimonialCart
              profile="/src/assets/testimoni2.png"
              name="Alexa Nowan"
            />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="flex justify-center items-center">
            <TestimonialCart
              profile="/src/assets/testimoni3.png"
              name="Jason Bay"
            />
          </div>
        </SplideSlide>
      </Splide>

      {/* Slider Button */}
      <div className="flex gap-[20px] justify-center items-center pt-[50px]">
        <Button
          onClick={handlePrev}
          className="px-[17px] py-[17px] bg-[#FFFFFF] shadow-lg rounded-full"
        >
          <img src="/src/assets/left.png" />
        </Button>
        <Button
          onClick={handleNext}
          className="px-[17px] py-[17px] bg-[#CB8461] shadow-lg rounded-full"
        >
          <img src="/src/assets/right.png" />
        </Button>
      </div>
    </Container>
  );
};

export default TestimonialSlider;
