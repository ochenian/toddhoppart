/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import styled, { ThemeProvider } from "styled-components"
import theme from "../assets/theme"
import Background from "./background"
import FacebookIcon from "../assets/svg/icon-fb.inline.svg"
import InstagramIcon from "../assets/svg/icon-instagram.inline.svg"
import TwitterIcon from "../assets/svg/icon-twitter.inline.svg"

import "./layout.css"

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Background>
        <PageContainer>
          <MainContainer>{children}</MainContainer>

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

          <Footer>
            ©{new Date().getFullYear()}, Built by Brandon Kent with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </Footer>
        </PageContainer>
      </Background>
    </ThemeProvider>
  )
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
  padding: 1em;

  overflow: auto;
`

const MainContainer = styled.main`
  height: 100%;
  overflow: auto;
`

const Footer = styled.footer`
  position: absolute;
  bottom: 0;
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
    fill: #3b5998;
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
    fill: #38a1f3;
  }
`

const SocialMediaIconLink = styled.a`
  display: flex;
  justify-content: center;

  width: 100%;

  cursor: pointer;
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
