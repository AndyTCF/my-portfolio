import React from "react"
import styled, { css } from "styled-components";
import { 
  spacing, 
  colors, 
  SubHeader, 
  RegularText,
  SubTitle,
  Page,
  smallScreen
} from "../common/variables";

const StyledFooter = styled.footer`
  background: ${props => props.theme.main}
`;
const Content = styled.div`
  ${Page};
  padding: ${spacing.l};
`;
const Text = styled.div`
  ${SubHeader}
  color: ${props => props.theme.body};
  padding: ${spacing.m} 0;
  ${smallScreen(css`
    font-size: 22px;
    text-align: center;
  `)}
  & > a {
    color: ${colors.orange};
  }
`;
const Container = styled.div`
  padding: ${spacing.s} 0;
  display: flex;
  align-items: center;
  ${smallScreen(css`
    flex-wrap: wrap;
    text-align: center;
    justify-content: center;
  `)}
`;
const Links = styled.a`
  ${RegularText}
  width: 150px;
  cursor: pointer;
  color: ${props => props.theme.body};
  margin: ${spacing.xs} 0;
  ${smallScreen(css`
    font-size: 14px;
  `)}
`;
const SubText = styled.div`
  padding: ${spacing.m} 0;
  text-align: center;
  ${SubTitle};
  color: ${props => props.theme.body};
  ${smallScreen(css`
    font-size: 10px;
  `)}
`

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
      <SubText>© Andy Tom. Made with gatsby and love (find the src code in my github).</SubText>
    </Content>
  </StyledFooter>
);

export default Footer;