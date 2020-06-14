import React from "react";

const Book = (props) => {
  const { book, booksShelfChange } = props;

  const handleShelfChange = (e) => {
    let newValue = e.target.value;
    booksShelfChange(book, newValue);
  };

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
            backgroundImage: `url(${book.imageLinks.thumbnail})`,
          }}
        />
        <div className="book-shelf-changer">
          <select value={book.shelf} onChange={handleShelfChange}>
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

export default Book;
