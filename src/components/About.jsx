import '../css/about.css';
import HeroImage from '../media/hero-image-2.webp';
import Arrow from '../media/arrow.svg'
import Spiral from '../media/spiral.svg'

const About = () => {
    return (
        <div className="about-me" id="about">
            <img className="icon arrow" alt="" src={Arrow} draggable="false" />
            <img className="icon spiral" alt="" src={Spiral} draggable="false" />
            <div className="about-me-inner">
                <h1>MEET ADELE:</h1>
                <h1>Qualified Spanish tutor of 9 years!</h1>
                <div className="about-me-content">
                    <img alt="" src={HeroImage} draggable="false" />
                    <h1>
                        My name is <b>Adele Jean</b>, also known as <b>The Language Jeanie</b>. I am originally from Lincoln, England, but I currently live in Norway with my husband.&nbsp;
                        <br/><br/>
                        I fell in love with language learning when I was in school and quickly became obsessed with Spain and the Spanish-speaking world. 
                        <br/><br/>
                        I taught Spanish in schools for <i>nine</i> years alongside one-on-one adult tutoring before leaping into online teaching when I left the UK.
                        <br/>
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default About;