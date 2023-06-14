import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  & {
    width: 100%;
    padding: 3vh 0;
    background: ${(props) => props.theme.bg_secondary};
    transition: ${(props) => props.theme.transition};
    text-align: center;
  }
  & p {
    color: ${(props) => props.theme.white};
    position: absolute;
    left: calc(50% - 20%);
    top: 25%;
  }
  & img {
    object-fit: contain;
    max-width: 100%;
    max-height: 80vh;
  }
`;

export default function Hero() {
  return (
    <MainContainer>
      <img src="img/myHero.jpg" alt="test" />
    </MainContainer>
  );
}
