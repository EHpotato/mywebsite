import './App.css';
import Background from "./components/background/Background";
import NameBox from "./components/mainbox/NameBox";
import Navigation from "./components/navbar/Navigation";
import ProjectPage from "./components/projects/ProjectPage";
import IntroPage from "./components/intro/IntroPage";
import { useState } from "react";
import { Transition } from "react-transition-group";

const duration = 500;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const defaultStyle2 = {
  transition: `opacity ${600}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

const App = () => {
  const [displayName, setDisplay] = useState(true);
  const [displayIntro, setIntroDisplay] = useState(false);
  const [displayProjects, setProjectsDisplay] = useState(false);
  const dev = false;
  return (
    <div className="HomePage" style={{ height: "100vh", width: "100vw", display: "contents" }}>
      {!dev && <Background />}
      <Transition in={displayName} appear={true} timeout={duration}>
        {state => (
          <div style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}>
            < NameBox />
          </div>
        )}
      </Transition>
      <Transition in={true} appear={true} timeout={duration}>
        {state => (
          <div style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}>
            <Navigation changeDisplay={setDisplay} setIntroDisplay={setIntroDisplay}
              setProjectsDisplay={setProjectsDisplay}
              displayName={displayName}
              displayIntro={displayIntro}
              displayProjects={displayProjects} />
          </div>
        )}
      </Transition>
      <Transition in={displayIntro || displayProjects} timeout={0}>
        {state => (
          <div style={{
            ...defaultStyle2,
            ...transitionStyles[state]
          }}>
            {displayIntro && <IntroPage changeDisplay={setDisplay} setIntroDisplay={setIntroDisplay} />}
            {displayProjects && <ProjectPage changeDisplay={setDisplay} setProjectsDisplay={setProjectsDisplay} />}
          </div>
        )}
      </Transition>
    </div >
  );
}

export default App;
