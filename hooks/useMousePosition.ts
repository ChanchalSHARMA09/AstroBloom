"use client";

import { useEffect, useState } from "react";

export default function useMousePosition() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const updateMousePosition = (
      event: MouseEvent
    ) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener(
      "mousemove",
      updateMousePosition
    );

    return () =>
      window.removeEventListener(
        "mousemove",
        updateMousePosition
      );
  }, []);

  return position;
}