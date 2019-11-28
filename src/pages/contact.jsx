import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { Location } from '@reach/router';

import GifPlayer from "react-gif-player"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Logo from "../assets/svg/logo.inline.svg"
import StoryboardsLink from "../assets/svg/link-storyboards.inline.svg"
import ContactMarquee from "../assets/svg/header-contact.inline.svg"
import SendGif from "../images/Send_Animation.gif"
import SendPng from "../images/Send_Animation_Still.png"
import DelayedLink from "../components/delayedLink"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />

    <Header>
      <Link to="/">
        <StyledLogo />
      </Link>

      <LinkWrapper to="/storyboards">
        <StyledStoryboardsLink />
      </LinkWrapper>
    </Header>

    <MarqueeContainer>
      <StyledContactMarquee />
    </MarqueeContainer>

    <FormContainer>
      <StyledForm method="POST" action="#">
        <StyledInput placeholder="Email" />
        <StyledTextArea placeholder="Message" rows="6" />
        <Location>
          {({ location }) => {
            return  <DelayedLink
            location={location} // Current location from template of page
            // onClick={this.handleClick} // (optional) Click event for this component to apply animation classes
            delay={2000} // Delay to perform navigate event (ms)
            to="/thanks" // Destination of link
          >
            <StyledGifPlayer gif={SendGif} still={SendPng} />
          </DelayedLink>

          }
        }

        </Location>


      </StyledForm>
    </FormContainer>
  </Layout>
)

const StyledLogo = styled(Logo)`
  width: 50%;
`

const StyledStoryboardsLink = styled(StoryboardsLink)`
  width: 65%;

  cursor: pointer;

  &:hover path.text-color {
    fill: ${props => props.theme.color.pink};
  }
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
`

const MarqueeContainer = styled.div`
  display: flex;
  justify-content: center;

  margin-top: -2em;
`

const StyledContactMarquee = styled(ContactMarquee)`
  width: 14%;
  height: 100%;

  margin-bottom: 1em;
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

  margin: 0;
  width: 50%;
`
const StyledInput = styled.input`
  border: none;
  border-radius: 4px;
  box-shadow: inset 2px 3px 4px rgba(0, 0, 0, 0.4);

  margin-bottom: 2em;

  &::placeholder {
    font-size: 0.75em;
    padding-left: 0.5em;
  }
`

const StyledTextArea = styled.textarea`
  border: none;
  border-radius: 4px;
  resize: none;

  box-shadow: inset 2px 3px 4px rgba(0, 0, 0, 0.4);

  &::placeholder {
    font-size: 0.75em;
    padding-left: 0.5em;
  }
`

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
`

const StyledGifPlayer = styled(GifPlayer)`
  margin-left: 86%;
  margin-top: 1em;
  width: 15%;
`

const LinkWrapper = styled(Link)`
  height: 100%;
  display: flex;
  justify-content: flex-end;
  margin: 2em 2em 0 0;
`

export default ContactPage
