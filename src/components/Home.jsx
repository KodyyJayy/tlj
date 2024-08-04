import Hero from './Hero'
import AsSeenOn from './AsSeenOn';
import About from './About'
import Banner from './Banner'
import Contact from './Contact';

const Home = () => {
    return (
        <>
            <Hero />
            <AsSeenOn />
            <About />
            <Banner text="Adele is trusted by many other students like you ⭐️⭐️⭐️⭐️⭐️" url={{url: "/home", coverText: "Get Started"}}  />
            <Contact />
        </>
    )
}

export default Home;