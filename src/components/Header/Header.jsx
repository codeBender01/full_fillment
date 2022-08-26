import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import nav from "../../data/data";
import "./header.scss";

const contactBtn = "Свяжитесь с нами";

function Header() {
  const [selectedNavbarLink, setSelectedNavbarLink] = useState(nav[0].id);

  useEffect(() => {}, []);

  const classListToggler = () => {
    const header = document.body.querySelector(".header");
    const burger = document.body.querySelector(".burger-menu");
    const nav = document.body.querySelector(".header-links");

    console.log(header);
    console.log(nav);
    console.log(burger);
    header.classList.toggle("active");
    burger.classList.toggle("active");
    nav.classList.toggle("active");
  };

  const applyActiveClass = (id) => {
    const header = document.body.querySelector(".header");
    const burger = document.body.querySelector(".burger-menu");
    const nav = document.body.querySelector(".header-links");
    setSelectedNavbarLink(id);
    header.classList.toggle("active");
    burger.classList.toggle("active");
    nav.classList.toggle("active");
  };

  const renderedNavbarLinks = () => {
    return nav.map((link) => {
      return (
        <li key={link.id} onClick={() => applyActiveClass(link.id)}>
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
    <header className="header">
      <div className="container">
        <div className="logo">Logo</div>
        <ul className="header-links">{renderedNavbarLinks()}</ul>
        <button>{contactBtn}</button>
        <div className="burger-menu" onClick={() => classListToggler()}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    </header>
  );
}

export default Header;
