import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import home from './pages/home';
import login from './pages/login';
import register from './pages/register';
import reviews from './pages/reviews';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reviews" element={<Reviews />} />
      </Routes>
    </Router>
  );
};

export default App;
