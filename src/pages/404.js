import React from "react"
import SEO from "../components/seo"
import styled from "styled-components";

const Page = styled.div`
  max-width: 1400px;
  width: 90%;
  margin: 0 auto;
`;

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <Page>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Page>
  </>
)

export default NotFoundPage;
