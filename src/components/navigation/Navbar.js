import React from 'react';
import './Navbar.css';
import * as SiIcons from 'react-icons/si';

export default function Navbar() {
    return (
        <header id="navbar">
            <nav className="navbar-container container">
                <a href="/" className="home-link">
                    <div><SiIcons.SiCoderwall className="navbar-logo" /></div>
                    Codepen Clone
                </a>
                <button type="button" className="navbar-toggle" aria-label="Open navigation menu">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <div className="navbar-menu">
                    <ul className="navbar-links">
                        <li className="navbar-item"><a className="navbar-link" href="/about">About</a></li>
                        <li className="navbar-item"><a className="navbar-link" href="/blog">Blog</a></li>
                        <li className="navbar-item"><a className="navbar-link" href="/careers">Careers</a></li>
                        <li className="navbar-item"><a className="navbar-link" href="/contact">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
