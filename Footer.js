import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  width: 100%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  text-align: center;
  padding: 20px 0;
  position: fixed;
  bottom: 0;
  left: 0;
`;

const FooterText = styled.p`
  color: white;
  font-size: 16px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>© 2025 Persist Ventures | All Rights Reserved</FooterText>
    </FooterContainer>
  );
};

export default Footer;