import { Link } from 'react-scroll';
import '../css/footer.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';

import Logo from '../media/logo.webp'
import { socials } from '../utils/socials';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-inner">
                <Link to="hero" 
                    spy={true}
                    smooth={true}
                    offset={-120}
                    duration={1000}
                >
                    <img alt="" src={Logo} draggable="false" />
                </Link>
                <div className="social-icons">
                    <a href={socials.facebook} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                    <a href={socials.instagram} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href={socials.tiktok} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTiktok} />
                    </a>
                </div>
                <p>© 2024 The Language Jeanie</p>
            </div>
        </footer>
    )
}

export default Footer;