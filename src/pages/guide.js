import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import { Oval } from "../components/svg/shapes"
import prince from "../images/prince.jpg"
import SliderContent from "../components/sliderContent"
import { sliderContents } from "../components/sliderContents"

const Container = styled.div`
  height: calc(100vh - 3.5rem);
  overflow-y: hidden;
  margin-left: 128px;
  position: relative;
  width: 100%;
  overflow-y: hidden;
  display: flex;
`

const GuidePage = () => {
  return (
    <Layout>
      <Container>
        {/* <ContentContainer>
        <SvgContainer>
          <Oval text={"7-8PM"} />
        </SvgContainer>
        <h2>ART AND SUNLIGHT AT LACMA</h2>
        <ImageContainer>
          <img src={prince}></img>
        </ImageContainer>
      </ContentContainer> */}
        guide
      </Container>
    </Layout>
  )
}

export default GuidePage
