import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Navbar from "../Navbar/NavBar";
import Home from "../Home/Home";
import News from '../News/News';
import Exercise from '../Exercise/Exercise';


const AppRouter = () => {

  return (
    <div style={{width: '100%'}}>
      <Navbar />
      <div style={{ marginTop: "75px", width: "100%"}}>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/exercise" element={<Exercise />} />
        </Routes>
      </div>
    </div>
  )
}

export default AppRouter;