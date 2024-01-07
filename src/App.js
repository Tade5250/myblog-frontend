// Desc: This is the main file for the frontend
// myblog-frontend/src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import PostList from './components/PostList';
import CreatePost from './components/CreatePost';
import BaseLayout from './layout/BaseLayout';
import Register from './components/Register';
import Login from './components/Login';
import { AuthProvider } from './context/AuthContext';
import Home from './components/Home';
import Post from './components/Post';


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <BaseLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<CreatePost />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/posts" element={<PostList />} />
            <Route path="/posts/:id" element={<Post />} />
            {/* You can add more routes here */}
          </Routes>
        </BaseLayout>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

