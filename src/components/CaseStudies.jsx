import React from 'react';
import { Quote, ArrowRight, Watch, Cpu, Network, Plus } from 'lucide-react';
import { Badge } from './ui';
import './CaseStudies.css';

const caseStudies = [
    {
        id: 'angel-watch',
        brand: 'Angel Watch',
        author: 'CTO @ Angel Watch',
        description: 'Learn how Angel Watch scaled IoT connectivity, delivered a world-class customer experience, and reduced cost with Spenza',
        theme: 'spenza',
        image: 'https://spenza.com/wp-content/webp-express/webp-images/uploads/2026/02/angelwatch.png.webp',
        icon: <Watch size={48} strokeWidth={2} />,
        smallIcon: <Watch size={24} strokeWidth={3} />
    },
    {
        id: 'butlr',
        brand: 'Butlr',
        author: 'Head of Infra @ Butlr',
        description: 'Discover why Butlr chose Spenza to orchestrate multi-operator, global connectivity, eliminate admin headaches, and cut down telecom expenses',
        theme: 'spenza',
        image: 'https://spenza.com/wp-content/webp-express/webp-images/uploads/2026/02/butlr_collapse.png.webp',
        icon: <Cpu size={48} strokeWidth={2} />,
        smallIcon: <Cpu size={24} strokeWidth={3} />
    },
    {
        id: 'msp',
        brand: 'MSP Solutions',
        author: 'VP Sales @ MSP',
        description: 'Understand how Spenza made it easy for an MSP to empower resellers, deliver mobile plan flexibility, streamline billing, and centralize carrier management',
        theme: 'spenza',
        image: 'https://spenza.com/wp-content/webp-express/webp-images/uploads/2026/02/msp-updated.png.webp',
        icon: <Network size={48} strokeWidth={2} />,
        smallIcon: <Network size={24} strokeWidth={3} />
    }
];

export default function CaseStudies() {
    return (
        <section className="case-studies-section" id="stories">
            <div className="container case-studies-header-container">
                <div className="section-header">
                    <Badge variant="light" dot={true}>
                        REAL MESSAGES, REAL FEEDBACK
                    </Badge>
                    <h2>Proven Telecom Growth Stories</h2>
                </div>
            </div>

            <div className="case-studies-full-bleed">
                {caseStudies.map((study) => (
                    <div key={study.id} className={`case-study-block theme-${study.theme}`}>
                        {/* Hover Image Background */}
                        <div
                            className="block-image"
                            style={{ backgroundImage: `url(${study.image})` }}
                        ></div>

                        {/* Default State (Centered Logo) */}
                        <div className="block-inactive">
                            <div className="brand-logo-centered">
                                {study.icon}
                                <span>{study.brand.toLowerCase()}.</span>
                            </div>
                        </div>

                        {/* Hover State (Details + Glass Effect) */}
                        <div className="block-active glass-effect">
                            <div className="active-top">
                                <Quote size={48} className="quote-icon" fill="currentColor" />
                                <p className="study-text">{study.description}</p>
                            </div>

                            <div className="active-bottom">
                                <div className="author-info">
                                    <span className="author-name">{study.brand}</span>
                                    <span className="author-title">{study.author}</span>
                                </div>
                                <div className="brand-logo-small">
                                    {study.smallIcon}
                                    <span className="sr-only">{study.brand}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
