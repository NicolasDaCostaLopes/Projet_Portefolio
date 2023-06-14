import React from "react";
import styled from "styled-components";
import NavbarButtons from "./NavBarButtons";

const MainContainer = styled.div`
  transition: ${(props) => props.theme.transition};
  color: ${(props) => props.theme.accent};
  background: red;
  z-index: 2;
  height: 60px;
  display: flex;
  position: fixed;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => props.theme.bg_primary};
  box-shadow: ${(props) => props.theme.accent} -1px -5px 16px 6px;
`;

const Leftdiv = styled.div`
  font-size: 1.5rem;
  font-size: ${(props) => props.theme.dynamic_font};
  & span {
    color: ${(props) => props.theme.text_secondary};
  }
  padding: 0 5vw;
`;

// To push the body from under the Navbar
const Hiddendiv = styled.div`
  height: 60px;
`;

export default function Navbar({ toggleTheme, isDarkTheme }) {
  return (
    <React.Fragment>
      <MainContainer>
        <Leftdiv className="leftDiv">
          <span>todo animate this</span>
        </Leftdiv>
        <NavbarButtons toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
      </MainContainer>
      <Hiddendiv />
    </React.Fragment>
  );
}
