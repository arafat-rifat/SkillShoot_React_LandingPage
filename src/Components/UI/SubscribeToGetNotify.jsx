import Button from "../CommonComponents/Button";
import Container from "../CommonLayout/Container";

const SubscribeToGetNotify = () => {
  return (
    <section className="bg-[#286054]">
      <Container>
        {/* Main Div */}
        <div className="flex flex-col gap-14 justify-center py-[100px]">
          {/*Heading and description  */}
          <div className="flex flex-col items-center">
            <h1 className="text-[#FFFFFF] text-[36px] leading-9 font-poppins font-normal">
              Subscribe to get notified about update
            </h1>
            <p className="text-[#FFFFFF] text-base font-normal leading-9">
              By subscribing with your mail, you will accept our privacy policy
            </p>
          </div>
          {/* Input Section */}
          <div className="flex justify-center items-center gap-[15px]">
            <input
              type="email"
              placeholder="Enter your email"
              className="text-[#FFFFFF] bg-[#307264] text-base font-normal rounded-md py-[5px] pl-[30px] pr-[200px] leading-[50px] outline-none"
            />
            <Button className="rounded px-[25px] py-[5px] leading-[50px] bg-[#CC8663] text-lg text-[#FFFFFF] font-medium">
              Subscribe us
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SubscribeToGetNotify;
