import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Achievements from "./components/Achievements";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <About />
      
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Education />
      <Achievements />
      <Footer />
    </>
  );
}

export default App;
