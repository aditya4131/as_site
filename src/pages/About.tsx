import React from "react";
import NavigationBar from "../components/NavigationBar";
import "./About.css";

function About() {
  return (
    <body id="about-body">
      <div>
        <NavigationBar />
        <img
          src="https://hej4dtfnfqkde6jg.public.blob.vercel-storage.com/helloSticker.jpg"
          alt="person saying hello."
          id="person-hello-img"
        />
        <p id="about-info">
          I am a Computer Science student at Louisiana State University, driven
          by a passion for research, <br /> innovation, and technology. Throughout my
          academic journey, I have actively contributed to impactful <br />projects,
          including collaborative work on a language model for cancer pathology
          report summarization. <br />As a Research Assistant at LSU Mobile Device
          Security Lab, I’ve explored privacy implications of trackers <br />and led
          analyses. During internships at Chevron, I played a pivotal role in
          developing Python-based file <br />scrapers, contributing to the company’s
          efficiency. Proficient in Python, Java, C++, and more, I am <br />eager to
          leverage my skills to make meaningful contributions in the dynamic
          landscape of  <br />computer science and technology.
        </p>
        <footer id="about-footer-note-1">
          <p>Aditya Srivastava © 2024</p>
        </footer>
      </div>
    </body>
  );
}

export default About;
