/** @jsx jsx */
import { jsx } from "theme-ui";
import { Box, Image, Heading } from "rebass";
// import styled, { keyframes } from "styled-components";
// import { darken } from "polished";

export default ({ props, children }) => (
  <Box
    sx={{
      // applies width 100% to all viewport widths,
      // width 50% above the first breakpoint,
      // and 25% above the next breakpoint
      // width: ['100%', '50%', '25%'],
      width: "100%",
      height: "70px",
      background: "background",
      padding: "20px",
      color: "text",
      position: "fixed",
      top: 0,
      left: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around"
    }}
  >
    <Heading
      sx={{
        fontWeight: "bold",
        fontSize: 4, // picks up value from `theme.fontSizes[4]`
        color: "primary", // picks up value from `theme.colors.primary`
        fontFamily: "heading",
        cursor: "pointer",
        userSelect: "none"
      }}
    >
      {children}
    </Heading>
    <Image src={logo_url} alt="logo" sx={{ height: "3rem" }} />
  </Box>
);

const logo_url =
  "https://uploads.codesandbox.io/uploads/user/b530393c-d101-446c-989c-a409634813dd/7MID-logo.svg";

// const Logo = styled.img`
//   height: 5rem;
//   animation: ${spin} 2s linear infinite;
// `;
