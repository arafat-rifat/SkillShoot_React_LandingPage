import Container from "../Container";
import Button from "./Button";
import Item from "./Item";
import ListItem from "./ListItem";

const Navbar = () => {
  return (
    <Container>
      <nav className="flex justify-between bg-[#245D51]">
        {/* Logo */}
        <div>
          <img src="/src/assets/Logo.png" alt="logo" />
        </div>
        {/* Navigation Item */}
        <div>
          <ListItem>
            <Item itemName="Home" />
            <Item itemName="Course" />
            <Item itemName="Subscribe" />
            <Item itemName="About" />
            <Item itemName="Testimoni" />
          </ListItem>
        </div>

        {/* Login and Registration Button */}
        <div className="flex gap-[20px]">
          <Button>Login</Button>
          <Button className="rounded-lg px-[44px] py-[7px] bg-[#CB8461]">
            Register
          </Button>
        </div>
      </nav>
    </Container>
  );
};

export default Navbar;
