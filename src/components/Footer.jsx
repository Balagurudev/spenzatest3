import React from 'react';
import { ArrowRight } from 'lucide-react';
import spenzaLogo from '../assets/logo/spenza-logo-full.webp';
import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer-section theme-dark">
            <div className="footer-content">
                <div className="footer-brand">
                    <a href="#" className="logo">
                        <img src={spenzaLogo} alt="Spenza" className="logo-img" />
                    </a>
                    <p>Spenza - Best MVNO platform for Telecom Businesses.</p>
                    <div className="contact-email">
                        <span>Contact:</span> <a href="mailto:hello@spenza.com">hello@spenza.com</a>
                    </div>

                    <div className="email-capture-small">
                        <input type="email" placeholder="Work Email" aria-label="Work Email" className="input-base" style={{ flex: 1, border: 'none', borderRight: '1px solid var(--border-dark)', borderRadius: 0 }} />
                        <button className="btn btn-icon" style={{ background: 'transparent', color: 'var(--val-white)', border: 'none', padding: '0 16px', cursor: 'pointer' }}>
                            <ArrowRight size={16} />
                        </button>
                    </div>
                </div>

                <div className="footer-links">
                    <div className="link-column">
                        <h4>Company</h4>
                        <a href="#">About</a>
                        <a href="#">Careers</a>
                    </div>
                    <div className="link-column">
                        <h4>Products</h4>
                        <a href="#">Personalization</a>
                        <a href="#">Pricing</a>
                    </div>
                    <div className="link-column">
                        <h4>Resources</h4>
                        <a href="#">ROI Calculator</a>
                        <a href="#">Messaging Examples</a>
                        <a href="#">Blog</a>
                    </div>
                    <div className="link-column">
                        <h4>Socials</h4>
                        <a href="#">LinkedIn</a>
                        <a href="#">Email us</a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="giant-watermark">
                    <h2>Spenza</h2>
                </div>
                <div className="legal-links">
                    <p>&copy; 2026 SPENZA. ALL RIGHTS RESERVED.</p>
                    <a href="#">PRIVACY POLICY</a>
                    <a href="#">TERMS OF SERVICES</a>
                </div>
            </div>
        </footer>
    );
}
