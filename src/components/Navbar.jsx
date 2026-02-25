import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui';
import spenzaLogo from '../assets/logo/spenza-logo-full.webp';
import './Navbar.css';

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-container">
                <a href="#" className="logo">
                    <img src={spenzaLogo} alt="Spenza" className="logo-img" />
                </a>

                <div className="nav-links">
                    <a href="#">Home</a>
                    <a href="#">Products</a>
                    <a href="#">Solutions</a>
                    <a href="#">Resources</a>
                    <a href="#">Blog</a>
                    <a href="#">About Us</a>
                </div>

                <div className="nav-cta">
                    <a href="#" className="login-link">Sign Up/Login</a>
                    <Button variant="primary">
                        Contact Us! <ArrowRight size={16} />
                    </Button>
                </div>
            </div>
        </nav>
    );
}
