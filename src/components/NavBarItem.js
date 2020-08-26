import React from 'react';

const NavBarItem = ({ title, linkTo, icon }) => {
  return (
    <li>
      <a href={linkTo} style={{ color: '#08d9d6' }}>
        {icon ? <img src={icon} alt={title}></img> : <p>{title}</p>}
      </a>
    </li>
  );
};

export default NavBarItem;
