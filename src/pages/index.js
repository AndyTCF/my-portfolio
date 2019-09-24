import React from "react"
// import { Link } from "gatsby"
import styled from "styled-components";
import Layout from "../components/layout"
import SEO from "../components/seo"
import { colors, spacing, 
  Header,
  Subtext,
  SubHeader
 } from "../common/variables";
import NexlLogo from "../images/nexl-icon.png";
import HelisLogo from "../images/helis-network-logo.png";
import eightExShowcase from "../images/eightExShowcase.png";
import seadeckShowcase from "../images/seadeckShowcase.png";
import uaShowcase from "../images/uaShowcase.png";
import { DisplayBox } from "../components/displayBox";

const Hero = styled.div`
  ${Header};
  padding: ${spacing.xl} 0;
  margin: 0 auto;
  max-width: 1388px;
  & > span {
    color: ${colors.orange};
    font-weight: 300;
  }
`;
const SubSection = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${spacing.l} 0;
  margin: 0 auto;
  max-width: 1388px;
`;
const LogoContainer = styled.div`
  ${Subtext};
  color: ${colors.gray};
  display: flex;
  flex-direction: column;
  & > a { 
  }
`;
const Logo = styled.img`
  max-width: 180px;
  padding: ${spacing.m} 0;
`;
const Body = styled.div`
  background-color: ${colors.lightGray};
  display: flex;
  flex-wrap: wrap;
  padding: ${spacing.xl};
`;
const Text = styled.div`
  ${SubHeader};
  color: ${colors.gray};
  font-weight: 300;
  padding: ${spacing.l};
`;
const Row = styled.div`
  display: flex;
  justify-content: center;
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero>- I’m Andy Tom, a <span>product designer</span> and <span>developer </span>
     living in Sydney Australia, currently working for <span>NEXL</span>.
    </Hero>
    <SubSection>
      <LogoContainer>
        Currently
        <a href="http://www.nexl.io">
          <Logo src={NexlLogo} alt="Logo of the NEXL company"/>
        </a>
      </LogoContainer>
      <LogoContainer>
        Previously
        <a href="http://www.helis.network">
          <Logo href="helis.network" src={HelisLogo} alt="Logo of the Helis Network company"/>
        </a>
      </LogoContainer>
    </SubSection>
    <Body>
      <Text>Previous Projects</Text>
      <Row>
        <DisplayBox
          image={eightExShowcase}
          copy="8xProtocol Payment Solutions (Now Helis Network)"
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
  </Layout>
)

export default IndexPage
