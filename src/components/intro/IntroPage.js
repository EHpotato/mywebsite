import "./IntroPage.css"

const IntroPage = ({ changeDisplay, setIntroDisplay }) => {

    const handleClick = () => {
        setIntroDisplay(false);
        changeDisplay(true);
    };
    return (
        <div className="ProjectPage">
            <div className="ButtonContainer"><button className="ExitButton" onClick={handleClick}>X</button></div>
            <div className="TextContainer">
                <p>&emsp; I love to learn and gain experience in new technologies. I enjoy spending my time on the Internet learning about new
                technology and mountain biking. Looking for a Full-Time position as a Software Engineer.
                </p>
                <h5 className="header">Technical Skills</h5>
                <p>
                    Java, Python, C Programming, Haskell, GoLang, Javascript, SQL, HTML, React.js, Jest.js, Puppeteer, Node.js,
                    Docker, Google Cloud Platform, Firebase, PostgreSQL, GNU/Linux, Git, MacOS, Express.js
                </p>
                <h5 className="header">Related Coursework</h5>
                <p>
                    Data Structures(Java and C), Calculus(1, 2, and 3), Linear Algebra, Discrete
                    Mathematics, Computer Algorithms and Abstract Data Types, Computer Networking,
                    Computer Systems and Assembly Language, Introduction to Probability and Statistics,
                    Computer Architecture, Functional Programming, Computer System Design, Computer
                    Security, Computational Models, Machine Learning, Distributed Systems, Database Systems, Web Applications,
                    Network Programming
                </p>
            </div>
        </div>
    );
};

export default IntroPage;