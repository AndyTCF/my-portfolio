import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components";
import { spacing, colors } from "../common/variables";
import ProfilePic from "../images/favicon.png";

const StyledHeader = styled.header` 
  height: 100px;
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  maxWidth: 960;
  padding: 0px 1.0875rem 1.45rem;
  paddingTop: 0;
`;
const Box = styled.div`

`;
const StyledLink = styled(Link)`
  color: ${colors.pureBlack};
  text-decoration: none;
  margin: 0 ${spacing.m};
  font-weight: 600;
`;
const Image = styled.img`
  width: 50px;
`;

const Header = ({ siteTitle }) => (
  <StyledHeader>
      <Image src={ProfilePic} alt="Andy Tom's profile display"/>
      <Box>
        <StyledLink to="/" >
          {siteTitle}
        </StyledLink>
      </Box>
      <Box>
        <StyledLink to="/">Work</StyledLink>
        <StyledLink to="/">Contact</StyledLink>
      </Box>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
