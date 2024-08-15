import Container from "../CommonLayout/Container";
import Button from "../CommonComponents/Button";

const DiscountBanner = () => {
  return (
    <section className="bg-[#FFFFFF]">
      <Container>
        <div className="px-8 desktop:px-0">
          {/* Main div */}
          <div className="relative rounded-[10px] bg-[#F2E7DB] mt-[133px] mb-[100px]">
            {/* left */}
            <div className="flex flex-col gap-[30px] py-[52px] pl-[60px]">
              <img
                className="absolute  left-0 top-0"
                src="/src/assets/corner-1.png
              "
              />
              {/* heading */}
              <div>
                <h1 className="text-[#2C2C2C] text-[36px] font-poppins font-semibold leading-[54px] max-w-[586px]">
                  Happy <span className="text-[#CB8461]">Chinese New Year</span>
                  , 20% discount for you today
                </h1>
              </div>
              {/* Subscribe Button */}
              <div>
                <Button className="px-[25px] py-[15px] rounded bg-[#245D51] text-[#FFFFFF] text-xl font-poppins font-bold">
                  Subscribe Course
                </Button>
              </div>
            </div>
            {/* Right */}
            <div>
              <img
                className="absolute  right-[143px] top-[-134px]"
                src="/src/assets/DiscountBanner.png"
              />
              <img
                className="absolute  right-0 bottom-0"
                src="/src/assets/corner-2.png"
              />

              <img
                className="absolute  right-[8%] bottom-[10%]"
                src="/src/assets/discount1.png"
              />

              <img
                className="absolute  right-[25%] top-[25%]"
                src="/src/assets/discount2.png"
              />

              <img
                className="absolute  right-[70px] top-[25%]"
                src="/src/assets/discount3.png"
              />

              <img
                className="absolute  right-[25%] bottom-[20%]"
                src="/src/assets/discount-round.png"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default DiscountBanner;
