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
    <StyledLogo />
    <LinksContainer>
      <StyledStoryboardLink />
      <StyledContactLink />
    </LinksContainer>

  </Layout>
)

const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;

  position: relative;
  left: 44%;
  margin-top: -16%;
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
  width: 70%;
  max-width: 740px;
  height: auto;
  margin-left: 4em;
`

const StyledStoryboardLink = styled(StoryboardLink)`
  width: 40%;
  height: auto;
`

const StyledContactLink = styled(ContactLink)`
    width: 25%;
    height: auto;
    margin: 10em 0 0 1em;
`

export default IndexPage
