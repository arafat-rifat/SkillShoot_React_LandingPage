import Container from "../CommonLayout/Container";

const Hero = () => {
  return (
    <section>
      <Container>
        {/* Main Hero Div */}
        <div className="flex justify-between">
          {/* Left */}
          <div>There is always something new for us to learn</div>
          {/* Right */}
          <div>
            <h1>Image</h1>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
