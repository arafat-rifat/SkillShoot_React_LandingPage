import Container from "../CommonLayout/Container";
import Item from "./Item";
import ListItem from "./ListItem";

const Footer = () => {
  return (
    <section className="bg-[#286054]">
      <Container>
        <footer className="flex flex-col laptop:flex-row justify-between gap-7 laptop:gap-0 items-center pb-[40px]  px-8 desktop:px-0">
          {/* Logo */}
          <div className="order-2 laptop:order-1">
            <img src="/src/assets/Logo.png" alt="logo" />
          </div>
          {/* Navigation Item */}
          <div className="order-1 laptop:order-2">
            <ListItem>
              <Item itemName="Home" />
              <Item itemName="Course" href="course" />
              <Item itemName="Subscribe" />
              <Item itemName="About" />
              <Item itemName="Testimoni" />
            </ListItem>
          </div>
        </footer>
      </Container>
    </section>
  );
};

export default Footer;
