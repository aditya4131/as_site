import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Outlet, Link} from 'react-router-dom';
import "./NavigationBar.css";
import HomePage from "../pages/HomePage";
import About from "../pages/About";
import Experiences from "../pages/Experiences";

function NavigationBar() {
  return (
    <div className="main-class">
      <link rel="stylesheet" href="NavigationBar.css"></link>
      <ul id="home-button-nav">
        <li>
          {/* <a href="#">Aditya</a> */}
          <Link to='/'>Aditya</Link>
        </li>
      </ul>

      <ul id="nav">
        <li>
          <a href="https://drive.google.com/file/d/1u6tpN6lf_gTorqx5fotLF8-bS8sclwnh/view?usp=sharing" target="_blank">Resume</a>
        </li>
        <li>
        <Link to='/experiences'>Experiences</Link>
        </li>
        <li>
         <Link to='/about'>About</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavigationBar;