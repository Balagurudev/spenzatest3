import React from 'react';
import { Activity, Zap, Network } from 'lucide-react';
import './Metrics.css';

export default function Metrics() {
    return (
        <section className="metrics-section">
            <div className="container">
                <div className="metrics-header-center">
                    <h2>
                        Streamline your telecom operations, reduce costs early, and accelerate global deployment with enterprise-grade connectivity.
                    </h2>
                </div>

                <div className="metrics-cards-grid">

                    {/* Card 1: White Ridge Style (Churn Rate) */}
                    <div className="metrics-card ridge-card">
                        <div className="ridge-card-content">
                            <div className="ridge-card-top">
                                <div className="ridge-brand">
                                    <Activity size={24} className="ridge-icon" strokeWidth={2.5} />
                                    <span>Subscriber Retention</span>
                                </div>
                                <h3 className="ridge-headline">
                                    50% Reduction in<br />churn rate
                                </h3>
                            </div>
                            <div className="ridge-tags">
                                <span className="ridge-tag ridge-tag-dark">METRIC</span>
                                <span className="ridge-tag ridge-tag-light">VERIFIED</span>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: White Ridge Style (Time-to-Launch) */}
                    <div className="metrics-card ridge-card">
                        <div className="ridge-card-content">
                            <div className="ridge-card-top">
                                <div className="ridge-brand">
                                    <Zap size={24} className="ridge-icon" strokeWidth={2.5} />
                                    <span>Time to Market</span>
                                </div>
                                <h3 className="ridge-headline">
                                    &lt;7 Days to<br />deploy globally
                                </h3>
                            </div>
                            <div className="ridge-tags">
                                <span className="ridge-tag ridge-tag-dark">BENCHMARK</span>
                                <span className="ridge-tag ridge-tag-light">INDUSTRY AVG</span>
                            </div>
                        </div>
                    </div>

                    {/* Card 3: Orange Stats Style */}
                    <div className="metrics-card orange-stats-card">
                        <div className="orange-stats-content">
                            <div className="orange-brand">
                                <Network size={24} color="#fff" strokeWidth={2.5} />
                                <span>Finance</span>
                            </div>

                            <div className="orange-bottom">
                                <div className="orange-stat-box">
                                    <h4 className="orange-stat-value">50%</h4>
                                    <p className="orange-stat-label">Reduction in fixed costs</p>
                                </div>
                                <div className="orange-stat-box">
                                    <h4 className="orange-stat-value">&gt;$100k</h4>
                                    <p className="orange-stat-label">Saved annually on TCO</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
