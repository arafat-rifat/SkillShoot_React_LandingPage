import Container from "../CommonLayout/Container";
import Button from "./Button";

const Hero = () => {
  return (
    <section>
      <Container>
        {/* Main Hero Div */}
        <div className="flex justify-between px-8 desktop:px-0 pt-[55px]">
          {/* Left */}
          <div>
            {/* Heading */}
            <div>
              <h1 className="max-w-[630px] font-poppins font-semibold text-[60px] leading-[90px] text-[#FFFFFF]">
                There is always something new for us to learn
              </h1>
            </div>
            {/* Paragraph */}
            <div className="pt-[10px]">
              <p className="max-w-[527px] text-[18px] font-poppins leading-[35px] font-normal text-[#FFFFFF99]">
                we have created more than 100+ materials on various things that
                will help your career, with mentors who are experienced in their
                fields.
              </p>
            </div>
            {/* button */}
            <div className="flex items-center pt-8 gap-[20px]">
              <Button className="flex gap-[15px] px-[25px] py-[12px] text-[20px] font-bold font-poppins text-[#FFFFFF] bg-[#CB8461] rounded">
                Start Journey <img src="/src/assets/IconHeroButton.png" />
              </Button>
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
          {/* Right */}
          <div>
            <img src="/src/assets/imageHero.png" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
