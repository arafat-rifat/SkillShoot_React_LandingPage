import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import CourseCart from "./CourseCart";

const SliderExample = () => {
  return (
    <Splide
      options={{
        rewind: true,
        focus: "center",
        perPage: 3,
        type: "loop",
        breakpoints: {
          1024: { perPage: 3 }, // Large screens
          768: { perPage: 2 }, // Medium screens
          640: { perPage: 1 }, // Small screens
        },
        gap: "1rem",
        pagination: false,
      }}
    >
      <SplideSlide>
        <div className="flex justify-center items-center">
          <CourseCart
            title="Basics of learning team management"
            profile="/src/assets/coursep1.png"
            courseImg="/src/assets/course1.png"
            name="Jone Owel"
            designation="IT Manager"
          />
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="flex justify-center items-center">
          <CourseCart
            title="Learn basic database structure"
            profile="/src/assets/coursep2.png"
            courseImg="/src/assets/course2.png"
            name="Roynaldo Jr"
            designation="Data Science"
          />
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="flex justify-center items-center">
          <CourseCart
            title="Create dynamic website with basic php"
            profile="/src/assets/coursep3.png"
            courseImg="/src/assets/course3.png"
            name="Markus Low"
            designation="Programer"
          />
        </div>
      </SplideSlide>
    </Splide>
  );
};

export default SliderExample;
