import React, { useEffect, useRef, useState } from "react";
import createGlobe from "cobe";

export default function Globe({ className = "", config = {} }) {
    const canvasRef = useRef(null);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        let phi = 0;

        // Default Spenza globe configuration matching MagicUI style
        const globeConfig = {
            devicePixelRatio: 2,
            width: width * 2,
            height: width * 2,
            phi: 0,
            theta: 0.3,
            dark: 0,
            diffuse: 0.4,
            mapSamples: 16000,
            mapBrightness: 1.2,
            baseColor: [1, 1, 1],
            markerColor: [234 / 255, 88 / 255, 12 / 255], // #EA580C (Spenza Primary)
            glowColor: [1, 1, 1],
            markers: [
                { location: [37.7595, -122.4367], size: 0.03 },
                { location: [40.7128, -74.006], size: 0.1 },
                { location: [51.5074, -0.1278], size: 0.05 },
                { location: [35.6895, 139.6917], size: 0.08 },
                { location: [-33.8688, 151.2093], size: 0.05 },
                { location: [28.6139, 77.209], size: 0.07 },
            ],
            onRender: (state) => {
                state.phi = phi;
                phi += 0.005;
            },
            ...config
        };

        let globe;
        if (width > 0 && canvasRef.current) {
            globe = createGlobe(canvasRef.current, globeConfig);
        }

        return () => {
            if (globe) globe.destroy();
        };
    }, [width, config]);

    useEffect(() => {
        const onResize = () => {
            if (canvasRef.current) {
                setWidth(canvasRef.current.offsetWidth);
            }
        };
        window.addEventListener("resize", onResize);
        onResize();

        setTimeout(() => onResize(), 100);

        return () => {
            window.removeEventListener("resize", onResize);
        };
    }, []);

    return (
        <div className={`spenza-globe-wrapper ${className}`} style={{ width: '100%', maxWidth: '600px', aspectRatio: 1, position: 'relative', margin: '0 auto' }}>
            <canvas
                ref={canvasRef}
                style={{
                    width: "100%",
                    height: "100%",
                    contain: "layout paint size",
                    opacity: width > 0 ? 1 : 0,
                    transition: "opacity 1s ease",
                }}
            />
        </div>
    );
}
