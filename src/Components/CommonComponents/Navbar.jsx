import Container from "./../CommonLayout/Container";
import Button from "./Button";
import Item from "./Item";
import ListItem from "./ListItem";

const Navbar = () => {
  return (
    <section>
      <Container>
        <nav className="flex justify-between items-center pt-[23px]  px-8 desktop:px-0">
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

          {/* Login and Registration Button */}
          <div className="hidden laptop:block">
            <div className="flex gap-[20px] ">
              <Button className="text-lg font-normal font-poppins text-[#FFFFFF]">
                Login
              </Button>
              <Button className="rounded-lg px-[44px] py-[7px] bg-[#CB8461] text-lg font-normal font-poppins text-[#FFFFFF]">
                Register
              </Button>
            </div>
          </div>
          {/* Mobile Menu */}

          <div className="block laptop:hidden">
            <img src="/src/assets/MobileMenu.png" alt="MobileMenu" />
          </div>
        </nav>
      </Container>
    </section>
  );
};

export default Navbar;
