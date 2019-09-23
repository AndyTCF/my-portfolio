import React from "react"
// import { Link } from "gatsby"
import styled from "styled-components";
import Layout from "../components/layout"
import SEO from "../components/seo"
import { colors, spacing, 
  Header,
  Subtext
 } from "../common/variables";
import NexlLogo from "../images/nexl-icon.png";
import HelisLogo from "../images/helis-network-logo.png";

const Hero = styled.div`
  ${Header};
  padding: ${spacing.l} 0;
  & > span {
    color: ${colors.purple};
    font-weight: 300;
  }
`;
const SubSection = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${spacing.l} 0;
`;
const LogoContainer = styled.div`
  ${Subtext};
  color: ${colors.gray};
  display: flex;
  flex-direction: column;
  & > a { 
    text-decoration: none;
  }
`;
const Logo = styled.img`
  max-width: 160px;
  padding: ${spacing.m} 0;
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
  </Layout>
)

export default IndexPage
