import React, { useState } from 'react'
// import { Route, Routes } from 'react-router-dom'
import 'material-icons/iconfont/material-icons.css';
import './App.css'
import Home from './Components/Twitter/Home';
// import Navbar from './Components/Navbar/Navbar'
// import Home from './Pages/Home/Home'
// import Notfound from './Components/Youtube/Not-Found/Notfound'
// import Video from './Pages/Video/Video'


function App() {
  // const [sidebar, setSidebar] = useState(true);
  

  return (
    <>
      <Home/>
      
    </>
  )
}

export default App
/*
      <Routes>
        <Route path="" element={<Home sidebar={sidebar}/>}/>
        <Route path="*" element={<Notfound/>}/>
        <Route path='/video/:categoryId/:videoId' element={<Video/>}/>
        
      </Routes>
 */
