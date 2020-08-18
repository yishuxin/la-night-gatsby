import * as React from "react"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { wrap } from "@popmotion/popcorn"
import styled from "styled-components"

import Image from "../components/image"
import content from "../components/sliderContents"
import Layout from "../components/layout"

const transition = { duration: 0.6, ease: [0.43, 0.13, -0.23, 0.6] }
const directionOffset = 800

const variants = {
  enter: direction => ({
    x: direction < 0 ? -directionOffset : directionOffset,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 100,
    opacity: 1,
  },
  exit: direction => ({
    zIndex: 0,
    x: direction < 0 ? -directionOffset : directionOffset,
    opacity: 0,
  }),
}

// ! Fix scroll animation direction on bullets

const MotionSlider = () => {
  const [[page, direction], setPage] = useState([0, 0])
  const [activeBullet, setActiveBullet] = useState(0)
  const i = wrap(0, content.length, page)
  const paginate = newDirection => {
    if (page + newDirection < content.length && page + newDirection >= 0) {
      setPage([page + newDirection, 0])
      setActiveBullet(page + newDirection)
    } else if (page + newDirection === content.length) {
      setPage([0, 0])
      setActiveBullet(0)
    } else if (page + newDirection === -1) {
      setPage([content.length - 1, 0])
      setActiveBullet(content.length - 1)
    }
  }

  console.log(content[1].component)

  return (
    <Layout>
      <AnimatePresence initial={false} exitBeforeEnter custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={transition}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x)
            if (swipe < swipeConfidenceThreshold) {
              paginate(-1)
            } else if (swipe > -swipeConfidenceThreshold) {
              paginate(1)
            }
          }}
        >
          <>{content[i].component}</>
        </motion.div>
      </AnimatePresence>

      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          zIndex: 1000,
          height: "200px",
          width: "200px",
        }}
      >
        <button onClick={() => paginate(-1)}>{"<"}</button>

        <button onClick={() => paginate(1)}>{">"}</button>
      </div>
    </Layout>
  )
}

const swipeConfidenceThreshold = 100
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity
}

export default MotionSlider
