import React, { useState, useEffect } from "react";
import {
  Main,
  About,
  Expertise,
  Timeline,
  Project,
  Qualifications,
  Contact,
  Navigation,
  Footer,
} from "./components";
import FadeIn from "./components/FadeIn";
import "./index.scss";

function App() {
  const [mode, setMode] = useState<string>("dark");

  const handleModeChange = () => {
    if (mode === "dark") {
      setMode("light");
    } else {
      setMode("dark");
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div
      className={`main-container ${
        mode === "dark" ? "dark-mode" : "light-mode"
      }`}
    >
      <Navigation parentToChild={{ mode }} modeChange={handleModeChange} />
      <FadeIn transitionDuration={700}>
        <Main mode={mode} />
        <About />
        <Expertise />
        <Project />
        <Timeline />
        <Qualifications />
        <Contact />
      </FadeIn>
      <Footer />
    </div>
  );
}

export default App;
