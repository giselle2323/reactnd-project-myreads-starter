import React from 'react'

const Book = (props) => {
  const { book, booksShelfChange } = props;
 

  const handleShelfChange = (e) => {
    let newValue = e.target.value;
    booksShelfChange(book, newValue);
  };
 
  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ width:'auto', height: 193, backgroundSize: 'cover', backgroundRepeat: 'none', backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
        <div className="book-shelf-changer">
          <select value={book.shelf} onChange={handleShelfChange}>
            <option value="anything" disabled>Move to...</option>{/*changed the value from "none" to "anything" here to avoid the interception*/}
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      {/*<div className="book-authors">{book.authors && book.authors[0]</div>*/} {/*works! in case book.authors is undefined which I found one case*/}
      <div className="book-authors">{book.authors ? book.authors.join(', '): ''}</div> {/*Better way, also shows all authors, instead of just showing the 1st author*/}
    </div>
  )
}

export default Book