import { Link } from "react-scroll";

const Item = ({ itemName, href = "" }) => {
  return (
    <li className="font-poppins font-normal text-[18px] text-[#FFFFFF] cursor-pointer">
      <Link to={href} smooth={true} duration={700}>
        {itemName}
      </Link>
    </li>
  );
};

export default Item;
