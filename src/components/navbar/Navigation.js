import "./Navigation.css";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FolderIcon from '@material-ui/icons/Folder';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedIn from "@material-ui/icons/LinkedIn";
import IconButton from "@material-ui/core/IconButton";
import Link from '@material-ui/core/Link';

const Navigation = ({ changeDisplay, setIntroDisplay, setProjectsDisplay, displayIntro, displayProjects, displayName }) => {

    const handleAccount = () => {
        changeDisplay(!displayName && !displayProjects ? true : false);
        setProjectsDisplay(false);
        setIntroDisplay(!displayIntro);
    };
    const handleProjects = () => {
        changeDisplay(!displayName && !displayIntro ? true : false);
        setIntroDisplay(false);
        setProjectsDisplay(!displayProjects);
    };


    return (
        <div className="NavBar" style={{ color: "white" }}>
            <IconButton onClick={handleAccount} color='inherit' id="Intro"><AccountCircleIcon fontSize="large" /></IconButton>
            <IconButton onClick={handleProjects} color="inherit"><FolderIcon id="Projects" fontSize="large" /></IconButton>
            <Link id="GitHub" rel="noopener" target="_blank" href="https://github.com/EHpotato" color='inherit'><GitHubIcon fontSize="large" /></Link>
            <Link id="LinkedIn" rel="noopener" target="_blank" href="https://www.linkedin.com/in/ernesto-hernandez-001/"><LinkedIn style={{ fontSize: 45 }} /></Link>
        </div>
    );
};

export default Navigation;
