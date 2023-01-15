import React from "react";
import moment from "moment";
// import articles from "./data";

const Article = ({ id, title, date, length, snippet }) => {
  return (
    //
    <article className="post">
      <h3>{title}</h3>
      <div className="post-info">
        <span>
          {moment(date).format("MMMM Do YYYY")}(
          {moment(date, "YYYYMMDD").fromNow()})
        </span>
        <span>- {length} min. read</span>
      </div>
      <p>{snippet}</p>
    </article>
    //
  );
};

export default Article;
