import React from "react"
import styled, { css } from "styled-components";
import { 
  spacing, 
  colors, 
  SubHeader, 
  RegularText,
  smallScreen
} from "../common/variables";
import githubIcon from "../images/icon-github.png";
import twitterIcon from "../images/icon-twitter.png";
import mediumIcon from "../images/icon-medium.png";
import linkedinIcon from "../images/icon-linkedin.png";

const StyledFooter = styled.footer`
  height: 200px;
  width: 90%;
  margin: 0 auto;
  max-width: 1400px;
`;
const Content = styled.div`
  padding: ${spacing.xl};
  ${smallScreen(css`
    padding: ${spacing.l};
  `)}
`;
const Text = styled.div`
  ${SubHeader}
  ${smallScreen(css`
    font-size: 20px;
  `)};
  & > a {
    color: ${colors.orange};
    font-weight: 600;
  }
`;
const Icon = styled.img`
  margin: ${spacing.s};
  width: ${props => props.github ? "35px" : "40px"};
  ${smallScreen(css`
    width: ${props => props.github ? "25px" : "30px"};
  `)}
`;
const Container = styled.div`
  padding: ${spacing.m} 0;
  display: flex;
  align-items: center;
  ${smallScreen(css`
    flex-wrap: wrap;
  `)}
`;
const Links = styled.a`
  ${RegularText}
  align-items: center;
  display: flex;
  width: 150px;
  cursor: pointer;
  ${smallScreen(css`
    font-size: 14px;
    width: 50%;
  `)}
`;

const Footer = () => (
  <StyledFooter id="CONTACT">
    <Content>
      <Text>Want to work with me?  <a href="mailto:andyteechenfang@gmail.com"> Let's Talk.</a>  </Text>
      <Container>
        <Links href="http://medium.com/AndyTCF">
          <Icon github src={githubIcon} alt="link to github"/>
          Github
        </Links>
        <Links href="http://twitter.com/vndicrypto">
          <Icon src={twitterIcon} alt="link to twitter"/>
          Twitter
        </Links>
        <Links href="http://medium.com/@andycf">
          <Icon src={mediumIcon} alt="link to medium"/>
          Medium
        </Links>
        <Links href="https://www.linkedin.com/in/andy-chen-fang/">
          <Icon src={linkedinIcon} alt="link to linkedin"/>
          Linkedin
        </Links>
      </Container>
    </Content>
  </StyledFooter>
);

export default Footer;