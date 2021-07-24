// import logo from './logo.svg';
import './App.css';
import Background from "./components/background/Background";
import NameBox from "./components/mainbox/NameBox";
import Navigation from "./components/navbar/Navigation";
import ProjectPage from "./components/projects/ProjectPage";
import IntroPage from "./components/intro/IntroPage";
import { useState } from "react";

const App = () => {
  const [displayName, setDisplay] = useState(true);
  const [displayIntro, setIntroDisplay] = useState(false);
  const [displayProjects, setProjectsDisplay] = useState(false);
  const dev = false;
  return (
    <div className="HomePage" style={{ height: "100vh", width: "100vw", display: "contents" }}>
      {!dev && <Background />}
      {displayName && <NameBox />}
      <Navigation changeDisplay={setDisplay} setIntroDisplay={setIntroDisplay}
        setProjectsDisplay={setProjectsDisplay} />
      {displayIntro && <IntroPage changeDisplay={setDisplay} setIntroDisplay={setIntroDisplay} />}
      {displayProjects && <ProjectPage changeDisplay={setDisplay} setProjectsDisplay={setProjectsDisplay} />}
    </div>
  );
}

export default App;
