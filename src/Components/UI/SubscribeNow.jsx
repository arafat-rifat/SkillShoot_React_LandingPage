import SubscribeCart from "../CommonComponents/SubscribeCart";
import Container from "../CommonLayout/Container";

const SubscribeNow = () => {
  return (
    <section>
      <Container>
        {/* Main Div */}
        <div className="py-[100px] flex flex-col gap-[50px]">
          {/* Heading */}
          <div className="flex flex-col items-center gap-[10px]">
            <h1 className="text-[36px] text-[#2C2C2C] font-poppins font-semibold">
              <span className="text-[#CB8461]">Subscribe</span> with us now
            </h1>
            <p className="text-[#808080] text-base leading-9 text-center font-poppins font-normal max-w-[545px]">
              by subscribing now you will be able to access the material easily
              and cheaply, so you will be very efficient and benefit
            </p>
          </div>
          {/* Subscribe Cart */}
          <div className="flex gap-[20px] items-center justify-center">
            <SubscribeCart />
            <SubscribeCart />
            <SubscribeCart />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SubscribeNow;
