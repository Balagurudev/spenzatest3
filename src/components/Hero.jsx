import React from 'react';
import { Asterisk, ArrowRight } from 'lucide-react';
import { Button, Badge } from './ui';
import WorldMap from './ui/WorldMap';
import './Hero.css';

export default function Hero() {
    return (
        <section className="hero-section" id="hero">
            {/* Background Image Placeholder */}
            <div className="hero-bg-layer"></div>

            <div className="hero-content">
                <Badge variant="light" dot={true}>
                    MVNO PLATFORM
                </Badge>

                <h1>
                    One Platform to Launch, Manage, and <br />
                    Scale Your <span className="highlight-text">Telecom Business</span>
                </h1>

                <p className="hero-subtitle">
                    Get multi-operator connectivity across the globe. Optimize telecom operations based on AI insights. Deliver best-in-class support and customer experience. All in one place.
                </p>

                <div className="email-capture-form">
                    <input type="email" placeholder="Enter your email here" aria-label="Email address" />
                    <Button variant="primary">
                        Book a Demo <ArrowRight size={16} />
                    </Button>
                </div>

                <div className="social-proof">
                    <div className="avatar-group">
                        <img src="https://i.pravatar.cc/30?img=11" alt="User 1" className="avatar" />
                        <img src="https://i.pravatar.cc/30?img=12" alt="User 2" className="avatar" />
                        <img src="https://i.pravatar.cc/30?img=13" alt="User 3" className="avatar" />
                    </div>
                    <p>LINARCA BOOKED <span className="highlight-text">15 DEMOS IN THE FIRST MONTH</span></p>
                </div>
            </div>

            <div className="hero-visual-nodes">
                <WorldMap
                    lineColor="#EA580C"
                    dots={[
                        { start: { lat: 64.2008, lng: -149.4937 }, end: { lat: 34.0522, lng: -118.2437 } },
                        { start: { lat: 64.2008, lng: -149.4937 }, end: { lat: -15.7975, lng: -47.8919 } },
                        { start: { lat: -15.7975, lng: -47.8919 }, end: { lat: 38.7223, lng: -9.1393 } },
                        { start: { lat: 51.5074, lng: -0.1278 }, end: { lat: 28.6139, lng: 77.209 } },
                        { start: { lat: 28.6139, lng: 77.209 }, end: { lat: 43.1332, lng: 131.9113 } },
                        { start: { lat: 28.6139, lng: 77.209 }, end: { lat: -1.2921, lng: 36.8219 } },
                    ]}
                />

                {/* Floating UI Elements from New Reference */}
                {/* Central Logo */}
                <div className="float-central-hub float-anim-2">
                    <div className="hub-logo-inner">
                        <svg viewBox="0 0 24 24" width="32" height="32" stroke="#EA580C" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                    </div>
                </div>

                {/* Spend Management Card */}
                <div className="float-card float-card-spend float-anim-1">
                    <div className="spend-header">
                        <span className="spend-title">Spend Management</span>
                        <div className="spend-icon-wrap">
                            <svg viewBox="0 0 24 24" width="12" height="12" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="6" width="20" height="12" rx="2" /><path d="M12 12h.01" /></svg>
                        </div>
                    </div>
                    <div className="spend-amount">$240.80K</div>
                    <div className="spend-bar"><div className="spend-bar-fill"></div></div>
                    <div className="spend-meta">
                        <span className="spend-up">+2.6%</span>
                        <span className="spend-text">Less Than last week</span>
                    </div>
                </div>

                {/* Total New Connections Card */}
                <div className="float-card float-card-connections float-anim-4">
                    <div className="conn-header">
                        <div className="conn-title-wrap">
                            <span className="conn-title">Total New Activations</span>
                        </div>
                        <div className="conn-chart">
                            <div className="chart-bar"><div className="chart-fill c-orange" style={{ height: '60%' }}></div></div>
                            <div className="chart-bar"><div className="chart-fill c-dark" style={{ height: '80%' }}></div></div>
                            <div className="chart-bar"><div className="chart-fill c-orange" style={{ height: '40%' }}></div></div>
                            <div className="chart-bar"><div className="chart-fill c-orange" style={{ height: '90%' }}></div></div>
                        </div>
                    </div>
                    <div className="conn-amount-wrap">
                        <span className="conn-amount">5256<span className="conn-decimals">.00</span></span>
                        <span className="conn-badge">Last 30 Days</span>
                    </div>
                </div>

                {/* Pills */}
                <div className="float-pill pill-churn float-anim-1">
                    <div className="pill-dot bg-orange"></div>
                    <span>Reduce churn</span>
                    <div className="pill-plus">+</div>
                </div>

                <div className="float-pill pill-connect float-anim-2">
                    <div className="pill-dot bg-orange"></div>
                    <div className="pill-plus mr-sm">+</div>
                    <span>Connect Everything</span>
                </div>

                <div className="float-pill pill-effective float-anim-3">
                    <div className="pill-dot bg-orange"></div>
                    <span>Powerfully Effective</span>
                    <div className="pill-plus">+</div>
                </div>

                {/* Floating Icons */}
                <div className="float-icon fi-doc float-anim-2">
                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="#EA580C" strokeWidth="2" fill="none"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>
                </div>
                <div className="float-icon fi-shield float-anim-1">
                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="white" strokeWidth="2" fill="#EA580C"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" stroke="white" fill="none" /></svg>
                </div>
                <div className="float-icon fi-face-1 float-anim-4">
                    <img src="https://i.pravatar.cc/40?img=33" alt="Face" />
                </div>
            </div>
        </section>
    );
}
