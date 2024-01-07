import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Post() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true); // Add a loading state
  const [error, setError] = useState(''); // Add an error state
  const { id } = useParams();

  useEffect(() => {
    setLoading(true); // Begin loading state
    axios.get(`http://localhost:8000/api/posts/${id}/`) // Fetch post
      .then(response => {
        setPost(response.data); // Assuming the data is the post object
        setLoading(false); // End loading state
      })
      .catch(error => {
        console.error('There was an error fetching the post', error);
        setError('Failed to load post. Please try again later.');
        setLoading(false); // End loading state
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Now that we have the post and are not loading, we can return the post details
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}

export default Post;