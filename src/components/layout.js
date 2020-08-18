import React from "react"
import styled from "styled-components"

import { Container } from "../styles/elements/Container"
import { GlobalStyles } from "../styles/globalStyles"

import grain from "../images/grain.jpg"
import Header from "./header"

const Layout = ({ children }) => {
  return (
    <main>
      <GlobalStyles />
      <Header />
      {children}
    </main>
  )
}

export default Layout
