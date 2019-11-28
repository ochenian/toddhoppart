import React from "react"
import styled from "styled-components"

import { useStaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AnimationFrameLeft from "../components/animationFrameLeft"

import Logo from "../assets/svg/logo.inline.svg"
import ContactLink from "../assets/svg/link-contact.inline.svg"
import StoryboardsMarquee from "../assets/svg/header-storyboards.inline.svg"
import AnimationSubMarquee from "../assets/svg/header-animation.inline.svg"
import CommercialSubMarquee from "../assets/svg/header-commercial.inline.svg"

const StoryboardsPage = () => {
  const data = useStaticQuery(graphql`
    query {
      crustbucklerImage: file(relativePath: { eq: "crustbuckler.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <Layout>
        <SEO title="Storyboards" />

        <Header>
          <Link to="/">
            <StyledLogo />
          </Link>

          <LinkWrapper to="/contact">
            <StyledContactLink />
          </LinkWrapper>
        </Header>

        <MarqueeContainer>
          <StyledStoryboardsMarquee />
        </MarqueeContainer>

        <FrameContainer>
          {/* <SubMarqueeContainer> */}
          <StyledAnimationSubMarquee />
          <StyledCommercialSubMarquee />
          {/* </SubMarqueeContainer> */}

          <StyledLeftAnimationFrame
            fluidImg={data.crustbucklerImage.childImageSharp.fluid}
          />
          <StyledRightAnimationFrame
            fluidImg={data.crustbucklerImage.childImageSharp.fluid}
          />

          <StyledLeftAnimationFrame
            fluidImg={data.crustbucklerImage.childImageSharp.fluid}
          />
          <StyledRightAnimationFrame
            fluidImg={data.crustbucklerImage.childImageSharp.fluid}
          />

          <StyledLeftAnimationFrame
            fluidImg={data.crustbucklerImage.childImageSharp.fluid}
          />
          <StyledRightAnimationFrame
            fluidImg={data.crustbucklerImage.childImageSharp.fluid}
          />
        </FrameContainer>
      </Layout>
    </>
  )
}

const StyledLogo = styled(Logo)`
  width: 50%;
`

const StyledContactLink = styled(ContactLink)`
  width: 35%;

  cursor: pointer;

  &:hover path.text-color {
    fill: ${props => props.theme.color.lightBlue};
  }
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;

  padding: 0 2em;
`

const MarqueeContainer = styled.div`
  display: flex;
  justify-content: center;

  margin-bottom: 1em;
`

const SubMarqueeContainer = styled.div`
  /* display: flex;
  justify-content: space-around;

  margin: 1em auto; */
`

const StyledStoryboardsMarquee = styled(StoryboardsMarquee)`
  width: 20%;
  height: 100%;
`

const StyledAnimationSubMarquee = styled(AnimationSubMarquee)`
  width: 18%;
  margin: 0 auto;
`

const StyledCommercialSubMarquee = styled(CommercialSubMarquee)`
  width: 18%;
  margin: 0 auto;
`

const StyledLeftAnimationFrame = styled(AnimationFrameLeft)`
  cursor: pointer;
  /* margin-bottom: 2em; */
  width: 55%;
  margin: 0 auto;
`

const StyledRightAnimationFrame = styled(AnimationFrameLeft)`
  cursor: pointer;
  width: 55%;
  margin: 0 auto;

  & svg {
    transform: rotateY(180deg);

    path.frame {
      fill: #00b0f1;
    }
  }

  & div.gatsby-image-wrapper {
    transform: skew(0deg, 2deg);
    left: 1.75%;
  }
`

const FrameContainer = styled.section`
  /* display: flex;
  flex-wrap: wrap;
  justify-content: space-around; */

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 16px;
  justify-content: center;
  align-items: center;

  margin: 0 auto;
  margin-bottom: 3em;
  width: 80%;
`

// const StyledGallery = styled(Gallery)`
//   width: 30%;
// `

const LinkWrapper = styled(Link)`
  height: 100%;
  display: flex;
  justify-content: flex-end;
`

export default StoryboardsPage
