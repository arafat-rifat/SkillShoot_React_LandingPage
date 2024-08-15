import React from "react";
import Container from "../CommonLayout/Container";

const PymentSection = () => {
  return (
    <section className="bg-[#FFFFFF]">
      <Container>
        {/* Main Div */}
        <div className=" flex gap-[90px] justify-center items-center pb-[55px]">
          {/*uber*/}
          <div>
            <img src="/src/assets/uber.png" />
          </div>

          {/*Google*/}
          <div>
            <img src="/src/assets/google.png" />
          </div>

          {/*Paypal*/}
          <div>
            <img src="/src/assets/paypal.png" />
          </div>

          {/*Microsoft*/}
          <div>
            <img src="/src/assets/microsoft.png" />
          </div>

          {/*dribble*/}
          <div>
            <img src="/src/assets/dribble.png" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PymentSection;
