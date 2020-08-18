import styled, { css } from "styled-components"
import { colors } from "../utils"

export const Container = styled.div`
  margin: 0 auto;
  flex-grow: 1;
  width: auto;
  height: 100%;
  position: relative;
  padding: 0 128px;
  /* background: ${colors.black}; */
  ${props =>
    props.fluid &&
    css`
      width: 100%;
      max-width: 100%;
    `}
`
