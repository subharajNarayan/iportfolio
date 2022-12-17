import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './about/About';
import Home from './home/Home';

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/about-me/" element={ <About /> } />
    </Routes>
  )
}

export default Main;