import { useState, useEffect } from "react";

const JKLoader = () => {
  const [current, setCurrent] = useState("J");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === "J" ? "K" : "J"));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="text-4xl font-bold text-green-600 animate-pulse"
      aria-label="Loading animation"
    >
      {current}
    </div>
  );
};

export default JKLoader;
