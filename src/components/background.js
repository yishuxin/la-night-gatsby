import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const Background = ({
  filename,
  height,
  backgroundSize,
  position,
  children,
}) => {
  const data = useStaticQuery(
    graphql`
      query {
        placeholderImage: allFile {
          edges {
            node {
              relativePath
              childImageSharp {
                fluid(maxWidth: 2480, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    `
  )

  const image = data.placeholderImage.edges.find(
    ({ node }) => node.relativePath === filename
  ).node

  if (!image) {
    return null
  }

  return (
    <BackgroundImage
      fluid={image.childImageSharp.fluid}
      style={{
        height: `${height}`,
        width: `100%`,
        position: `${position}`,
        backgroundSize: `${backgroundSize}`,
        backgroundPosition: `center center`,
        backgroundRepeat: "no-repeat",
        backgroundPositionX: "center",
      }}
    >
      {children}
    </BackgroundImage>
  )
}

export default Background
