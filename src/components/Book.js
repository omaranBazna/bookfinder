import React from "react";

const Book = ({ title, author, imgURL, details }) => {
  return (
    <div>
      <img src={imgURL} />
      <div>
        <h1>{title}</h1>
        <h3>{author}</h3>
        <p>{author}</p>
      </div>
    </div>
  );
};

export default Book;
