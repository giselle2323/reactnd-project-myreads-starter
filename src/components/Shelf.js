import React from "react";
import Book from "./Book";

const Shelf = (props) => {
  
  const { title, onBookShelfChange, books } = props;

  const handleBookShelfChange = (book, shelf) => {
    onBookShelfChange(book, shelf);
  };

  return (
    <div className="book-shelf">
      <h2 className="book-shelf-title">{title}</h2>
      <div className="book-grid">
        {books.map((book) => (
          <Book
            key={book.id}
            book={book}
            booksShelfChange={handleBookShelfChange}
          />
        ))}
      </div>
    </div>
  );
};

export default Shelf;
