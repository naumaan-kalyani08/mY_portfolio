import { useEffect, useRef } from "react";
import createGlobe from "cobe";

const Globe = () => {
  const canvasRef = useRef();
  const pointerInteracting = useRef(false);
  const pointerInteractionMovementX = useRef(0);
  const pointerInteractionMovementY = useRef(0);
  const phi = useRef(0);
  const theta = useRef(0.3);
  const velocityX = useRef(0);
  const velocityY = useRef(0);

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
        { location: [23.2156, 72.6369], size: 0.1 }, // Gandhinagar
      ],
      onRender: (state) => {
        if (!pointerInteracting.current) {
          phi.current += 0.005;
        } else {
          phi.current += velocityX.current;
          theta.current += velocityY.current;

          velocityX.current *= 0.95;
          velocityY.current *= 0.95;
        }

        // Clamp vertical rotation to avoid flipping over
        theta.current = Math.max(
          -Math.PI / 2,
          Math.min(Math.PI / 2, theta.current)
        );

        state.phi = phi.current;
        state.theta = theta.current;
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

    const handlePointerDown = (e) => {
      pointerInteracting.current = true;
      pointerInteractionMovementX.current = e.clientX;
      pointerInteractionMovementY.current = e.clientY;
    };

    const handlePointerMove = (e) => {
      if (pointerInteracting.current) {
        const deltaX = e.clientX - pointerInteractionMovementX.current;
        const deltaY = e.clientY - pointerInteractionMovementY.current;

        pointerInteractionMovementX.current = e.clientX;
        pointerInteractionMovementY.current = e.clientY;

        velocityX.current = deltaX * 0.002;
        velocityY.current = deltaY * 0.002;
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
    <div className="globe-container">
      <canvas
        ref={canvasRef}
        style={{ width: "100%", height: "100%", cursor: "grab" }}
      />
    </div>
  );
};

export default Globe;
