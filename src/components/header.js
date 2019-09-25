import React from "react"
import styled from "styled-components";
import { spacing, colors, SubText } from "../common/variables";
import ProfilePic from "../images/favicon.png";
import scrollTo from 'gatsby-plugin-smoothscroll';

const StyledHeader = styled.header` 
  height: 100px;
  width: 90%;
  margin: 0 auto;
  max-width: 1400px;
  align-items: center;
  display: flex;
  justify-content: space-between;
`;
const Container = styled.div`
  display: flex;
`;
const StyledLink = styled.div`
  ${SubText};
  color: ${colors.pureBlack};
  text-align: center;
  margin: 0 ${spacing.m};
  cursor: pointer;
`;
const Image = styled.img`
  width: 50px;
`;

const Header = () => (
  <StyledHeader>
      <StyledLink to="/" >
        <Image src={ProfilePic} alt="Andy Tom's profile display"/>
      </StyledLink>
      <Container>
        <StyledLink onClick={() => scrollTo('#WORK')}>Work</StyledLink>
        <StyledLink onClick={() => scrollTo('#CONTACT')}>Contact</StyledLink>
      </Container>
  </StyledHeader>
);

export default Header;
