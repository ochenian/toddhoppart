import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = ({ className, children }) => (
    <StaticQuery query={graphql`
      query {
        background: file(relativePath: { eq: "site_bg.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
     render={data => {
       // Set ImageData.
       const imageData = data.background.childImageSharp.fluid
       return (
         <BackgroundImage Tag="section"
           className={className}
           fluid={imageData}
           backgroundColor={`#040e18`}
          >
            {children}
          </BackgroundImage>
       )
     }
     }
    />
)

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  height: 100%;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`

export default StyledBackgroundSection
