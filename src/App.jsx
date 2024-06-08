import React from 'react';
import { Route, Routes } from 'react-router-dom';
import 'material-icons/iconfont/material-icons.css';
import './App.css';
import Home from './Pages/Home/Home';
import Notfound from './Components/Youtube/Not-Found/Notfound';
import Video from './Pages/Video/Video';
import TwitterHome from './Components/Twitter/Home'; 

function App() {
  

  return (
    <>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="*" element={<Notfound />} />
        <Route path='/video/:categoryId/:videoId' element={<Video />} />
        <Route path='/twitter' element={<TwitterHome/>} />  {/* Add route for Twitter feed */}
        
      </Routes>
    </>
  );
}

export default App;
