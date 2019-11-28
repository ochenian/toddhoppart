import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import ImageGallery from 'react-image-gallery';
import BackArrow from "../assets/svg/arrow-back.inline.svg"
import ForwardArrow from "../assets/svg/arrow-forward.inline.svg"

const Gallery = () => {
  const images = useStaticQuery(graphql`
    query {
      crustbucklerImages: allFile(filter: { extension: { regex: "/(png|jpg)/" }, relativeDirectory: { eq: "crustbucklerImages" }}) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 4000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
    }
  `)

  const GalleryContainer = styled.div`

    .image-gallery-slide-wrapper {
      span {
        display: flex;
        justify-content: space-between;

        position: absolute;
        bottom: -15%;

        width: 100%;
      }

      svg {
        width: 20%;

        cursor: pointer;
      }

    }

  `

  function renderLeftNav(onClick) {
    return (
      <BackArrow onClick={onClick}/>
    )
  }

  function renderRightNav(onClick) {
    return (
      <ForwardArrow onClick={onClick}/>
    )
  }

  return <GalleryContainer>
    <ImageGallery items={images.crustbucklerImages.edges.map(edge => edge.node.childImageSharp.fluid)}
                  showThumbnails={false}
                  showPlayButton={false}
                  showFullscreenButton={false}
                  renderLeftNav={renderLeftNav}
                  renderRightNav={renderRightNav} />
    </GalleryContainer>
}

export default Gallery
