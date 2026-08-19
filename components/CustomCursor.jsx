"use client";

import { useEffect, useState } from "react";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only activate custom cursor on devices with fine pointer (mouse/trackpad)
    if (window.matchMedia("(pointer: fine)").matches) {
      setVisible(true);
    }

    const updateCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setVisible(true);
    const handleMouseLeave = () => setVisible(false);

    const handleLinkHover = (e) => {
      const target = e.target;
      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest("input") ||
        target.closest("textarea") ||
        target.closest("select") ||
        target.closest(".cursor-pointer")
      ) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    window.addEventListener("mousemove", updateCursor);
    window.addEventListener("mouseover", handleLinkHover);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", updateCursor);
      window.removeEventListener("mouseover", handleLinkHover);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`pointer-events-none fixed left-0 top-0 z-[9999] rounded-full transition-transform duration-100 ease-out ${
        hovered
          ? "h-10 w-10 bg-[#2F6BFF]/35 border border-[#2F6BFF] mix-blend-multiply dark:mix-blend-screen -translate-x-1/2 -translate-y-1/2 backdrop-blur-[1px]"
          : "h-3.5 w-3.5 bg-[#2F6BFF] -translate-x-1/2 -translate-y-1/2 shadow-sm"
      }`}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
      }}
      aria-hidden="true"
    />
  );
}
