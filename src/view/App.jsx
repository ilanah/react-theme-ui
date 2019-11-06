/** @jsx jsx */
import { jsx, ThemeProvider } from "theme-ui";
import theme from "../theme";

import { BrowserRouter, Route } from "react-router-dom";

import TopBar from "./TopBar";
import HomePage from "./HomePage";
import RoboBrowser from "./RoboBrowser";
import CreateBot from "./CreateBot";
import { RoboProvider } from "../state/Robo.store";

import MainNav from "./MainNav";

export default () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <div
        sx={{
          fontFamily: "body",
          color: "text",
          bg: "background"
        }}
      >
        <TopBar>
          <MainNav />
        </TopBar>

        <Route exact path="/" component={HomePage} />

        <RoboProvider>
          <Route path="/browse" component={RoboBrowser} />
          <Route path="/create" component={CreateBot} />
        </RoboProvider>
      </div>
    </ThemeProvider>
  </BrowserRouter>
);
// export default props =>
//   <ThemeProvider theme={theme}>
//     {props.children}
//   </ThemeProvider>
