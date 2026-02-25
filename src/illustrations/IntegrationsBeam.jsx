import { Signal, Smartphone, Tablet, Laptop, Watch, Store } from 'lucide-react';
import spenzaSymbol from '../assets/logo/spenza-logo-symbol.jpg';
import './IntegrationsBeam.css';

export default function IntegrationsBeam() {
    const width = 600;
    const height = 400;

    const leftNode = { id: 'network', cx: 80, cy: 200, icon: <Signal />, size: 'small' };
    const centerNode = { id: 'hub', cx: 260, cy: 200, icon: <img src={spenzaSymbol} alt="Spenza" />, size: 'large center' };

    const rightNodes = [
        { id: 'r1', cx: 500, cy: 60, icon: <Smartphone />, size: 'small' },
        { id: 'r2', cx: 500, cy: 130, icon: <Tablet />, size: 'small' },
        { id: 'r3', cx: 500, cy: 200, icon: <Laptop />, size: 'small' },
        { id: 'r4', cx: 500, cy: 270, icon: <Watch />, size: 'small' },
        { id: 'r5', cx: 500, cy: 340, icon: <Store />, size: 'small' },
    ];

    const createCurve = (p1, p2) => {
        const dx = Math.abs(p2.cx - p1.cx);
        return `M ${p1.cx} ${p1.cy} C ${p1.cx + dx / 2} ${p1.cy} ${p2.cx - dx / 2} ${p2.cy} ${p2.cx} ${p2.cy}`;
    };

    const createLine = (p1, p2) => {
        return `M ${p1.cx} ${p1.cy} L ${p2.cx} ${p2.cy}`;
    };

    return (
        <div className="beam-container">
            {/* SVG Connections */}
            <svg
                className="beam-svg-layer"
                viewBox={`0 0 ${width} ${height}`}
                preserveAspectRatio="xMidYMid meet"
            >
                <defs>
                    <linearGradient id="beam-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="transparent" stopOpacity="0" />
                        <stop offset="30%" stopColor="var(--primary-color)" stopOpacity="1" />
                        <stop offset="70%" stopColor="var(--primary-color)" stopOpacity="1" />
                        <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                    </linearGradient>
                </defs>

                {/* Base Paths */}
                <path className="beam-path" d={createLine(leftNode, centerNode)} />
                {rightNodes.map((node, i) => (
                    <path key={`base-${i}`} className="beam-path" d={createCurve(centerNode, node)} />
                ))}

                {/* Animated Gradient Paths */}
                <path className="beam-gradient-path delay-1" d={createLine(leftNode, centerNode)} />
                {rightNodes.map((node, i) => (
                    <path
                        key={`anim-${i}`}
                        className={`beam-gradient-path delay-${(i % 5) + 1}`}
                        d={createCurve(centerNode, node)}
                    />
                ))}
            </svg>

            {/* HTML Nodes Wrapper matching viewBox aspect ratio exactly */}
            <div
                style={{
                    position: 'absolute',
                    width: '100%',
                    maxWidth: `${width}px`,
                    aspectRatio: `${width}/${height}`,
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    pointerEvents: 'none'
                }}
            >
                {/* Render Left Node */}
                <div
                    className={`beam-node ${leftNode.size}`}
                    style={{
                        left: `${(leftNode.cx / width) * 100}%`,
                        top: `${(leftNode.cy / height) * 100}%`,
                        transform: 'translate(-50%, -50%)',
                    }}
                >
                    {leftNode.icon}
                </div>

                {/* Render Center Node */}
                <div
                    className={`beam-node ${centerNode.size}`}
                    style={{
                        left: `${(centerNode.cx / width) * 100}%`,
                        top: `${(centerNode.cy / height) * 100}%`,
                        transform: 'translate(-50%, -50%)',
                    }}
                >
                    {centerNode.icon}
                </div>

                {/* Render Right Nodes */}
                {rightNodes.map((node, i) => (
                    <div
                        key={`node-${i}`}
                        className={`beam-node ${node.size}`}
                        style={{
                            left: `${(node.cx / width) * 100}%`,
                            top: `${(node.cy / height) * 100}%`,
                            transform: 'translate(-50%, -50%)',
                        }}
                    >
                        {node.icon}
                    </div>
                ))}
            </div>
        </div>
    );
}
