import Fade from 'react-reveal'

import Hero from './Hero'
import AsSeenOn from './AsSeenOn';
import About from './About'
import Banner from './Banner'
import Reviews from './Reviews';
import Contact from './Contact';

const Home = () => {
    return (
        <>
            <Fade bottom distance="5%" duration="1000">
                <Hero />
                <AsSeenOn />
                <About />
                <Banner text="Adele is trusted by many other students like you ⭐️⭐️⭐️⭐️⭐️" url={{url: "/prices", coverText: "Get Started"}}  />
                <Reviews />
                <Banner text="Today is the day to start making your language learning dreams a reality; once and for all!"/>
                <Contact />
            </Fade>
        </>
    )
}

export default Home;