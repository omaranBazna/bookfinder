import React from "react";

const Book = ({ title, author, imgURL, details }) => {
  return (
    <div className="book">
      <div className="book-body">
        <img className="book-cover" src={imgURL} />
        <div className="book-details">
          <h1>{title}</h1>
          <h3>{author}</h3>
          <p>{details}</p>
        </div>
      </div>
      <button className="book-btn">Details</button>
    </div>
  );
};

export default Book;
