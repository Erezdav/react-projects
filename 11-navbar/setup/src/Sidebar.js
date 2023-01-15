import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTwitter } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";

const Sidebar = () => {
  return (
    <footer className="links">
      <h4>sidebar</h4>
      {links.map((link) => {
        const { text, url, id } = link;
        return (
          <ul>
            <li key={id}>
              <a href={url}>{text}</a>
            </li>
          </ul>
        );
      })}
      <footer className="social-icons">
        {social.map((link) => {
          const { id, url, icon } = link;
          return (
            <ul>
              <il key={id}>
                <a href={url}>{icon}</a>
              </il>
            </ul>
          );
        })}
      </footer>
    </footer>
  );
};

export default Sidebar;
