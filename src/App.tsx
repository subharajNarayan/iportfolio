import React, { Suspense } from 'react';
import './App.scss';
// import Main from './components/Main';
import Home from './components/home/Home';
import ScrollToTop from 'react-scroll-to-top';
import FallbackLoader from './React/FallBackLoader/FallBackLoader';

function App() {
  return (
    <Suspense fallback={<FallbackLoader />}>
      <div>
        <Home />
        <ScrollToTop smooth />
      </div>
    </Suspense>
  );
}

export default App;
