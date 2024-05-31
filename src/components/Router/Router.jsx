import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../skimiLogin';
import Signup from '../Signup';
import SpotifyLogin from '../SpotifyLogin';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Login />} />
        <Route path="/spotify" element={<SpotifyLogin />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
