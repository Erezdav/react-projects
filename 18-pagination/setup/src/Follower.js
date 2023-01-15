import React from "react";

const Follower = ({ id, avatar_url: image, login: name, html_url: link }) => {
  return (
    <section className="card">
      <img src={image} alt={"name"} />
      <a href={link} className="btn">
        profile
      </a>
    </section>
  );
};

export default Follower;
