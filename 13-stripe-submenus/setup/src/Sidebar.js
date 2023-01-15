import React from "react";
import { FaTimes } from "react-icons/fa";
import sublinks from "./data";
import { useGlobalContext } from "./context";

const Sidebar = () => {
  const { closeSidebar, isSidebarOpen } = useGlobalContext();
  return (
    <aside
      className={`${
        isSidebarOpen ? "sidebar-wrapper show" : "sidebar-wrapper"
      }`}
    >
      <div className="sidebar">
        <button className="close-btn" onClick={closeSidebar}>
          {" "}
          <FaTimes />
        </button>
        <div className="sidebar-links">
          {sublinks.map((link, index) => {
            const { links, page } = link;
            return (
              <article key={index}>
                <h4>{page}</h4>

                <div className="sidebar-sublinks">
                  {links.map((item, index) => {
                    const { label, icon, url } = item;
                    return (
                      <article key={index}>
                        <a href={url}>
                          {icon}
                          {label}
                        </a>
                      </article>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
