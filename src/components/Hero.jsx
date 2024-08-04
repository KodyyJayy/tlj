import '../css/hero.css'

import HeroImage from '../media/hero-image-2.webp'

const Hero = () => {
    return (
        <div className="hero-container">
            <div className="hero-inner">
                <div id="hero-info">
                    <h1>
                        <span>KICKSTART YOUR <span id="spanish">SPANISH</span> JOURNEY</span> AND SURPRISE FRIENDS & LOCALS!
                    </h1>
                    <h2>
                    Learn Spanish FAST without getting bored!
                    </h2>
                    <img id="hero-img-small" alt="" src={HeroImage} draggable="false" />
                    <div id="hero-button-container">
                        <h2>Want to know how?</h2>
                        <a href="/home"><h3>CLICK HERE TO FIND OUT MORE</h3></a>
                    </div>
                </div>
                <img id="hero-img" alt="" src={HeroImage} draggable="false" />
            </div>
            <div className="hero-background"></div>
        </div>
    )
}

export default Hero