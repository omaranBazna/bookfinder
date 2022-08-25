import React from "react";
import { books } from "../utilis/book-list";
import Book from "./Book";
const BookList = ({ searched }) => {
  return (
    <div>
      {books.map((book) => {
        <Book key={book.id} />;
      })}
    </div>
  );
};

export default BookList;
