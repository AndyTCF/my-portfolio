import React from "react"
import styled, { css } from "styled-components";
import { 
  spacing, 
  colors, 
  SubHeader, 
  RegularText,
  smallScreen
} from "../common/variables";

const StyledFooter = styled.footer`
  background: ${props => props.theme.main}
`;
const Content = styled.div`
  padding: ${spacing.xl};
  max-width: 840px;
  ${smallScreen(css`
    padding: ${spacing.l};
  `)}
`;
const Text = styled.div`
  ${SubHeader}
  color: ${props => props.theme.body};
  ${smallScreen(css`
    font-size: 20px;
  `)};
  & > a {
    color: ${colors.orange};
    font-weight: 600;
  }
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
  color: ${props => props.theme.body};
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
          Github
        </Links>
        <Links href="http://twitter.com/vndicrypto">
          Twitter
        </Links>
        <Links href="http://medium.com/@andycf">
          Medium
        </Links>
        <Links href="https://www.linkedin.com/in/andy-chen-fang/">
          Linkedin
        </Links>
      </Container>
    </Content>
  </StyledFooter>
);

export default Footer;