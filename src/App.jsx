import React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'material-icons/iconfont/material-icons.css';
import './App.css';
import Home from './Pages/Home/Home';
import Notfound from './Components/Youtube/Not-Found/Notfound';
import Video from './Pages/Video/Video';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/video/:categoryId/:videoId" element={<Video />} />
      <Route path="*" element={<Notfound />} />
    </Routes>
  );
}

export default App;
