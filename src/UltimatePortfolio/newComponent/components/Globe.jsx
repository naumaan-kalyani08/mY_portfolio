import { useEffect, useRef } from "react";
import createGlobe from "cobe";

const Globe = () => {
  const canvasRef = useRef();
  const pointerInteracting = useRef(false);
  const pointerInteractionMovement = useRef(0);
  const phi = useRef(0);

  useEffect(() => {
    let width = 0;
    let globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 0,
      height: 0,
      phi: 0,
      theta: 0.3,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [1, 1, 1],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        { location: [37.7749, -122.4194], size: 0.1 }, // San Francisco
        { location: [48.8566, 2.3522], size: 0.1 }, // Paris
      ],
      onRender: (state) => {
        state.phi = phi.current;
        phi.current += 0.005;
        state.width = width * 2;
        state.height = width * 2;
      },
    });

    const handleResize = () => {
      width = canvasRef.current.offsetWidth;
      globe.resize();
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      globe.destroy();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div style={{ width: 600, height: 600 }}>
      <canvas
        ref={canvasRef}
        style={{ width: "100%", height: "100%", cursor: "grab" }}
      />
    </div>
  );
};

export default Globe;
