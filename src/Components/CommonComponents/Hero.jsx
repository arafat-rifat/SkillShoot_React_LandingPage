import Container from "../CommonLayout/Container";
import Button from "./Button";

const Hero = () => {
  return (
    <section>
      <Container>
        {/* Main Hero Div */}
        <div className="flex-none laptop:flex justify-between px-8 desktop:px-0 pt-[55px]">
          {/* Left */}
          <div className="flex flex-col items-center laptop:items-start">
            {/* Heading */}
            <div className="flex justify-center laptop:justify-start">
              <h1 className="max-w-[340px] laptop:max-w-[630px] font-poppins font-semibold text-[28px] laptop:text-[60px] leading-[42px] laptop:leading-[90px] text-[#FFFFFF] text-center laptop:text-start">
                There is always something new for us to learn
              </h1>
            </div>
            {/* Paragraph */}
            <div className="pt-[10px]">
              <p className="max-w-[340px] laptop:max-w-[527px] text-xs laptop:text-[18px] font-poppins leading-[35px] font-normal text-[#FFFFFF99] text-center laptop:text-start">
                we have created more than 100+ materials on various things that
                will help your career, with mentors who are experienced in their
                fields.
              </p>
            </div>
            {/* button */}
            <div className="flex flex-col laptop:flex-row items-center pt-8 gap-[20px]">
              <Button className="flex gap-[15px] px-[25px] py-[12px] text-[20px] font-bold font-poppins text-[#FFFFFF] bg-[#CB8461] rounded">
                Start Journey <img src="/src/assets/IconHeroButton.png" />
              </Button>
              <div className="flex pb-[56px] laptop:pb-0">
                {/* Social Midea Links */}
                {/* Insta */}
                <div>
                  <img src="/src/assets/insta.png" />
                </div>
                {/* twitter */}
                <div>
                  <img src="/src/assets/twitter.png" />
                </div>
                {/* Discord */}
                <div>
                  <img src="/src/assets/Discord.png" />
                </div>
              </div>
            </div>
          </div>
          {/* Right */}
          <div className="hidden laptop:block">
            <img src="/src/assets/imageHero.png" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
