import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import nav from "../../data/data";
import "./header.scss";

const contactBtn = "Свяжитесь с нами";

function Header() {
  const [selectedNavbarLink, setSelectedNavbarLink] = useState(nav[0].id);

  const applyActiveClass = (id) => {
    setSelectedNavbarLink(id);
  };

  const renderedNavbarLinks = () => {
    return nav.map((link) => {
      return (
        <li
          className={`nav-link ${
            link.id === selectedNavbarLink ? "active-link" : null
          }`}
          key={link.id}
          onClick={() => applyActiveClass(link.id)}
        >
          <NavLink to={link.path}>
            <span
              className={link.id === selectedNavbarLink ? "color-yellow" : ""}
            >
              {link.name}
            </span>
          </NavLink>
        </li>
      );
    });
  };

  return (
    <div className="header">
      <div className="logo">Logo</div>
      <ul>{renderedNavbarLinks()}</ul>
      <button>{contactBtn}</button>
    </div>
  );
}

export default Header;
