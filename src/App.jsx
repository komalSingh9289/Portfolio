import React, { useState } from "react";
import PreLoader from "./components/PreLoader";
import MainContent from "./components/MainContent";
import ParticlesComponent from "./components/ParticlesComponent";
import Skills from "./components/Skills";
import About from "./components/About";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
const App = () => {
  const [isPreloaderComplete, setIsPreloaderComplete] = useState(false);

  const handlePreloaderComplete = () => {
    setIsPreloaderComplete(true);
  };

  return (
    <>
      {!isPreloaderComplete && (
        <PreLoader onComplete={handlePreloaderComplete} />
      )}
      {isPreloaderComplete && (
        <>
          <ParticlesComponent />
          <MainContent />
          <Skills />
          <About />
          <Projects />
          <ContactMe />
        </>
      )}
    </>
  );
};

export default App;
