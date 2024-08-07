import { Link } from 'react-scroll';
import '../css/footer.css'

import Logo from '../media/logo.webp'

const Footer = () => {
    return (
        <footer className="footer">
            <p>Designed by Kody</p>
            <div className="footer-inner">
                <Link  to="hero" 
                    spy = {true}
                    smooth = {true}
                    offset={-120}
                    duration={1000}
                >
                    <img alt="" src={Logo} draggable="false" />
                </Link>
                <p>© 2024 The Language Jeanie</p>
            </div>
        </footer>
    )
}

export default Footer