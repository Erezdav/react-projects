import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTwitter } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";

const Navbar = () => {
  const [showLink, setShowLinks] = useState(true);
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header"></div>
        <img src={logo} alt="logo" />
        <button className="nav-taggle" onClick={() => setShowLinks(!showLink)}>
          <FaBars />
        </button>
      </div>

      <div
        className={`${
          showLink ? "links-container show-container" : "links-container"
        }`}
      >
        <ul className="links">
          {links.map((item) => {
            const { text, url, id } = item;
            return (
              <li key={id}>
                <a href={url}>{text}</a>
              </li>
            );
          })}
        </ul>
      </div>

      <ul className="social-icons">
        {social.map((link) => {
          const { id, url, icon } = link;
          return (
            <il key={id}>
              <a href={url}>{icon}</a>
            </il>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
