import React from "react";
import PropTypes from 'prop-types'


const Book = (props) => {
  const { book, booksShelfChange } = props;
  
  const handleShelfChange = (e) => {
    let newValue = e.target.value;
    booksShelfChange(book, newValue);
  };

  if (!book.shelf) {
    book.shelf = "none";
  } 

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: "auto",
            height: 193,
            backgroundSize: "cover",
            backgroundRepeat: "none",
            backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail : "https://via.placeholder.com/150"})`,
          }}
        />
        <div className="book-shelf-changer">
          <select defaultValue={book.shelf} onChange={handleShelfChange} >
            <option value="anything" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">
        {book.authors ? book.authors.join(", ") : ""}
      </div>{" "}
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  booksShelfChange: PropTypes.func.isRequired
};

export default Book;
