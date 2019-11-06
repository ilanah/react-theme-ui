import React from "react";
import { render } from "react-dom";

// import { ThemeProvider } from "theme-ui";
// import theme from "./theme";
import App from "./view/App";

render(
  <>
    {/* <ThemeProvider theme={theme}> */}
    {/* <GlobalStyles /> */}
    <App />
    {/* </ThemeProvider> */}
  </>,
  document.getElementById("root")
);
