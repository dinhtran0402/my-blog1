import { Container, createMuiTheme, ThemeProvider } from "@material-ui/core";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/index";
import RouteUrl from "./components/routeURL/routeURL";

function App() {
  const [themeMode, setThemeMode] = React.useState("dark");
  const theme = createMuiTheme({
    palette: {
      type: themeMode,
      primary: {
        main: themeMode === "dark" ? "#7FFFD4" : "#48D1CC",
      },
    },
  });

  const handleLightMode = () => {
    document.querySelector("body").style.background = "#FFFAFA";
    setThemeMode("light");
  };
  const handleDarkMode = () => {
    document.querySelector("body").style.background = "#111";
    setThemeMode("dark");
  };
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Container
          className={themeMode === "dark" ? "dark-mode" : "light-mode"}
        >
          <Header
            themeMode={themeMode}
            lightMode={handleLightMode}
            darkMode={handleDarkMode}
          ></Header>
          <RouteUrl></RouteUrl>
        </Container>
      </ThemeProvider>
    </Router>
  );
}

export default App;
