import './App.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Old from "./pages/Old";
import Next from "./pages/Next";
import About from "./pages/About";
import Navbar from "./components/Nav";



function App() {
  return(
    <div className="App">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/old" element={<Old />} />
      <Route path="/new" element={<New />} />
      <Route path="/next" element={<Next />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </div>
  );
}

export default App;
