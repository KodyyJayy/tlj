import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import Logo from '../media/logo.webp';
import '../css/navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <a href="/home">
                    <img src={Logo} alt="The Language Jeanie" draggable="false" />
                </a>
            </div>

            <a href="/home" className="title">The Language Jeanie</a>

            <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
                <NavLink 
                    to="/home" 
                    end 
                    className={({ isActive }) => 
                        isActive || window.location.pathname === '/' ? 'active' : ''
                    }
                >
                    Home
                </NavLink>
                <NavLink 
                    to="/about" 
                    className={({ isActive }) => 
                        isActive ? 'active' : ''
                    }
                >
                    About
                </NavLink>
                <NavLink 
                    to="/prices" 
                    className={({ isActive }) => 
                        isActive ? 'active' : ''
                    }
                >
                    Prices
                </NavLink>
                <NavLink 
                    to="/testimonials" 
                    className={({ isActive }) => 
                        isActive ? 'active' : ''
                    }
                >
                    Testimonials
                </NavLink>
                <NavLink 
                    to="/contact" 
                    className={({ isActive }) => 
                        isActive ? 'active' : ''
                    }
                >
                    Contact
                </NavLink>
                <a 
                    href="https://www.teachable.com" rel="noreferrer" target='_blank'
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
        </nav>
    );
}

export default Navbar;
