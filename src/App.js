import React, { useEffect, useRef } from 'react';
import ReactGA from 'react-ga';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import ScrollReveal from './utils/ScrollReveal';

// Views 
import Home from './views/Home';

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {

  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add('is-loaded')
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Routes>
          <Route exact path="/" Component={Home}/>
        </Routes>
      )} />
  );
}

export default App;