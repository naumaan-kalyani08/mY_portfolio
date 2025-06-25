import { useEffect, useState } from "react";

const ScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const updateScrollProgress = () => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    setScrollProgress(scrollPercent);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "4px",
        // backgroundColor: "#e0e0e014",
        backgroundColor: "rgb(255 255 255 / 3%)",
        backdropFilter: "blur(2.9px)",
        zIndex: 9999,
      }}
    >
      <div
        style={{
          height: "100%",
          width: `${scrollProgress}%`,
          backgroundColor: "#5fd6f6", // Tailwind blue-500
          transition: "width 0.25s ease-out",
        }}
      />
    </div>
  );
};

export default ScrollProgressBar;
