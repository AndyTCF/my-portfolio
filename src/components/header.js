import React from "react"
import styled from "styled-components";
import { spacing, SubText, Page, colors } from "../common/variables";
import scrollTo from 'gatsby-plugin-smoothscroll';

const StyledHeader = styled.header` 
  height: 100px;
  background: ${props => props.theme.main};
`;
const Content = styled.div`
  ${Page};
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Container = styled.div`
  display: flex;
`;
const StyledLink = styled.div`
  ${SubText};
  color: ${props => props.theme.body};
  font-weight: ${props => props.bold ? 600 : 400};
  text-align: center;
  margin: 0 ${spacing.m};
  cursor: pointer;
  transition: all 0.2s;

  :hover {
    color: ${colors.purple};
  }
`;

export default class Header extends React.Component {
  render() {
    return (
      <StyledHeader>
        <Content>
          <StyledLink to="/" >
            <StyledLink bold>Andy Tom</StyledLink>
          </StyledLink>
          <Container>
            <StyledLink onClick={() => scrollTo('#WORK')}>Work</StyledLink>
            <StyledLink onClick={() => scrollTo('#CONTACT')}>Contact</StyledLink>
          </Container>
        </Content>
      </StyledHeader>
    );
  }
}