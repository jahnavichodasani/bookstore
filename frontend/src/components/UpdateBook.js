import React, { useState } from 'react';
import axios from 'axios';

const UpdateBook = ({ bookId, onClose }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedBook = {
      title,
      author,
      price: parseFloat(price),
      description
    };

    axios.put(`http://localhost:5000/api/books/${bookId}`, updatedBook)
      .then(response => {
        alert('Book updated successfully!');
        onClose();
      })
      .catch(err => {
        console.error(err);
      });
  };

  return (
    <div>
      <h2>Update Book</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button type="submit">Update Book</button>
      </form>
    </div>
  );
};

export default UpdateBook;