import React from "react";
import "./OrbitingCircles.css";

export default function OrbitingCircles({
    className = "",
    children,
    reverse,
    duration = 20,
    delay = 0,
    radius = 50,
    path = true,
    iconSize = 40,
}) {
    return (
        <>
            {path && (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="fixed"
                    className="orbiting-svg"
                >
                    <circle
                        className="orbiting-path"
                        cx="50%"
                        cy="50%"
                        r={radius}
                        fill="none"
                    />
                </svg>
            )}

            <div
                style={{
                    "--duration": duration,
                    "--radius": radius,
                    "--delay": -delay,
                    "--icon-size": `${iconSize}px`,
                }}
                className={`orbiting-container ${reverse ? "orbiting-reverse" : ""} ${className}`}
            >
                {children}
            </div>
        </>
    );
}
