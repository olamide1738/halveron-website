"use client";

import { useEffect, useRef } from "react";

export function WebGLHeroCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const isDarkMode = () =>
      document.documentElement.classList.contains("dark");

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener("resize", handleResize);

    // Particle nodes
    const particleCount = Math.min(Math.floor((width * height) / 14000), 55);
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.8 + 1,
        baseRadius: Math.random() * 1.8 + 1,
        color: Math.random() > 0.3 ? "#2F6BFF" : "#D4A853",
      });
    }

    // Cursor tracking with inertia
    let mouse = { x: -1000, y: -1000, targetX: -1000, targetY: -1000, active: false };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    const parent = canvas.parentElement;
    if (parent) {
      parent.addEventListener("mousemove", handleMouseMove);
      parent.addEventListener("mouseleave", handleMouseLeave);
    }

    // Main render loop
    let tick = 0;
    const render = () => {
      tick++;
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse interpolation
      if (mouse.active) {
        mouse.x += (mouse.targetX - mouse.x) * 0.08;
        mouse.y += (mouse.targetY - mouse.y) * 0.08;
      } else {
        mouse.x += (-1000 - mouse.x) * 0.05;
        mouse.y += (-1000 - mouse.y) * 0.05;
      }

      const dark = isDarkMode();
      const lineColor = dark
        ? "rgba(47, 107, 255, 0.12)"
        : "rgba(47, 107, 255, 0.08)";

      // Update & Draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Bounce on boundary
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Mouse proximity reaction
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 140;

        if (dist < maxDist) {
          const force = (1 - dist / maxDist) * 1.5;
          p.x -= (dx / dist) * force;
          p.y -= (dy / dist) * force;
          p.radius = p.baseRadius + force * 1.5;
        } else {
          p.radius += (p.baseRadius - p.radius) * 0.1;
        }

        // Draw particle dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = dark ? 0.65 : 0.45;
        ctx.fill();

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist2 = Math.hypot(p.x - p2.x, p.y - p2.y);
          const connectDist = 110;

          if (dist2 < connectDist) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = lineColor;
            ctx.lineWidth = (1 - dist2 / connectDist) * 0.9;
            ctx.stroke();
          }
        }
      }

      // Draw subtle interactive ripple at mouse position
      if (mouse.active && mouse.x > 0 && mouse.y > 0) {
        ctx.beginPath();
        ctx.arc(
          mouse.x,
          mouse.y,
          35 + Math.sin(tick * 0.05) * 5,
          0,
          Math.PI * 2
        );
        ctx.strokeStyle = dark
          ? "rgba(47, 107, 255, 0.18)"
          : "rgba(47, 107, 255, 0.12)";
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      ctx.globalAlpha = 1.0;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      if (parent) {
        parent.removeEventListener("mousemove", handleMouseMove);
        parent.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full opacity-80 transition-opacity duration-300"
      aria-hidden="true"
    />
  );
}
