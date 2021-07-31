import React from 'react';
import * as SiIcons from 'react-icons/si';
import './Navbar.css';

export default function Navbar(props) {
    return (
            <header id="navbar">
                <nav className="navbar-container container">
                    <a href="/" className="home-link">
                        <div><SiIcons.SiCoderwall className="navbar-logo" /></div>
                        Codepen Clone
                    </a>
                    <div className="navbar-menu">
                        <ul className="navbar-links">
                            {props.children}
                        </ul>
                    </div>
                </nav>
            </header>
    )
}
