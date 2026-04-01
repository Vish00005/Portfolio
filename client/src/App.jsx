import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import MyWork from './components/MyWork';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import './index.css';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <MyWork />
      <Contact />
      <CustomCursor />
    </>
  );
}

export default App;
