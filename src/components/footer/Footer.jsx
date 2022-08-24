import React, { useState, useEffect } from "react";
import nav from "../../data/data";
import { NavLink, useLocation } from "react-router-dom";

import "./footer.scss";

const navForFooter = nav.slice(0, 4);

function Footer() {
  const [selectedNavbarLink, setSelectedNavbarLink] = useState(
    navForFooter[0].id
  );

  //   const [contact, setContact] = useState("/contactus");

  const contact = "/contactus";

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === contact) {
      setSelectedNavbarLink(-1);
    }
  }, [location.pathname]);

  const applyActiveClass = (id) => {
    setSelectedNavbarLink(id);
  };
  const renderedNavbarLinks = () => {
    return navForFooter.map((link) => {
      return (
        <li
          className={`link ${
            link.id === selectedNavbarLink ? "active-link" : null
          }`}
          key={link.id}
          onClick={() => applyActiveClass(link.id)}
        >
          <NavLink to={link.path}>
            <span className={link.id === selectedNavbarLink ? "opacity" : ""}>
              {link.name}
            </span>
          </NavLink>
        </li>
      );
    });
  };

  return (
    <footer className="footer">
      <div className="footer-nav">
        <div className="logo">
          <h1>logo</h1>
          <p>
            molestie qui dolor feugait enim suscipit consequat. hendrerit
            accumsan et ut duis nibh autem aliquip dolor vel sed tation delenit
            wisi et nulla{" "}
          </p>
        </div>
        <ul>{renderedNavbarLinks()}</ul>
        <div className="contact">
          <div
            className={`link ${contact === location.pathname ? "opacity" : ""}`}
          >
            <NavLink to="/contactus">Контакты</NavLink>
          </div>

          <span>Yurdy,Saher ady, koce ady, jay,otag</span>
          <span>+993(60)-00-00-00</span>
          <span>ady.karhana@gmail.com</span>
        </div>
      </div>

      <div className="trademark">
        © 2022 Нишевая дропшиппинг. Все права защищены.
      </div>
    </footer>
  );
}

export default Footer;
