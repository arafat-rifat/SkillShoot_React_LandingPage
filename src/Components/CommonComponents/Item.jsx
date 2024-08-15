import React from "react";

const Item = ({ itemName }) => {
  return (
    <a href="#">
      <li className="font-poppins font-normal text-[18px] text-[#FFFFFF]">
        {itemName}
      </li>
    </a>
  );
};

export default Item;
