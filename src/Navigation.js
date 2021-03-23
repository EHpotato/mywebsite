import "./Navigation.css";

const Navigation = ({ changeDisplay, setIntroDisplay, setProjectsDisplay }) => {

    const handleClick = (cx) => {
        // changeDisplay(false);
        if (cx.target.className === "Intro") {
            setIntroDisplay(true);
            changeDisplay(false);
            setProjectsDisplay(false);
        } else if (cx.target.className === "Projects") {
            setIntroDisplay(false);
            changeDisplay(false);
            setProjectsDisplay(true);
        }
    }
    return (
        <div className="NavBar">
            <button className="Intro" onClick={handleClick}>Intro</button>
            <button className="Projects" onClick={handleClick}>Projects</button>
            <a className="GitHub" target="blank" href="https://github.com/EHpotato"><p className="reLinks">GitHub</p></a>
            <a className="LinkedIn" target="blank" href="https://www.linkedin.com/in/ernesto-hernandez-001/"><p className="reLinks">LinkedIn</p></a>
        </div>
    );
};

export default Navigation;