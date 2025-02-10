import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";

const Hero = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle, #222, #000);
`;

const Title = styled.h1`
  font-size: 4rem;
  text-transform: uppercase;
  opacity: 0;
`;

const HeroSection = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    gsap.to(titleRef.current, {
      opacity: 1,
      y: -20,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <Hero>
      <Title ref={titleRef}>Supernova in Bloom</Title>
    </Hero>
  );
};

export default HeroSection;