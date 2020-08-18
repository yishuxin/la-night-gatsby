import React from "react"
import styled from "styled-components"
import { Oval } from "./svg/shapes"
import Image from "../components/image"
import prince from "../images/prince.jpg"

const ContentContainer = styled.div`
  width: 80%;

  display: flex;
  align-items: baseline;
  justify-content: space-between;
  position: relative;
  h2 {
    flex: 0.8;
  }
`

const SvgContainer = styled.div`
  height: 200px;
  width: 200px;
  font-size: 12px;
  transform: translateY(50%);
  svg {
    font-size: 20px;
  }
`

const ImageContainer = styled.div`
  z-index: -1;
  position: absolute;
  top: 60%;
  width: 100%;
  height: 100%;
`

const SliderContent = ({ title, filename, alt, time }) => {
  return (
    <ContentContainer>
      <SvgContainer>
        <Oval text={time} />
      </SvgContainer>
      <h2>{title}</h2>
      <ImageContainer>
        <Image filename={filename} alt={alt} />
      </ImageContainer>
    </ContentContainer>
  )
}

export default SliderContent
