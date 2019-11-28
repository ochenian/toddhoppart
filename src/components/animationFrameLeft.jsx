import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import Modali, { useModali } from "modali"
import LeftAnimationFrame from "../assets/svg/frame-left.inline.svg"
import Gallery from "./gallery"
import Modal from "./modal"
import useModal from "./useModal"

const AnimationFrameLeftWithImage = props => {
  const [modal, toggleModal] = useModali({
    animated: true,
    closeButton: false,
    centered: true,
  })

  const StyledLeftAnimationFrame = styled(LeftAnimationFrame)`
    position: relative;
    z-index: 1;
  `
  const StyledImg = styled(Img)`
    position: absolute !important;
    width: 87%;
    /* bottom: 48.25%; */
    bottom: 11.25%;
    left: 11.5%;
    transform: skew(0deg, -2deg);
  `
  const FramedImgContainer = styled.div`
    position: relative;
    width: 100%;
  `

  const StyledModali = styled(Modali.Modal)`
    div + div {
      height: 75%;
      display: flex;
      top: 15%;
    }
  `
  return (
    <div className={props.className}>
      <FramedImgContainer onClick={toggleModal}>
        <StyledLeftAnimationFrame />
        <StyledImg fluid={props.fluidImg} />
      </FramedImgContainer>

      <StyledModali {...modal}>
        <Gallery />
      </StyledModali>
    </div>
  )
}

export default AnimationFrameLeftWithImage
