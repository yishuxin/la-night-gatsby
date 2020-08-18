import React from "react"
import SliderContent from "./sliderContent"
import Image from "../components/image"
const sliderContents = [
  {
    id: 1,
    component: (
      <SliderContent
        title={"ART AND SUNLIGHT AT LACMA"}
        filename="prince.jpg"
        alt="price image"
        time="7-8PM"
      />
    ),
  },
  {
    id: 2,
    component: (
      <SliderContent
        title={"SNACKS AND DRINKS AT THE PRINCE"}
        filename="palm.jpg"
        alt="palm image"
        time="8-9PM"
      />
    ),
  },
]

export default sliderContents
