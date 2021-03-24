import "./ProjectPage.css";

const ProjectPage = ({ changeDisplay, setProjectsDisplay }) => {

    const handleClick = () => {
        setProjectsDisplay(false);
        changeDisplay(true);
    };
    return (
        <div className="ProjectPage">
            <div className="ButtonContainer"><button className="ExitButton" onClick={handleClick}>X</button></div>
            <div className="TextContainer">
                <div className="Project">
                    <a className="link" target="blank" href="https://github.com/CSE115A">
                        <h4>RideShare Price Comparer Project (December 2020)</h4>
                    </a>
                    <p>
                        A school project using Agile practices that focused on finding the best rideshare price for the user.
                        Front-end was developed with React.js and the Back-end was integrated with Firebase Functions and Hosting.
                        Unit tests were implemented at each stage using Jest framework along with Puppeteer.
                    </p>
                </div>
                <div className="Project">
                    <h4>E-Mail Web Application (December 2020)</h4>
                    <p>
                        Full stack project that focused on making a user friendly interface to view emails. Front end was coded with React and used Material-UI theme framework.
                        Back end was coded in Express.js framework. Simple RESTful EMail API backed by a PostgreSQL database to insert and delete data.
                        Used OpenAPI to specify the types of requests that are acceptable for the RESTful API.
                    </p>
                </div>
                <div className="Project">
                    <h4>Sharded Fault-Tolerant Key-Value Store Group Project (June 2020)</h4>
                    <p>
                        A distributed sharded key value store that implements fault tolerance and causal consistency.
                        Coded with Go deployed in Docker, added vector clocks to implement causal consistency, and used hashing method to distribute key value pairs across shards.
                    </p>
                </div>
                <div className="Project">
                    <a className="link" target="blank" href="https://devpost.com/software/amber-dash">
                        <h4>CruzHacks 2020 - AmberDash (January 2020)</h4>
                    </a>
                    <p>
                        1st place in Google’s category of Best Use of Google Cloud Services
                        Team project app and website that focused on crowdsourcing to identify amber alert license plate numbers on public streets using mobile phones.
                        Created using Python with Google Cloud’s machine learning APIs and Firebase. App was created with Android Studio and SDK tools.
                    </p>
                </div>
                <div className="Project">
                    <a className="link" target="blank" href="https://devpost.com/software/slug-search">
                        <h4>HackACM 2019 - Slug Search (April 2020)</h4>
                    </a>
                    <p>
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