import React from "react";
import "./OrbitingCircles.css";

export function OrbitingCircles({
    className = "",
    children,
    reverse = false,
    duration = 20,
    delay = 0,
    radius = 160,
    path = true,
    iconSize = 30,
    speed = 1,
}) {
    const childCount = React.Children.count(children);
    const calculatedDuration = duration / speed;

    return (
        <>
            {path && (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    className="orbiting-circles-svg"
                >
                    <circle
                        className="orbiting-circles-path"
                        cx="50%"
                        cy="50%"
                        r={radius}
                        fill="none"
                    />
                </svg>
            )}

            {React.Children.map(children, (child, index) => {
                // Distribute items evenly around the circle using negative animation delay
                const angleDelay = -(calculatedDuration / childCount) * index;

                return (
                    <div
                        style={{
                            "--duration": calculatedDuration,
                            "--radius": radius,
                            "--delay": angleDelay - delay,
                            "--icon-size": `${iconSize}px`,
                        }}
                        className={`orbiting-circle-item ${reverse ? "reverse" : ""} ${className}`}
                    >
                        {child}
                    </div>
                );
            })}
        </>
    );
}
