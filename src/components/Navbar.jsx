import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Logo from '../media/logo.webp';
import '../css/navbar.css';

const DURATION = 1000;

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-inner">
                <div className="navbar-logo">
                    <Link 
                        to="hero" 
                        spy = {true}
                        smooth = {true}
                        offset={-120}
                        duration={DURATION}
                    >
                        <img src={Logo} alt="The Language Jeanie" draggable="false" />
                    </Link>
                </div>

                <Link 
                        className="title"
                        to="hero" 
                        spy = {true}
                        smooth = {true}
                        offset={-120}
                        duration={DURATION}
                    >The Language Jeanie</Link>

                <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
                    <Link 
                        to="hero" 
                        spy = {true}
                        smooth = {true}
                        offset={-120}
                        duration={DURATION}
                        onClick={toggleMenu}
                    >
                        Home
                    </Link>
                    <Link 
                        to="about" 
                        spy = {true}
                        smooth = {true}
                        offset={-120}
                        duration={DURATION}
                        onClick={toggleMenu}
                    >
                        About
                    </Link>
                    {/*<Link 
                        to="prices" 
                        spy = {true}
                        smooth = {true}
                        offset={-120}
                        duration={500}
                        onClick={toggleMenu}
                    >
                        Prices
                    </Link>*/}
                    <Link 
                        to="testimonials"  
                        spy = {true}
                        smooth = {true}
                        offset={-120}
                        duration={DURATION}
                        onClick={toggleMenu}
                    >
                        Testimonials
                    </Link>
                    <Link 
                        to="contact" 
                        spy = {true}
                        smooth = {true}
                        offset={-120}
                        duration={DURATION}
                        onClick={toggleMenu}
                    >
                        Contact
                    </Link>
                    <a 
                        href="https://www.teachable.com" rel="noreferrer"
                        onClick={toggleMenu}
                    >
                        Course Login
                    </a>
                </div>
                <div className="navbar-toggle" onClick={toggleMenu}>
                    {isOpen ? (
                        <FontAwesomeIcon icon={faTimes} />
                    ) : (
                        <FontAwesomeIcon icon={faBars} />
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
