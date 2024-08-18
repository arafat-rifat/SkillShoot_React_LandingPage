import Container from "../CommonLayout/Container";
import Item from "./Item";
import ListItem from "./ListItem";

const Footer = () => {
  return (
    <section className="bg-[#286054]">
      <Container>
        <footer className="flex justify-between items-center pb-[40px]  px-8 desktop:px-0">
          {/* Logo */}
          <div>
            <img src="/src/assets/Logo.png" alt="logo" />
          </div>
          {/* Navigation Item */}
          <div className="hidden laptop:block">
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
