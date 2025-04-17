import { useEffect, useRef } from "react";
import createGlobe from "cobe";

const Globe = () => {
  const canvasRef = useRef();
  const pointerInteracting = useRef(false);
  const pointerInteractionMovement = useRef(0);
  const phi = useRef(0);
  const velocity = useRef(0);

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
      baseColor: [0.1, 0.6, 1],
      markerColor: [1, 1, 1],
      glowColor: [0.37, 0.839, 0.965],
      markers: [
        // { location: [23.0225, 72.5714], size: 0.1 }, // Ahmedabad
        { location: [23.2156, 72.6369], size: 0.1 }, // Gandhinagar
      ],
      onRender: (state) => {
        if (!pointerInteracting.current) {
          phi.current += 0.005;
        } else {
          phi.current += velocity.current;
          velocity.current *= 0.95; // gradual slowdown
        }

        state.phi = phi.current;
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

    // Mouse / Pointer events for drag interaction
    const handlePointerDown = (e) => {
      pointerInteracting.current = true;
      pointerInteractionMovement.current = e.clientX;
    };

    const handlePointerMove = (e) => {
      if (pointerInteracting.current) {
        const delta = e.clientX - pointerInteractionMovement.current;
        pointerInteractionMovement.current = e.clientX;
        velocity.current = delta * 0.002; // control drag sensitivity
      }
    };

    const handlePointerUp = () => {
      pointerInteracting.current = false;
    };

    const canvas = canvasRef.current;
    canvas.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);

    return () => {
      globe.destroy();
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
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
