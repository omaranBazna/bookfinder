import React from "react";

const Book = ({ title, author, imgURL, details }) => {
  return (
    <div className="book">
      <div className="book-body">
        <img className="book-cover" src={imgURL} />
        <div className="book-details">
          title: <h1>{title}</h1>
          author: <h3>{author}</h3>
          details: <p>{details}</p>
        </div>
      </div>
      <button className="book-btn">Details</button>
    </div>
  );
};

export default Book;
