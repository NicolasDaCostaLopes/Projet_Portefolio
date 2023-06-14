import React, { useState } from "react";
import styled from "styled-components";
import Switch from "./Switch";

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 1vw;

  & img {
    height: 80%;
    cursor: pointer;
    display: none;
  }
  & ul {
    display: flex;
    gap: 20px;
    align-items: center;
  }

  & ul li a {
    color: ${(props) => props.theme.text_primary};
    text-decoration: none;
    padding: 10px 1vw;
    background: none;
    border-radius: 9999px;
    font-size: ${(props) => props.theme.dynamic_font};
  }
  & ul li a:hover {
    box-shadow: inset ${(props) => props.theme.accent} 0px 0px 5px 0px;

    transition: ${(props) => props.theme.transition_short};
  }

  @media (max-width: ${(props) => props.theme.breakpoint.md}) {
    & img {
      display: flex;
    }

    & ul {
      display: none;
    }
    & ul.visible {
      padding: 5px 0;
      display: block;
      position: fixed;
      left: 0;
      right: 0;
      top: 60px;
      background: ${(props) => props.theme.bg_primary};
      transition: ${(props) => props.theme.transition};
      border-top: 1px solid ${(props) => props.theme.text_primary};

      text-align: center;
      line-height: 2rem;
    }
    & ul li {
      height: 40px;
    }
    & ul li .toggle-switch {
      top: 6px;
    }
    /* todo animation pour l'ouverture du menu après le breakpoint */
  }
`;

export default function NavbarButtons({ toggleTheme, isDarkTheme }) {
  const [isBurgerOpen, SetIsBurgerOpen] = useState(false);
  const onClickBurger = () => {
    SetIsBurgerOpen((prev) => !prev);
  };

  return (
    <MainContainer>
      <img src="../logo192.png" alt="todo" onClick={onClickBurger} />
      <ul className={isBurgerOpen ? "visible" : null}>
        <li>
          <Switch
            toggleTheme={toggleTheme}
            isDarkTheme={isDarkTheme}
            id="todo"
          />
        </li>
        <li>
          <a href="#todo">Home</a>
        </li>
        <li>
          <a href="#todo">About</a>
        </li>
        <li>
          <a href="#todo">Projects</a>
        </li>
        <li>
          <a href="#todo">Contact</a>
        </li>
      </ul>
    </MainContainer>
  );
}
