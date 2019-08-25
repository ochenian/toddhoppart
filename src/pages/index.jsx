import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Logo from "../assets/svg/logo.inline.svg"
import SiteNavButton from "../assets/svg/icon-site_nav.inline.svg"
import StoryboardLink from "../assets/svg/link-storyboards.inline.svg"
import ContactLink from "../assets/svg/link-contact.inline.svg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <StyledSiteNavBtn />

    <LogoLinksContainer>
      <StyledLogo />
      <LinksContainer>
        <Link to="/storyboards/">
          <StyledStoryboardLink />
        </Link>
        <Link to="/contact/">
          <StyledContactLink />
        </Link>
      </LinksContainer>
    </LogoLinksContainer>
  </Layout>
)

const LogoLinksContainer = styled.div`
  width: 90%;
  height: 100%;
  max-width: 700px;
  margin: 0 auto;
  margin-bottom: 4em;
`

const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;

  position: relative;
  left: 42%;
  margin-top: -24%;
`

const StyledSiteNavBtn = styled(SiteNavButton)`
  display: block;

  margin: 1em;
  width: 5%;
  min-width: 30px;
  max-width: 60px;
  height: auto;
`

const StyledLogo = styled(Logo)`
  width: 90%;
  max-width: 740px;
  height: auto;
`

const StyledStoryboardLink = styled(StoryboardLink)`
  width: 50%;
  height: auto;

  &:hover path.text-color {
    fill: ${props => props.theme.color.pink};
  }
`

const StyledContactLink = styled(ContactLink)`
  width: 30%;
  height: auto;

  margin: 12px 0 0 20%;

  &:hover path.text-color {
    fill: ${props => props.theme.color.lightBlue};
  }
`

export default IndexPage
