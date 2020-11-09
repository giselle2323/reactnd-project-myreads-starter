import React from "react";
import PropTypes from 'prop-types';
import Shelf from "./Shelf";

const CatergoryList = (props) => {
  
  const { books, onBookShelfChange } = props;

  const filterBookLists = (category) => {
    return books.filter((book) => book.shelf === category);
  };

  const handleBookShelfChange = (book, shelf) => {
    onBookShelfChange(book, shelf);
  };

  return (
    <div className="book-main-container">
      <>
        <Shelf
          title="Currently Reading"
          books={filterBookLists("currentlyReading")}
          onBookShelfChange={handleBookShelfChange}
        />

        <Shelf
          title="Want To Read"
          books={filterBookLists("wantToRead")}
          onBookShelfChange={handleBookShelfChange}
        />

        <Shelf
          title="Read"
          books={filterBookLists("read")}
          onBookShelfChange={handleBookShelfChange}
        />
      </>
    </div>
  );
};

CatergoryList.propTypes = {
  books: PropTypes.array.isRequired,
  onBookShelfChange: PropTypes.func.isRequired
};

export default CatergoryList;
