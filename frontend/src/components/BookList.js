import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookItem from './BookItem';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/books')
      .then(response => {
        setBooks(response.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      <h2>Books List</h2>
      {books.length > 0 ? (
        books.map(book => <BookItem key={book._id} book={book} />)
      ) : (
        <p>No books available.</p>
      )}
    </div>
  );
};

export default BookList;