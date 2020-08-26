import React from "react";

const NavBarItem = ({ title, linkTo, icon }) => {
  return (
    <li>
      <a href={linkTo} alt={title}>
        {icon ? <p>Icon</p> : <p>{title}</p>}
      </a>
    </li>
  );
};

export default NavBarItem;
