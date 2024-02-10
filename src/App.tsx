import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import About from "./pages/About";
import Experiences from "./pages/Experiences";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/experiences" element={<Experiences />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
