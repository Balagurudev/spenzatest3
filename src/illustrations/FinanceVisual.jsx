import React from 'react';
import { TrendingUp, UserCheck, Smartphone } from 'lucide-react';
import './FinanceVisual.css';

export default function FinanceVisual() {
    return (
        <div className="finance-visual-wrapper">
            {/* Soft decorative background wave */}
            <svg
                className="finance-bg-wave"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M0,60 Q25,80 50,60 T100,60 L100,100 L0,100 Z"
                    fill="var(--primary-color)"
                    opacity="0.05"
                />
            </svg>

            <div className="finance-cards-container">
                {/* Top Card: Revenue Focus */}
                <div className="finance-card card-revenue float-slow">
                    <div className="finance-card-header">
                        <div className="finance-badge primary-badge">
                            +$12,500 USD
                        </div>
                        <span className="finance-badge-label">New Revenue</span>
                    </div>

                    <div className="finance-card-body">
                        <div className="finance-avatar">
                            <span className="finance-avatar-logo">S</span>
                            <div className="finance-avatar-badge">
                                <TrendingUp size={10} color="white" />
                            </div>
                        </div>
                        <div className="finance-info">
                            <div className="finance-info-title">Global eSIM Sales</div>
                            <div className="finance-info-subtitle">Q3 Performance</div>
                        </div>
                    </div>
                </div>

                {/* Bottom Card: Loyalty & Speed Focus */}
                <div className="finance-card card-loyalty float-medium delay-1">
                    <div className="finance-card-header">
                        <div className="finance-badge secondary-badge">
                            <Smartphone size={12} />
                            Active Roaming
                        </div>
                        <span className="finance-badge-label">Deployed in 2 hrs</span>
                    </div>

                    <div className="finance-card-body">
                        <div className="finance-avatar">
                            <img src="https://i.pravatar.cc/150?img=32" alt="User" className="finance-avatar-img" />
                            <div className="finance-avatar-badge success-bg">
                                <UserCheck size={10} color="white" />
                            </div>
                        </div>
                        <div className="finance-info">
                            <div className="finance-info-title">@sarah_jenkins</div>
                            <div className="finance-info-subtitle">High Loyalty Customer</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
