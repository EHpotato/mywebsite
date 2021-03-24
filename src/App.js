// import logo from './logo.svg';
import './App.css';
import Background from "./Background.js";
import NameBox from "./NameBox.js";
import Navigation from "./Navigation.js";
import ProjectPage from "./ProjectPage";
import { useState } from "react";

const App = () => {
  const [displayName, setDisplay] = useState(true);
  const [displayIntro, setIntroDisplay] = useState(false);
  const [displayProjects, setProjectsDisplay] = useState(false);

  return (
    <div className="HomePage" style={{ height: "100%", width: "100%" }}>
      <Background />
      {/* <NameBox /> */}
      {displayName && <NameBox />}
      <Navigation changeDisplay={setDisplay} setIntroDisplay={setIntroDisplay}
        setProjectsDisplay={setProjectsDisplay} />
      {displayIntro && <div />}
      {displayProjects && <ProjectPage changeDisplay={setDisplay} setProjectsDisplay={setProjectsDisplay} />}
    </div>
  );
}

export default App;
