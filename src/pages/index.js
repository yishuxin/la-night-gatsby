import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Container } from "../styles/elements/Container"
import main from "../images/main.jpeg"
import thumbNail from "../images/main-thumbnail.jpg"
import { Circle } from "../components/svg/shapes"
import Background from "../components/background"

import {
  MainContainer,
  MainImageContainer,
  Content,
  ThumbNail,
} from "../styles/homeStyles"

const IndexPage = ({ data }) => {
  const mainImage = data.desktop.childImageSharp.fluid

  return (
    <Layout>
      <Container>
        <MainContainer>
          <Background
            filename="main.jpeg"
            height="100%"
            backgroundSize="150%"
            position="absolute"
          >
            <h1 className="main-title-first">
              <span>HOW </span> <span>TO</span>{" "}
            </h1>
            <h3 className="sub-title">
              Having fun at night in Los Angeles used to be a bit of a tricky
              one.
            </h3>
            <ThumbNail>
              <Background
                filename="main-thumbnail.jpg"
                height="100vh"
                backgroundSize="100%"
              />
            </ThumbNail>
            <Content>
              <div />
              <p>
                Because of the city's size and not-all-that-great public
                transportation network, you either had to stay in one spot,
                refrain from alcohol, or deal with the jail time/fines/vehicular
                manslaughters that come as a result of drunk driving. But thanks
                to ride-sharing services and a couple of public transport
                improvements, the city is now your oyster.
              </p>
              <p>
                Which is great, because LA is the best city in the country.
                Whereas Chicago's weather is so shitty they have to invent new
                words to describe it, and New York pretty much only makes the
                news these days when a rat eats something weird, LA has the
                beach and mountains and movie stars and 500 days of perfect
                weather a year.
              </p>
            </Content>
            <h1 className="main-title-second">
              <span>SPEND </span> <span>A NIGHT</span>{" "}
            </h1>
            <h1 className="main-title-third">
              <span>IN LOS </span> <span>ANGELES</span>{" "}
            </h1>
            <div className="guide">
              <p>
                Here's our guide on how to have a perfect 12 hours overnight in
                the city.
              </p>
            </div>
            <div className="guide-nav">
              <Link to="/guide">
                <Circle line1={"SHOW ME "} line2={"WHAT YOU GOT"} />
              </Link>
            </div>
          </Background>
        </MainContainer>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query {
    desktop: file(relativePath: { eq: "main.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          src
        }
      }
    }
  }
`

export default IndexPage
