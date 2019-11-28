
import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import Modali, { useModali } from 'modali';
import RightAnimationFrame from "../assets/svg/frame-right.inline.svg"
import Gallery from './gallery'
import Modal from "./modal";
import useModal from './useModal';

const AnimationFrameRightWithImage = (props) => {

  const [modal, toggleModal] = useModali({
    animated: true,
    closeButton: false,
    centered: true,
    overlayClose: false
  });

  const StyledRightAnimationFrame = styled(RightAnimationFrame)`
    position: absolute;
    z-index: 1;
  `
  const StyledImg = styled(Img)`
    width: 86%;
    top: 16%;
    left: 12.5%;
    transform: skew(0deg, -2deg);
  `
  const FramedImgContainer = styled.div`
    position: relative;
    width: 36%;
  `

  const StyledModali = styled(Modali.Modal)`
    div + div {
      height: 75%;
      display: flex;
      top: 15%;
    }
  `
  return (
    <>
      <FramedImgContainer onClick={toggleModal}>
        <StyledRightAnimationFrame />
        <StyledImg fluid={props.fluidImg} />
      </FramedImgContainer>
      <StyledModali {...modal}>
        <Gallery />
      </StyledModali>
    </>
  )

}

export default AnimationFrameRightWithImage
