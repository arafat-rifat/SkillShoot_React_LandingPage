import Container from "../CommonLayout/Container";

const TrustedSection = () => {
  return (
    <section className="bg-[#FFFFFF]" id="course">
      <Container>
        {/*Main div  */}
        <div className="flex flex-col gap-[10px] items-center pt-[100px] pb-[50px]">
          {/* Heading */}
          <h1 className="text-[#2C2C2C] font-semibold font-poppins text-[36px]">
            Trusted more than <span className="text-[#CB8461]">100+</span> in
            the world
          </h1>

          <p className="text-[#808080] text-base leading-[35px] font-poppins font-normal max-w-[545px] text-center">
            they have asked us more than 3 times to teach their employees about
            various things. to improve their skills
          </p>
        </div>
      </Container>
    </section>
  );
};

export default TrustedSection;
