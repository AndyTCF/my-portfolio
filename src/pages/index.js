import React from "react"
import styled, { css } from "styled-components";
import SEO from "../components/seo"
import { 
  colors, 
  spacing, 
  Header,
  SubText,
  SubHeader,
  smallScreen
 } from "../common/variables";
import NexlLogo from "../images/nexl-icon.png";
import HelisLogo from "../images/helis-network-logo.png";
import eightExShowcase from "../images/eightExShowcase.jpg";
import seadeckShowcase from "../images/seadeckShowcase.jpg";
import uaShowcase from "../images/uaShowcase.jpg";
import { DisplayBox } from "../components/displayBox";

const Hero = styled.div`
  background: ${props => props.theme.main};
`;
const HeroTitle = styled.div`
  ${Header};
  padding: ${spacing.xl} 0;
  color: ${props => props.theme.body};
  max-width: 840px;
  margin: 0 10%;
  & > span {
    color: ${colors.orange};
    font-weight: 300;
  }
  ${smallScreen(css`
    font-size: 26px;
    margin-left: 5%;
`)}
`;
const SubSection = styled.div`
  display: flex;
  padding: ${spacing.l} 0;
  background: ${props => props.theme.main};
`;
const LogoContainer = styled.div`
  ${SubText};
  ${smallScreen(css`
    font-size: 14px;
    margin-left: 32px;
  `)}
  color: ${colors.gray};
  display: flex;
  width: 50%;
  flex-direction: column;
  margin-left: 10%;
`;
const Logo = styled.img`
  max-width: ${props => props.helis ? "60px" : "170px"};
  padding: ${spacing.m} 0;
  cursor: pointer;
  ${smallScreen(css`
    max-width: ${props => props.helis ? "30px" : "80px"};
  `)}
`;
const Body = styled.div`
  background-color: ${props => props.theme.portfolioBackground};
  display: flex;
  flex-wrap: wrap;
  padding: ${spacing.xl};
  ${smallScreen(css`
    padding: ${spacing.m};
  `)}
`;
const Text = styled.div`
  ${SubHeader};
  color: ${colors.gray};
  font-weight: 300;
  padding: ${spacing.l};
  ${smallScreen(css`
    padding: ${spacing.m};
    font-size: 18px;
  `)}
`;
const Row = styled.div`
  display: flex;
  justify-content: space-around;
`;

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Hero>
      <HeroTitle>
        - I’m Andy Tom, a <span>product designer</span> and <span>developer </span>
        living in Sydney Australia, currently working for <span>NEXL</span>.
      </HeroTitle>
    </Hero>
    <SubSection>
      <LogoContainer>
        Currently
          <Logo onClick={() => window.location.href="http://www.nexl.io"} src={NexlLogo} alt="Logo of the NEXL company"/>
      </LogoContainer>
      <LogoContainer>
        Previously
          <Logo helis onClick={() => window.location.href="http://www.helis.network"} src={HelisLogo} alt="Logo of the Helis Network company"/>
      </LogoContainer>
    </SubSection>
    <Body>
      <Text id="WORK">Previous Projects</Text>
      <Row>
        <DisplayBox
          image={eightExShowcase}
          copy="8x Protocol"
        />
        <DisplayBox
          image={seadeckShowcase}
          copy="Seadeck Australia"
          link="http://www.seadeckaustralia.com"
        />
      </Row>
      <Row>
        <DisplayBox
          image={uaShowcase}
          copy="Urban Agent"
          link="http://ua.com.au"
        />
      </Row>
    </Body>
  </>
);

export default IndexPage;
