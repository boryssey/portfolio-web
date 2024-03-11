// useWindowSize hook
"use client";
import { useState, useEffect } from "react";

export const useWindowSize = () => {
  if (typeof window !== "undefined") {
    // detect window screen width function
  }
  const [windowSize, setWindowSize] = useState<{
    width: number;
    height: number;
  }>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    if (typeof window !== "undefined") {
      handleResize();
    }
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};
