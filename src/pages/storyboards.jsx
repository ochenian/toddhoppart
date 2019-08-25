import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Logo from "../assets/svg/logo.inline.svg"
import ContactLink from "../assets/svg/link-contact.inline.svg"
import StoryboardsMarquee from "../assets/svg/header-storyboards.inline.svg"
import AnimationSubMarquee from "../assets/svg/header-animation.inline.svg"
import CommercialSubMarquee from "../assets/svg/header-commercial.inline.svg"
import LeftAnimationFrame from "../assets/svg/frame-left.inline.svg"
import RightAnimationFrame from "../assets/svg/frame-right.inline.svg"

const StoryboardsPage = () => (
  <Layout>
    <SEO title="Storyboards" />

    <Header>
      <StyledLogo />
      <StyledContactLink />
    </Header>

    <MarqueeContainer>
      <StyledStoryboardsMarquee />
    </MarqueeContainer>

    <SubMarqueeContainer>
      <StyledAnimationSubMarquee />
      <StyledCommercialSubMarquee />
    </SubMarqueeContainer>

    <FrameContainer>
      <StyledLeftAnimationFrame />
      <StyledRightAnimationFrame />

      <StyledLeftAnimationFrame />
      <StyledRightAnimationFrame />

      <StyledLeftAnimationFrame />
      <StyledRightAnimationFrame />
    </FrameContainer>
  </Layout>
)

const StyledLogo = styled(Logo)`
  width: 25%;
  height: auto;
`

const StyledContactLink = styled(ContactLink)`
  width: 15%;
  height: 100%;

  margin: 2em 2em 0 0;
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
`

const MarqueeContainer = styled.div`
  display: flex;
  justify-content: center;
`

const SubMarqueeContainer = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 1em auto;
  width: 70%;
`

const StyledStoryboardsMarquee = styled(StoryboardsMarquee)`
  width: 35%;
  height: 100%;
`

const StyledAnimationSubMarquee = styled(AnimationSubMarquee)`
  width: 25%;
  height: 100%;
`

const StyledCommercialSubMarquee = styled(CommercialSubMarquee)`
  width: 25%;
  height: 100%;
`

const StyledLeftAnimationFrame = styled(LeftAnimationFrame)`
  width: 45%;
  height: 100%;
`

const StyledRightAnimationFrame = styled(RightAnimationFrame)`
  width: 45%;
  height: 100%;
`

const FrameContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

export default StoryboardsPage
