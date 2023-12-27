import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import HeroSection from "./components/HeroSection/HeroSection.jsx";
import AlbumSection from "./components/AlbumSection/AlbumSection.jsx";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AlbumSection />
    </>
  );
}

export default App;
