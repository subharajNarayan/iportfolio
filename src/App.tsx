import React, { Suspense } from 'react';
import './App.scss';
import Home from './components/home/Home';
import ScrollToTop from 'react-scroll-to-top';
import FallbackLoader from './React/FallBackLoader/FallBackLoader';
import { ClipLoader } from 'react-spinners';

function App() {

  const [isPageReloading, setIsPageReloading] = React.useState(false);

  React.useEffect(() => {
    const handleBeforeUnload = () => setIsPageReloading(true);
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('afterunload', handleBeforeUnload);
    };
  }, []);

  return (
    <div>
      {isPageReloading ? (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <ClipLoader color="#fefefe" />
        </div>
      ) : (
        <Home />
      )}
      <ScrollToTop smooth />
    </div>
  );
}

export default App;
