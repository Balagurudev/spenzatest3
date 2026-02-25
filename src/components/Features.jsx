import React, { useState, useEffect, useRef } from 'react';
import { Cpu, Smartphone, ShoppingBag, Users, Globe as GlobeIcon, Plane, ArrowRight, Store, Tag, MessageCircle, Play, Wifi, CircleDollarSign, TrendingUp, Sliders, UserCheck, ShieldCheck, Globe2 } from 'lucide-react';
import Lottie from 'lottie-react';
import { Button } from './ui';
import simCardAnimation from '../illustrations/sim_card.json';
import iotSolutionsImage from '../illustrations/IOT Solutions.png';
import spenzaImage from '../illustrations/spenza1.jpg';
import IntegrationsBeam from '../illustrations/IntegrationsBeam';
import Globe from './ui/Globe';
import { OrbitingCircles } from './ui/OrbitingCircles';
import FinanceVisual from '../illustrations/FinanceVisual';
import bentoBlocksAnimation from '../illustrations/bento_blocks_conversion_card.json';
import './Features.css';

const featureData = [
    {
        id: 'iot',
        icon: <Cpu size={24} />,
        title: 'IoT Solutions',
        content: 'End-to-end connectivity management, analytics, and billing. Reduce telecom waste, optimize costs, and launch in days.'
    },
    {
        id: 'devices',
        icon: <Smartphone size={24} />,
        title: 'Connected Devices',
        content: 'Aggregate connectivity across operators, deploy custom plans to B2B/B2C customers, and deliver branded experiences.'
    },
    {
        id: 'consumer',
        icon: <ShoppingBag size={24} />,
        title: 'Consumer Brands',
        content: 'Go to market faster, deliver branded online experiences, create custom mobile plans across 180+ countries, and optimize usage based on data.'
    },
    {
        id: 'finance',
        icon: <Users size={24} />,
        title: 'Finance and HR Teams',
        content: 'Launch branded SIM/e-SIM mobile offerings, drive new revenue streams, increase customer loyalty, and launch in days.'
    },
    {
        id: 'mnos',
        icon: <GlobeIcon size={24} />,
        title: 'MNOs',
        content: 'Unlock new MNO revenue streams, achieve global account control, and eliminate customer churn.'
    },
    {
        id: 'travel',
        icon: <Plane size={24} />,
        title: 'Travel SIM',
        content: 'Reduce operational complexity in your eSIM business, launch faster, reduce risk, and scale through new digital sales channels.'
    }
];

export default function Features() {
    const [activeFeature, setActiveFeature] = useState(0);
    const itemRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = Number(entry.target.getAttribute('data-visual-index'));
                        setActiveFeature(index);
                    }
                });
            },
            {
                rootMargin: '-40% 0px -40% 0px' // Trigger when visual card is centered in viewport
            }
        );

        itemRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => {
            itemRefs.current.forEach((ref) => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, []);

    return (
        <section className="features-section theme-dark" id="features">
            <div className="container split-layout">

                {/* Left Sidebar */}
                <div className="feature-sidebar">
                    <div className="section-label">
                        <span className="dot-indicator white"></span> SOLUTIONS
                    </div>
                    <h2>Our Solutions</h2>

                    <div className="feature-accordion">
                        {featureData.map((feature, index) => (
                            <div
                                key={feature.id}
                                className={`accordion-item ${activeFeature === index ? 'active' : ''}`}
                                onClick={() => {
                                    // Optional: Click to scroll to the specific visual
                                    itemRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                }}
                            >
                                <div className="accordion-header">
                                    {feature.icon}
                                    <h3>{feature.title}</h3>
                                </div>
                                <div className="accordion-content">
                                    <p>{feature.content}</p>
                                    <div className="progress-bar-container">
                                        {/* Animated bar when active */}
                                        <div className="progress-bar"></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <Button variant="secondary" className="mt-xl">
                        Learn More <ArrowRight size={16} />
                    </Button>
                </div>

                {/* Right Visuals (Scrollable) */}
                <div className="feature-visual">
                    {featureData.map((feature, index) => (
                        <div
                            key={`visual-${feature.id}`}
                            className="visual-card"
                            ref={(el) => (itemRefs.current[index] = el)}
                            data-visual-index={index}
                        >
                            <div className="visual-content">
                                {feature.id === 'travel' && (
                                    <Lottie animationData={simCardAnimation} loop={true} style={{ width: '100%', height: '100%' }} />
                                )}
                                {feature.id === 'iot' && (
                                    <img src={spenzaImage} alt="IoT Solutions" className="feature-screenshot" />
                                )}
                                {feature.id === 'consumer' && (
                                    <div className="globe-feature-wrapper">
                                        <Globe className="globe-instance" />
                                        <div className="globe-overlay-gradient"></div>

                                        {/* Floating Notification Cards matching the aesthetic */}
                                        <div className="globe-card-node floating-1 dark-card text-msg">
                                            <div className="card-icon brand"><MessageCircle size={14} /></div>
                                            <span className="card-text">Go to market faster 🚀</span>
                                        </div>
                                        <div className="globe-card-node floating-2 dark-card aws-msg">
                                            <div className="card-icon brand"><GlobeIcon size={14} /></div>
                                            <span className="card-text">Create <strong>custom mobile plans</strong></span>
                                            <button className="card-btn">180+ Countries</button>
                                        </div>
                                        <div className="globe-card-node floating-3 dark-card simple-msg">
                                            <div className="card-icon brand"><Wifi size={14} /></div>
                                            <span className="card-text">Deliver branded online experiences.</span>
                                        </div>
                                    </div>
                                )}
                                {feature.id === 'devices' && (
                                    <IntegrationsBeam />
                                )}
                                {feature.id === 'mnos' && (
                                    <div className="orbiting-circles-wrapper">
                                        <OrbitingCircles iconSize={44}>
                                            <CircleDollarSign color="var(--primary-color)" />
                                            <Globe2 color="var(--primary-color)" />
                                            <UserCheck color="var(--primary-color)" />
                                            <TrendingUp color="var(--primary-color)" />
                                        </OrbitingCircles>
                                        <OrbitingCircles iconSize={36} radius={100} reverse speed={2}>
                                            <Sliders color="var(--primary-color)" />
                                            <ShieldCheck color="var(--primary-color)" />
                                            <ShoppingBag color="var(--primary-color)" />
                                            <Wifi color="var(--primary-color)" />
                                        </OrbitingCircles>
                                    </div>
                                )}
                                {feature.id === 'finance' && (
                                    <div className="finance-lottie-wrapper">
                                        <Lottie animationData={bentoBlocksAnimation} loop={true} className="finance-lottie" />
                                    </div>
                                )}
                                {feature.id !== 'travel' && feature.id !== 'iot' && feature.id !== 'consumer' && feature.id !== 'devices' && feature.id !== 'mnos' && feature.id !== 'finance' && (
                                    <>
                                        <h3>Visual for: {feature.title}</h3>
                                        <p className="placeholder-text">[Dynamic Component for {feature.id} Here]</p>
                                    </>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
