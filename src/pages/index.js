import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Logo from "../assets/svg/logo.inline.svg"
import SiteNavButton from "../assets/svg/icon-site_nav.inline.svg"
import StoryboardLink from "../assets/svg/link-storyboards.inline.svg"
import ContactLink from "../assets/svg/link-contact.inline.svg"
import FacebookIcon from "../assets/svg/icon-fb.inline.svg"
import InstagramIcon from "../assets/svg/icon-instagram.inline.svg"
import TwitterIcon from "../assets/svg/icon-twitter.inline.svg"

const IndexPage = () => (
  <Layout>

    <SEO title="Home" />

    <StyledSiteNavBtn />

    <LogoLinksContainer>
      <StyledLogo />
      <LinksContainer>
        <Link to="/page-2/">
          <StyledStoryboardLink />
        </Link>
        <Link to="/page-2/">
          <StyledContactLink />
        </Link>
      </LinksContainer>
    </LogoLinksContainer>

    <SocialIconsContainer>
      <SocialMediaIconLink href="https://www.facebook.com/todd.hoppmeyer">
        <StyledFacebookIcon />
      </SocialMediaIconLink>

      <SocialMediaIconLink href="https://www.instagram.com/treztronic">
        <StyledInstagramIcon />
      </SocialMediaIconLink>

      <SocialMediaIconLink href="https://twitter.com/treztronic">
        <StyledTwitterIcon />
      </SocialMediaIconLink>
    </SocialIconsContainer>

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
    fill: #FF0095;
  }
`

const StyledContactLink = styled(ContactLink)`
  width: 30%;
  height: auto;

  margin: 12px 0 0 20%;

  &:hover path.text-color {
    fill: #05B0F0;
  }
`

const SocialIconsContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 40%;
  margin: 0 auto;
  max-width: 300px;
`

const StyledFacebookIcon = styled(FacebookIcon)`
  width: 50%;
  height: auto;

  cursor: pointer;

  &:hover path.fill {
    fill: #3B5998;
  }
`

const StyledInstagramIcon = styled(InstagramIcon)`
  width: 50%;
  height: auto;

  cursor: pointer;
`

const StyledTwitterIcon = styled(TwitterIcon)`
  width: 50%;
  height: auto;

  cursor: pointer;

  &:hover path.fill {
    fill: #38A1F3;
  }
`

const SocialMediaIconLink = styled.a`
  display: flex;
  justify-content: center;

  width: 100%;

  cursor: pointer;
`;

export default IndexPage
