import BackgroundAndQualification from "../components/About/background-and-qualification";
import Career from "../components/About/career-journey";
import CoreSkill from "../components/About/core-skill";
import Introduction from "../components/About/intro";
import Header from "../components/header";

const About = () => {
    return(
        <div className="container">
            <Header />
            <Introduction />
            <CoreSkill />
            <Career />
            <BackgroundAndQualification />
        </div>
    );
}

export default About;