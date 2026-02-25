import React from 'react';
import { Columns3, BarChart, Sliders } from 'lucide-react';
import { Badge } from './ui';
import './Audience.css';

const gridData = [
    {
        id: 'telecom',
        icon: <Columns3 size={32} strokeWidth={1.5} />,
        title: 'Multi-Operator Connectivity',
        description: 'Find pre-aggregated operators in one place, switch SIMs globally, and pair the right plans for the right use-cases.',
    },
    {
        id: 'control',
        icon: <BarChart size={32} strokeWidth={1.5} />,
        title: 'Business Mobility That Manages Itself',
        description: 'Unify and analyze connectivity data, review KPIs, reduce spend, and take the right decisions based on data, not stale reports.',
    },
    {
        id: 'ux',
        icon: <Sliders size={32} strokeWidth={1.5} />,
        title: 'World-Class Connectivity Experience',
        description: 'Eliminate connectivity friction, generate branded user experiences, and create seamless checkout flows while delivering lightning-fast support.',
    }
];

export default function Audience() {
    return (
        <section className="audience-section" id="audience">
            <div className="container">
                <div className="audience-header-container">
                    <div className="section-header">
                        <Badge variant="light" dot={true}>
                            POWERING CONNECTIVITY GLOBALLY
                        </Badge>
                        <h2>Take Control of Your Telecom Business.<br />Without the Complexity and Cost.</h2>
                    </div>
                </div>

                <div className="audience-features-grid">
                    {gridData.map((item) => (
                        <div key={item.id} className="audience-grid-item">
                            <div className="audience-grid-icon">
                                {item.icon}
                            </div>
                            <h3 className="audience-grid-title">{item.title}</h3>
                            <p className="audience-grid-desc">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
