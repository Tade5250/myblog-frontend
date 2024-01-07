import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreatePost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate(); // Hook to navigate to a different page

  const handleSubmit = (e) => {
    e.preventDefault();
    const postData = {
      title,
      content,
    };

    axios.post('http://localhost:8000/api/posts/', postData)
      .then(response => {
        // Handle the response from the server here
        console.log(response.data);
        navigate('/'); // Navigate to the home page after posting
      })
      .catch(error => {
        console.error('There was an error creating the post', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </label>
      <label>
        Content:
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </label>
      <button type="submit">Create Post</button>
    </form>
  );
}

export default CreatePost;
