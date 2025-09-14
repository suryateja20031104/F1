import React from 'react';
import './App.css';
import NavbarTop from './components/NavbarTop/NavbarTop.tsx';
import NavbarMiddle from './components/NavbarMiddle/NavbarMiddle.tsx';
import Home from './components/Home/Home.tsx';
import Stories from './components/Stories/Stories.tsx';
import News from './components/News/News.tsx';
import Drivers from './components/Drivers/Drivers.tsx';
import More from './components/More/More.tsx';
import Sponsers from './components/Sponsers/Sponsers.tsx';

function App() {
  return (
    <>
      <NavbarTop />
      <NavbarMiddle />
      <Home />
      <Stories />
      <News/>
      <Drivers/>
      <More/>
      <Sponsers/>
    </>
  );
}

export default App;
