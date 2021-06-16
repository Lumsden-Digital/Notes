import { useState, useEffect } from "react";
import "./styles.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Create from "./pages/Create";
import Notes from "./pages/Notes";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { green, yellow } from "@material-ui/core/colors";

export default function App() {
  const theme = createMuiTheme({
    palette: {
      primary: green,
      secondary: yellow
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Route exact path="/" component={Notes} />
        <Route path="/create" component={Create} />
      </Router>
    </ThemeProvider>
  );
}
