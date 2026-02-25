import React from "react";
import { Smartphone, Watch, Tablet, Laptop, Tv, Speaker } from "lucide-react";
import OrbitingCircles from "./OrbitingCircles";
import "./ConnectingDevices.css";

export default function ConnectingDevices() {
    return (
        <div className="devices-illustration-container">
            <span className="devices-text">
                Spenza
            </span>

            {/* Inner Circle */}
            <OrbitingCircles
                className="size-[30px] border-none bg-transparent"
                duration={20}
                delay={20}
                radius={80}
            >
                <Smartphone color="#EA580C" />
            </OrbitingCircles>
            <OrbitingCircles
                className="size-[30px] border-none bg-transparent"
                duration={20}
                delay={10}
                radius={80}
            >
                <Watch color="#EA580C" />
            </OrbitingCircles>

            {/* Outer Circle (reversed) */}
            <OrbitingCircles
                className="size-[50px] border-none bg-transparent"
                radius={190}
                duration={20}
                reverse
            >
                <Tablet color="#EA580C" />
            </OrbitingCircles>
            <OrbitingCircles
                className="size-[50px] border-none bg-transparent"
                radius={190}
                duration={20}
                delay={5}
                reverse
            >
                <Laptop color="#EA580C" />
            </OrbitingCircles>
            <OrbitingCircles
                className="size-[50px] border-none bg-transparent"
                radius={190}
                duration={20}
                delay={10}
                reverse
            >
                <Tv color="#EA580C" />
            </OrbitingCircles>
            <OrbitingCircles
                className="size-[50px] border-none bg-transparent"
                radius={190}
                duration={20}
                delay={15}
                reverse
            >
                <Speaker color="#EA580C" />
            </OrbitingCircles>
        </div>
    );
}
