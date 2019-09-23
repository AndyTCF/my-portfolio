import { Link } from "gatsby"
import React from "react"
import styled from "styled-components";
// import { spacing, colors } from "../common/variables";

const StyledFooter = styled.footer`
  height: 100px;
  margin: 0 auto;
  max-width: 1388px;
`;

const Footer = () => (
  <StyledFooter>
      Want to work with me? 
      <Link to="/contact"> Let's talk.</Link>
  </StyledFooter>
);

export default Footer;