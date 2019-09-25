import React from "react"
import styled from "styled-components";
import { spacing, SubText } from "../common/variables";
import ProfilePic from "../images/favicon.png";
import scrollTo from 'gatsby-plugin-smoothscroll';
import Toggle from 'react-styled-toggle';
// import { useTheme } from "./layout";

const StyledHeader = styled.header` 
  height: 100px;
  background: ${props => props.theme.main};
`;
const Content = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
  max-width: 1400px;
`;
const Container = styled.div`
  display: flex;
`;
const StyledLink = styled.div`
  ${SubText};
  color: ${props => props.theme.body};
  text-align: center;
  margin: 0 ${spacing.m};
  cursor: pointer;
`;
const Image = styled.img`
  width: 50px;
`;

// const themeState = useTheme();
export default class Header extends React.Component {
  toggleSwitch = () => {
    // themeState.toggle();
  }
  render() {
    return (
      <StyledHeader>
        <Content>
          <StyledLink to="/" >
            <Image src={ProfilePic} alt="Andy Tom's profile display"/>
          </StyledLink>
          <Container>
            <StyledLink onClick={() => scrollTo('#WORK')}>Work</StyledLink>
            <StyledLink onClick={() => scrollTo('#CONTACT')}>Contact</StyledLink>
            <Toggle checked={false} onChange={this.toggleSwitch}/>
          </Container>
        </Content>
      </StyledHeader>
    );
  }
}