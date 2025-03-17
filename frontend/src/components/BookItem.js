import React from 'react';
import axios from 'axios';

const BookItem = ({ book }) => {
  const handleDelete = () => {
    axios.delete(`http://localhost:5000/api/books/${book._id}`)
      .then(() => {
        alert("Book deleted successfully!");
        window.location.reload();
      })
      .catch(err => {
        console.error(err);
      });
  };

  return (
    <div className="book-item">
      <h3>{book.title}</h3>
      <p>Author: {book.author}</p>
      <p>Price: ${book.price}</p>
      <p>{book.description}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default BookItem;