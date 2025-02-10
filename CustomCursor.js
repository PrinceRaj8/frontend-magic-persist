import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Cursor = styled.div`
  width: 20px;
  height: 20px;
  background: white;
  border-radius: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  pointer-events: none;
  mix-blend-mode: difference;
`;

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updatePosition);
    return () => window.removeEventListener("mousemove", updatePosition);
  }, []);

  return <Cursor style={{ top: position.y, left: position.x }} />;
};

export default CustomCursor;