import React from 'react';
import './App.css';
import NavbarTop from './components/NavbarTop/NavbarTop.tsx';
import NavbarMiddle from './components/NavbarMiddle/NavbarMiddle.tsx';
import Home from './components/Home/Home.tsx';
import Stories from './components/Stories/Stories.tsx';
import News from './components/News/News.tsx';
import Drivers from './components/Drivers/Drivers.tsx';

function App() {
  return (
    <>
      <NavbarTop />
      <NavbarMiddle />
      <Home />
      <Stories />
      <News/>
      <Drivers/>
    </>
  );
}

export default App;
