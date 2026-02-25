import React from 'react';
import { Database, Activity, Users, BarChart2, ArrowDownToLine } from 'lucide-react';
import './BentoBlocksVisual.css';

export default function BentoBlocksVisual() {
    return (
        <div className="bento-visual-wrapper">
            <div className="bento-container">
                {/* Left Side: The Funnel & Icons */}
                <div className="bento-funnel-section">
                    <div className="funnel-path">
                        {/* Decorative dotted lines for the "funnel" effect */}
                        <svg className="funnel-lines" viewBox="0 0 200 300" preserveAspectRatio="none">
                            <path d="M0,0 C100,100 150,150 200,150 C150,150 100,200 0,300" stroke="rgba(255,255,255,0.3)" strokeWidth="2" fill="none" strokeDasharray="4 4" />
                            <path d="M0,50 C80,110 120,130 200,150 C120,170 80,190 0,250" stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="none" strokeDasharray="4 4" />
                        </svg>
                    </div>

                    <div className="flowing-icons">
                        <div className="flow-icon flow-1"><Database size={24} color="var(--primary-color)" /></div>
                        <div className="flow-icon flow-2"><Activity size={24} color="var(--primary-color)" /></div>
                        <div className="flow-icon flow-3"><Users size={24} color="var(--primary-color)" /></div>
                        <div className="flow-icon flow-4"><BarChart2 size={24} color="var(--primary-color)" /></div>
                    </div>
                </div>

                {/* Right Side: Folders Receiving Data */}
                <div className="bento-folders-section">
                    <div className="bento-folder folder-1">
                        <div className="folder-tab"></div>
                        <div className="folder-body">
                            <span className="folder-title">Revenue<br />Summary</span>
                            <div className="folder-icon-large">
                                <ArrowDownToLine size={32} color="rgba(0,0,0,0.1)" />
                            </div>
                        </div>
                    </div>

                    <div className="bento-folder folder-2">
                        <div className="folder-tab"></div>
                        <div className="folder-body">
                            <span className="folder-title">Loyalty<br />Metrics</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
