/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "react-router-dom";
// import styled from "styled-components";

const MainNav = () => (
  <ul
    sx={{
      display: "flex",
      listStyleType: "none",
      fontFamily: "heading",
      fontWeight: 400,
      fontSize: "2.8rem",
      width: "30rem",
      justifyContent: "space-between"
    }}
  >
    <li>
      <Link to="/" className="nav-link" sx={linkStyle}>
        Home
      </Link>
    </li>
    <li>
      <Link to="/browse" className="nav-link" sx={linkStyle}>
        Browse
      </Link>
    </li>
    <li>
      <Link to="/create" className="nav-link" sx={linkStyle}>
        Create
      </Link>
    </li>
  </ul>
);
export default MainNav;

const linkStyle = {
  color: "white",
  textDecoration: "none"
  // &:hover {
  //   textDecoration: 'underline'
  // }
};
