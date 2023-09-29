import React, { useState } from 'react';
import axios from 'axios';

const AddBook = () => {
  const [bookData, setBookData] = useState({
    title: '',
    author: '',
    description: '',
    imageUrl: '', // Add an imageUrl property to store the image URL
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/createbook', bookData);
      alert('Book added successfully');
      // Reset the form after successful submission
      setBookData({
        title: '',
        author: '',
        description: '',
        imageUrl: '',
      });
    } catch (error) {
      console.error(error);
      alert('An error occurred while adding the book');
    }
  };

  return (
    <div style={{ marginLeft: 200, marginTop: 200, background: 'white', width: '50%' }}>
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={bookData.title}
            onChange={(e) => setBookData({ ...bookData, title: e.target.value })}
            required
          />
        </div>
        <div>
          <label>Author:</label>
          <input
            type="text"
            value={bookData.author}
            onChange={(e) => setBookData({ ...bookData, author: e.target.value })}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={bookData.description}
            onChange={(e) => setBookData({ ...bookData, description: e.target.value })}
            required
          />
        </div>
        <div>
          <label>Image URL:</label>
          <input
            type="text"
            value={bookData.imageUrl}
            onChange={(e) => setBookData({ ...bookData, imageUrl: e.target.value })}
            required
          />
        </div>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
