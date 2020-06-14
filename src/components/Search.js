import React, { useState } from "react";
import * as BooksAPI from "../api/BooksAPI";
import Book from "./Book";

const SearchPage = (props) => {
  const [query, setQuery] = useState("");
  const [matchedBooks, setMatchedBooks] = useState([]);

  const { books, onBookShelfChange } = props;

  const handleInputChange = (e) => {
    let searchQuery = e.target.value;
    setQuery(searchQuery);
    searchBooks(searchQuery);
  };

  const handleShelfChange = (book, shelf) => {
    onBookShelfChange(book, shelf);
  };

  const searchBooks = (searchTerm) => {
    BooksAPI.search(searchTerm).then((matchedBooks) => {
      matchedBooks = matchedBooks || [];
      setMatchedBooks(matchedBooks);
    });
  };

  const isBookOnShelf = (currentBook) => {
    let currentBookOnShelf = books.find((book) => book.id === currentBook.id);
    return currentBookOnShelf;
  };

  return (
    <div className="search-container">
      <div>
        <input
          className="search-bar"
          type="text"
          placeholder="title, author"
          value={query}
          onChange={handleInputChange}
        />
      </div>
      <div className="search-results">
        {!matchedBooks.error &&
          matchedBooks.length > 0 &&
          matchedBooks.map((book) => (
            <Book
              key={book.id}
              book={isBookOnShelf(book) || book}
              booksShelfChange={handleShelfChange}
            />
          ))}
      </div>
    </div>
  );
};

export default SearchPage;
