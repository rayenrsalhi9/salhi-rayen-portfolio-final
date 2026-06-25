import { useEffect, useRef } from "react";

interface FlickeringGridProps {
  squareSize?: number;
  gridGap?: number;
  flickerChance?: number;
  maxOpacity?: number;
  className?: string;
}

export function FlickeringGrid({
  squareSize = 2,
  gridGap = 2,
  flickerChance = 0.3,
  maxOpacity = 0.3,
  className,
}: FlickeringGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let squares: { opacity: number; target: number }[] = [];
    let cols = 0;
    let rows = 0;

    const getColor = () => {
      return document.documentElement.classList.contains("dark") ? "255, 255, 255" : "0, 0, 0";
    };

    let color = getColor();

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;

      cols = Math.max(1, Math.floor(canvas.width / (squareSize + gridGap)));
      rows = Math.max(1, Math.floor(canvas.height / (squareSize + gridGap)));

      squares = Array.from({ length: cols * rows }, () => ({
        opacity: Math.random() * maxOpacity,
        target: Math.random() * maxOpacity,
      }));
    };

    resize();

    const observer = new ResizeObserver(resize);
    if (canvas.parentElement) observer.observe(canvas.parentElement);

    const classObserver = new MutationObserver(() => {
      color = getColor();
    });
    classObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < squares.length; i++) {
        const sq = squares[i];
        const col = i % cols;
        const row = Math.floor(i / cols);
        const x = col * (squareSize + gridGap);
        const y = row * (squareSize + gridGap);

        if (Math.random() < flickerChance * 0.01) {
          sq.target = Math.random() * maxOpacity;
        }

        sq.opacity += (sq.target - sq.opacity) * 0.1;

        ctx.fillStyle = `rgba(${color}, ${sq.opacity})`;
        ctx.fillRect(x, y, squareSize, squareSize);
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      observer.disconnect();
      classObserver.disconnect();
    };
  }, [squareSize, gridGap, flickerChance, maxOpacity]);

  return (
    <canvas ref={canvasRef} className={`pointer-events-none absolute inset-0 ${className ?? ""}`} />
  );
}
