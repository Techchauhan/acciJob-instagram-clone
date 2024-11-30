'use client'
import React, { useEffect, useState } from "react";
import DesktopScreen from "./pages/desktop/page";
import MobileScreen from "./pages/mobile/page";





export default function Home() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Function to update screen size
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024); // Tailwind's `lg` breakpoint is 1024px
    };

    // Initial check and event listener
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="h-screen flex items-center justify-center">
      {isDesktop ? <DesktopScreen /> : <MobileScreen />}
    </div>
  );
}
