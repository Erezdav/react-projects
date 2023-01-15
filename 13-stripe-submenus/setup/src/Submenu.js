import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "./context";

const Submenu = () => {
  const {
    isSubmenuOpen,
    location,
    page: { page, links },
  } = useGlobalContext();
  const container = useRef(null);
  const [columns, setColumns] = useState("col-2");
  useEffect(() => {
    const submenu = container.current;
    setColumns("col-2");
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
    if (links.length === 3) {
      setColumns("col-3");
    }
    if (links.length > 3) {
      setColumns("col-4");
    }
  }, [page, location, links]);
  return (
    <aside
      className={`${isSubmenuOpen ? "submenu show" : "submenu"}`}
      ref={container}
    >
      <h4>{page}</h4>
      <div className={`${columns}`}>
        {links.map((link, index) => {
          const { label, icon, url } = link;
          return (
            <a style={{ marginLeft: "3rem", marginRight: ".4rem" }} href={url}>
              {icon}
              {label}{" "}
            </a>
          );
        })}
      </div>
    </aside>
  );
};

export default Submenu;
