import React from "react";
import {Button} from 'semantic-ui-react'
import { Link } from "react-router-dom";
import "./NavigationBar.css";

function NavigationBar() {
  return (
    <div className="main-class">
      <link rel="stylesheet" href="NavigationBar.css"></link>
      {/* <ul id="home-button-nav">
       
      </ul> */}

      <ul id="nav">
      <li id="home-button">
          {/* <a href="#">Aditya</a> */}
          <Link to="/">
            <button type="button"> Aditya </button>
          </Link>
        </li>
        <li>
          <a
            href="https://drive.google.com/file/d/1u6tpN6lf_gTorqx5fotLF8-bS8sclwnh/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <button type="button">Resume</button>
          </a>
        </li>
        <li>
          <Link to="/experiences"><button type="button">Experiences</button></Link>
        </li>
        <li>
          <Link to="/about"><button type="button">About</button></Link>
        </li>
      </ul>
    </div>
  );
}

export default NavigationBar;
