import "./ProjectPage.css";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { IconButton } from "@material-ui/core";
import Chip from "@material-ui/core/Chip";

const ProjectPage = ({ changeDisplay, setProjectsDisplay }) => {
    const style = { color: "white", backgroundColor: "#43a047", margin: "2px", marginTop: "5px" };
    const handleClick = () => {
        setProjectsDisplay(false);
        changeDisplay(true);
    };
    return (
        <div className="ProjectPage">
            <div className="ButtonContainer">
                <IconButton onClick={handleClick} style={{ color: "white" }}><HighlightOffIcon /></IconButton>
            </div>
            <div className="TextContainer">
                <div className="Project">
                    <a className="link" target="blank" href="https://github.com/CSE115A">
                        <h4>RideShare Price Comparer Project (December 2020)</h4>
                    </a>
                    <div className="listItems" >
                        <Chip label="Agile" style={style} />
                        <Chip label="Full-Stack" style={style} />
                        <Chip label="React.js" style={style} />
                        <Chip label="Firebase" style={style} />
                    </div>
                    <p className="text">
                        Managed a team of 5, using Agile methods to maintain productivity. Product focused on finding the best
                        rideshare price for the user. Front-end was developed with React.js and the Back-end was integrated with
                        Firebase Functions and Hosting. Unit tests were implemented at each stage using Jest framework along with Puppeteer.
                    </p>
                </div>
                <div className="Project">
                    <h4>E-Mail Web Application (December 2020)</h4>
                    <div className="listItems" >
                        <Chip label="Full-Stack" style={style} />
                        <Chip label="React.js" style={style} />
                        <Chip label="Node.js" style={style} />
                        <Chip label="PostgreSQL" style={style} />
                        <Chip label="REST API" style={style} />
                    </div>
                    <p className="text">
                        Full stack project that focused on making a user friendly interface to view emails. Front end was coded with React and used Material-UI theme framework.
                        Back end was coded in Express.js framework. Simple RESTful EMail API backed by a PostgreSQL database to insert and delete data.
                        Used OpenAPI to specify the types of requests that are acceptable for the RESTful API.
                    </p>
                </div>
                <div className="Project">
                    <h4>Sharded Fault-Tolerant Key-Value Store Group Project (June 2020)</h4>
                    <div className="listItems">
                        <Chip label="Backend" style={style} />
                        <Chip label="GoLang" style={style} />
                        <Chip label="Distributed Systems" style={style} />
                        <Chip label="REST API" style={style} />
                    </div>
                    <p className="text">
                        A distributed sharded key value store that implements fault tolerance and causal consistency.
                        Coded with Go deployed in Docker, added vector clocks to implement causal consistency, and used hashing method to distribute key value pairs across shards.
                    </p>
                </div>
                <div className="Project">
                    <a className="link" target="blank" href="https://devpost.com/software/amber-dash">
                        <h4>CruzHacks 2020 - AmberDash (January 2020)</h4>
                    </a>
                    <div className="listItems">
                        <Chip label="1st place" style={style} />
                        <Chip label="Python" style={style} />
                        <Chip label="Google Cloud Platform" style={style} />
                        <Chip label="Machine Learning" style={style} />
                    </div>
                    <p className="text">
                        1st place in Google’s category of Best Use of Google Cloud Services
                        Team project app and website that focused on crowdsourcing to identify amber alert license plate numbers on public streets using mobile phones.
                        Created using Python with Google Cloud’s machine learning APIs and Firebase. App was created with Android Studio and SDK tools.
                    </p>
                </div>
                <div className="Project">
                    <a className="link" target="blank" href="https://devpost.com/software/slug-search">
                        <h4>HackACM 2019 - Slug Search (April 2020)</h4>
                    </a>
                    <div className="listItems">
                        <Chip label="3rd place" style={style} />
                        <Chip label="Python" style={style} />
                        <Chip label="AWS" style={style} />
                        <Chip label="Flask" style={style} />
                    </div>
                    <p className="text">
                        Group project that focused on creating a user friendly environment to make finding classes easier for UCSC students.
                        Created an Amazon Alexa skill and a website using Python.
                        Awarded 3rd place in the overall hackathon.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default ProjectPage;