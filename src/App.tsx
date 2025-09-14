import React from 'react';
import './App.css';
import NavbarTop from './components/NavbarTop/NavbarTop.tsx';
import NavbarMiddle from './components/NavbarMiddle/NavbarMiddle.tsx';
import Home from './components/Home/Home.tsx';
import Stories from './components/Stories/Stories.tsx';
import News from './components/News/News.tsx';

function App() {
  return (
    <>
      <NavbarTop />
      <NavbarMiddle />
      <Home />
      <Stories />
      <News/>
    </>
  );
}

export default App;
