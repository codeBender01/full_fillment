import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./header.scss";

const nav = [
  {
    id: 1,
    name: "Дом",
    path: "/",
  },
  {
    id: 2,
    name: "Услуги",
    path: "/services",
  },
  {
    id: 3,
    name: "О нас",
    path: "/about",
  },
  {
    id: 4,
    name: "Технологии",
    path: "/technologies",
  },
  {
    id: 5,
    name: "Контакты",
    path: "/contactus",
  },
];

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
