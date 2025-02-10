import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  position: fixed;
  top: 0;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 10px;
`;

const Logo = styled.h1`
  color: #fff;
  font-size: 24px;
`;

const Navbar = () => {
  return (
    <Nav>
      <Logo>Persist Ventures</Logo>
    </Nav>
  );
};

export default Navbar;