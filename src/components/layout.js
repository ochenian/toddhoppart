/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import StyledBackgroundSection from "./background"

import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <StyledBackgroundSection>
      <PageContainer>

        <main>{children}</main>

        <Footer>
          © {new Date().getFullYear()}, Built by Brandon Kent with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </Footer>

      </PageContainer>
    </StyledBackgroundSection>
  )
}

const PageContainer = styled.div`
  padding: 1em;
`

const Footer = styled.footer`
  position: absolute;
  bottom: 0;
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
