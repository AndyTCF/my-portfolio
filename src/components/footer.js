import React from "react"
import styled from "styled-components";
import { spacing, colors, SubHeader } from "../common/variables";
import githubIcon from "../images/icon-github.png";
import twitterIcon from "../images/icon-twitter.png";
import mediumIcon from "../images/icon-medium.png";

const StyledFooter = styled.footer`
  height: 200px;
`;
const Content = styled.div`
  margin: 0 auto;
  max-width: 1388px;
  padding: ${spacing.xl};
  
`;
const Text = styled.div`
  ${SubHeader}
  & > a {
    color: ${colors.orange};
    font-weight: 600;
  }
`;
const Icon = styled.img`
  margin: ${spacing.xs};
`;
const Container = styled.div`
  padding: ${spacing.m} 0;
  display: flex;
  align-items: center;
`;

const Footer = () => (
  <StyledFooter>
    <Content>
      <Text>Want to work with me?  <a href="mailto:andyteechenfang@gmail.com"> Let's Talk.</a>  </Text>
      <Container>
        <Icon src={githubIcon}/>
        <Icon src={twitterIcon}/>
        <Icon src={mediumIcon}/>
      </Container>
    </Content>
  </StyledFooter>
);

export default Footer;