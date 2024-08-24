import CourseCart from "../CommonComponents/CourseCart";
import SliderExample from "../CommonComponents/SliderExample";
import Container from "../CommonLayout/Container";
import CourseSlider from "./CourseSlider";

const PopularCourse = () => {
  return (
    <section className="bg-[#245D51]" id="course">
      <Container>
        {/* Main Div */}
        <div className="pt-[76px]">
          {/* Heading */}
          <div className="flex flex-col gap-[10px] items-center pb-[50px]">
            <h3 className="text-[#FFFFFF] text-lg laptop:text-[36px] font-poppins font-semibold">
              Popular courses of the week
            </h3>
            <p className="text-[#FFFFFF99] text-xs laptop:text-base font-poppins font-normal max-w-[311px] laptop:max-w-[350px] text-center leading-9">
              List of the most popular lists that are often studied by our
              members
            </p>
          </div>
          {/* Course Slider */}
          <div className="  pb-[75px] ">
            <SliderExample />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PopularCourse;
