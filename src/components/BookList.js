import React from "react";
import { books } from "../utilis/book-list";
import Book from "./Book";
const BookList = ({ searched }) => {
  return (
    <div className="book-list">
      {books.map((book) => {
        return (
          <Book
            key={book.id}
            title={book.title}
            author={book.author}
            imgURL={book.imgURL}
            details={book.Description}
          />
        );
      })}
    </div>
  );
};

export default BookList;
