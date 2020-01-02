import React from "react"
import styled, { css } from "styled-components";
import SEO from "../components/seo"
import { 
  colors, 
  spacing, 
  Header,
  SubHeader,
  smallScreen
 } from "../common/variables";
import emoji from "../images/myEmoji.jpg";
import scrollTo from 'gatsby-plugin-smoothscroll';


const Hero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const HeroImage = styled.img`
  width: 250px;
  height: 250px;
`;
const HeroTitle = styled.div`
  ${Header};
  padding: ${spacing.xl} 0;
  max-width: 890px;
  margin: 0 10%;
  text-align: center;
  & > span {
    color: ${colors.purple};
    font-weight: 300;
  }
  & > a {
    color: ${colors.purple};
    font-weight: 300;
  }
  ${smallScreen(css`
    font-size: 26px;
    margin-left: 5%;
`)}
`;
const SubSection = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  padding: ${spacing.l} 0;
`;
const Body = styled.div`
  background-color: ${colors.lightGray};
  display: flex;
  flex-direction: column;
  padding: ${spacing.l};
  ${smallScreen(css`
    padding: ${spacing.m};
  `)}
`;
const Text = styled.div`
  ${SubHeader};
  color: ${colors.pureBlack};
  font-weight: 300;
  padding: ${spacing.l};
  padding-left: 0;
  margin: ${spacing.l};
  ${smallScreen(css`
    padding: ${spacing.l} 0;
    font-size: 18px;
    margin: 0;
  `)}
`;
const Button = styled.a`
  background: ${colors.purple};
  padding: ${spacing.m};
  color: ${colors.pureWhite};
  border-radius: 10px;
  margin-bottom: ${spacing.l};
  cursor: pointer;
  transition: all 0.2s;
  :hover {
    transform: scale(1.025);
  }
`;
const Showcase = styled.a`
  display: flex;
  background-color: ${colors.pureWhite};
  padding: ${spacing.l};
  border: 1px solid ${colors.lightGray};
  align-items: center;
  margin: 0 ${spacing.l};
  transition: all 0.2s;
  :hover {
    transform: scale(1.025);
  }
  ${smallScreen(css`
    margin: 0;
    padding: ${spacing.m};
  `)}
`;
const ShowcaseText = styled.p`
  font-size: 18px;
  font-weight: 600;
  min-width: 250px;
  ${smallScreen(css`
    font-size: 14px;
    min-width: 150px;
  `)}
`;
const ShowcaseSubtext = styled.p`
  font-weight: 400;
  ${smallScreen(css`
    font-size: 12px;
    padding-left: 0;
  `)}
`;
const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Hero>
      <HeroImage src={emoji}/>
      <HeroTitle>
        I’m Andy Tom, a <span>product designer</span> and <span>developer </span>
        living in Sydney Australia, currently working for <a href="https://nexl.io" target="blank" >NEXL</a> and freelancing e-commerce websites on the side.
      </HeroTitle>
    </Hero>
    <SubSection>
      <Button onClick={() => scrollTo('#WORK')}>
        Discover my previous work
      </Button>
    </SubSection>
    <Body>
      <Text id="WORK">Previous Projects</Text>
        <Showcase href="https://seadeckaustralia.com" target="blank">
          <ShowcaseText>
            Seadeck Australia
          </ShowcaseText>
          <ShowcaseSubtext>
            An event company which hosts its iconic weekend party cruises around Sydney and Brisbane.
          </ShowcaseSubtext>
        </Showcase>
        <Showcase href="https://helis.network" target="blank">
          <ShowcaseText>
            Helis Network
          </ShowcaseText>
          <ShowcaseSubtext>
            Decentralized cryptocurrency platform for lending.
          </ShowcaseSubtext>
        </Showcase>
        <Showcase href="https://ua.com.au" target="blank">
          <ShowcaseText>
            Urban Agent
          </ShowcaseText>
          <ShowcaseSubtext>
            Sydney's premier event management and nightlife entertainment company.
          </ShowcaseSubtext>
        </Showcase>
        <Showcase href="https://wanab.com.au" target="blank">
          <ShowcaseText>
            WANAB Clothing
          </ShowcaseText>
          <ShowcaseSubtext>
            E-commerce streetwear brand.
          </ShowcaseSubtext>
        </Showcase>
    </Body>
  </>
);

export default IndexPage;
