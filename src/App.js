import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import styled, { ThemeProvider } from "styled-components";
import { useState } from "react";

const darkTheme = {
  bg_primary: "rgb(20, 20, 20)",
  bg_secondary: "rgb(40, 40, 40)",
  text_primary: "rgb(235,236,240)",
  text_secondary: "#deffff",
  dynamic_font: "calc(12px + 1.8vmin)",
  white: "rgb(255,255,255)",
  accent: "cyan",
  subtitle: "#b6b6b6",
  transition_short: "all 0.25s ease",
  transition: "all 0.5s ease",
  transition_long: "all 1s ease",
  breakpoint: {
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
    xxl: "1400px",
  },
};
const lightTheme = {
  bg_primary: "#fff",
  bg_secondary: "#dddcd7",
  text_primary: "rgb(30,30,30)",
  text_secondary: "#080807",
  dynamic_font: "calc(12px + 1.8vmin)",
  white: "rgb(255,255,255)",

  accent: "#000000",
  subtitle: "#fff",
  transition_short: "all 0.25s ease",
  transition: "all 0.5s ease",
  transition_long: "all 1s ease",
  breakpoint: {
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
    xxl: "1400px",
  },
};

function App() {
  const [theme, setTheme] = useState("dark");
  const isDarkTheme = theme === "dark";
  if (isDarkTheme) {
    document.querySelector("html").classList.add("dark");
  } else {
    document.querySelector("html").classList.remove("dark");
  }

  const toggleTheme = () => {
    setTheme(isDarkTheme ? "light" : "dark");
  };

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <MainContainer className="App">
        <header>
          <Navbar toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
        </header>
        <body>
          <Hero />
        </body>
        <header className="App-header">
          <p>Test de Mode nuit en : </p>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </MainContainer>
    </ThemeProvider>
  );
}
const MainContainer = styled.div`
  .App {
    text-align: center;
  }

  .App-logo {
    height: 10vmin;
    pointer-events: none;
  }

  .App-header {
    transition: ${(props) => props.theme.transition};
    background-color: ${(props) => props.theme.bg_primary};
    min-height: calc(30vh - 10px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
    font-size: ${(props) => props.theme.dynamic_font};
  }
  .App-header p {
    color: ${(props) => props.theme.text_primary};
  }
`;
export default App;
