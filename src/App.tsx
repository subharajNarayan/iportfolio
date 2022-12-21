import React from 'react';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
// import Main from './components/Main';
import Home from './components/home/Home';

function App() {
  return (
    <>
    <BrowserRouter>
      <Home />
    </BrowserRouter>
    </>
  );
}

export default App;
