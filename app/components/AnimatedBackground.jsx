"use client";
import { useState, useEffect } from "react";

export default function AnimatedBackground({ children }) {
  const [deg, setDeg] = useState(129);

  useEffect(() => {
    const interval = setInterval(() => {
      setDeg((prevDeg) => (prevDeg + 0.1) % 360);
    }, 0.1);

    return () => clearInterval(interval);
  }, []);

  return (
    <body
      className="p-3"
      style={{
        background: `linear-gradient(${deg}deg, rgba(5,6,8,1) 7%, rgba(12,20,53,1) 54%, rgba(0,0,0,1) 87%)`,
        height: "100dvh",
        transition: "background 0.1s linear",
      }}
    >
      {children}
    </body>
  );
}
