import "./IntroPage.css"
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import Chip from '@material-ui/core/Chip';
import { IconButton } from "@material-ui/core";

const skills = ['Java', 'Python', 'C/C++', 'GoLang', 'Javascript', 'SQL', 'React.js', 'Express.js', 'Node.js', 'Docker',
    'Google Cloud Platform', 'AWS', 'Firebase', 'PostgreSQL', 'Git', 'Jest.js', 'Selenium', 'Haskell', 'CI/CD pipeline', 'REST APIs', 'GNU/Linux',
    'Flask'];

const courses = ['Data Structures', 'Distributed Systems', 'Machine Learning', 'Network Programming', 'Web Applications', 'Database Systems',
    'Computer Security', 'Computational Models', 'Algorithms', 'Computer System Design', 'Functional Programming', 'Computer Architecture',
    'Introduction to Probability and Statistics', 'Computer Networking', 'Discrete Mathematics', 'Calculus', 'Parallel Programming'];

const IntroPage = ({ changeDisplay, setIntroDisplay }) => {

    const handleClick = () => {
        setIntroDisplay(false);
        changeDisplay(true);
    };
    return (
        <div className="ProjectPage">
            <div className="ButtonContainer">
                <IconButton onClick={handleClick} style={{ color: "white" }}><HighlightOffIcon /></IconButton>
            </div>
            <div className="TextContainer">
                <p>I love to learn and gain experience in new technologies. I enjoy spending my time on the Internet learning about new
                    technologies. Looking for a Full-Time position as a Software Engineer.
                </p>
                <h5 className="header">Technical Skills</h5>
                <div className="listItems">
                    {skills.map((skill) => {
                        return <Chip label={skill} variant="outlined" color="primary" style={{ color: "white", margin: "2px" }} />
                    })}
                </div>
                <h5 className="header">Related Coursework</h5>
                <div className="listItems">
                    {courses.map((course) => {
                        return <Chip label={course} variant="outline" color="secondary" style={{ color: "white", margin: "2px" }} />
                    })}
                </div>
            </div>
        </div>
    );
};

export default IntroPage;