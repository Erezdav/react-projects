import React, { useState, useEffect } from "react";
import data from "./data";
import Article from "./Article";

const getStorageMode = () => {
  let mode = "mode";
  if (localStorage.getItem("mode")) {
    mode = localStorage.getItem("mode");
  }
  return mode;
};
function App() {
  const [mode, setMode] = useState(getStorageMode());
  useEffect(() => {
    document.documentElement.className = mode;
    console.log(mode);
    localStorage.setItem("mode", mode);
  }, [mode]);

  const handleToggle = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };
  return (
    <main>
      {" "}
      <h2>dark mode</h2>
      <nav>
        {" "}
        <div className="nav-center">
          <button className="btn" onClick={handleToggle}>
            toggle
          </button>
        </div>
      </nav>
      <section className="articles">
        {data.map((post) => {
          console.log({ "post:": post, "data:": data });
          return <Article key={post.id} {...post} />;
        })}
      </section>
    </main>
  );
}

export default App;
