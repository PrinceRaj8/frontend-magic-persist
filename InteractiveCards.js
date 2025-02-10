import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 50px;
`;

const Card = styled(motion.div)`
  width: 300px;
  height: 400px;
  background: linear-gradient(135deg, #ff416c, #ff4b2b);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
  color: white;
`;

const InteractiveCards = () => {
  return (
    <CardContainer>
      <Card whileHover={{ scale: 1.1, rotateY: 15 }}>Experience</Card>
      <Card whileHover={{ scale: 1.1, rotateY: -15 }}>Innovation</Card>
      <Card whileHover={{ scale: 1.1, rotateY: 15 }}>Creativity</Card>
    </CardContainer>
  );
};

export default InteractiveCards;