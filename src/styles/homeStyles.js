import styled from "styled-components"
import { above, below } from "./utils"

export const MainContainer = styled.div`
  position: relative;
  ${below.desktop`
 
  `}
  padding-top: 32px;
  min-height: 300vh;
  span {
    display: block;
  }
  & .main-title-first {
    position: absolute;
    top: -32px;
    left: -64px;
    text-decoration: underline;
    text-decoration-thickness: 1px;
    text-decoration-color: rgba(223, 173, 154, 0.6);
  }
  & .sub-title {
    padding-top: 150px;
    padding-left: 250px;
    font-size: 2rem;
    width: 70%;
    text-indent: 50px;
    filter: brightness(1.1);
  }
  & .main-title-second {
    text-decoration: underline;
    position: absolute;
    top: 30%;
    right: -64px;
    text-align: right;
    text-decoration-thickness: 1px;
    text-decoration-color: rgba(223, 173, 154, 0.6);
  }
  & .main-title-third {
    text-decoration: underline;
    position: absolute;
    top: 60%;
    left: -64px;
    text-align: left;
    text-decoration-thickness: 1px;
    text-decoration-color: rgba(223, 173, 154, 0.6);
  }
  & .guide {
    position: absolute;
    bottom: 15%;
    left: 40%;
    right: 15%;
    font-size: 2rem;
    p {
      text-indent: 50px;
      width: 80%;
    }
  }

  & .guide-nav {
    position: absolute;
    bottom: -64px;
    left: 64px;
    height: 400px;
    width: 400px;

    svg {
      display: block;
      position: relative;
      height: 100%;
      width: 100%;
      fill: #dfad9a;
      font-size: 12px;
    }
  }
`

export const MainImageContainer = styled.div`
  margin: 0 64px;
  min-height: 300vh;

  background-size: 150%;
  background-repeat: no-repeat;
  background-position-x: center;
  filter: contrast(110%);
  background-origin: content-box;
  display: flex;
  flex-direction: column;
`

export const Content = styled.div`
  filter: brightness(1.1);
  margin-right: -100px;
  display: flex;
  justify-self: end;
  align-self: end;
  position: relative;
  div {
    flex: 0.75;
  }
  p {
    width: 20%;
    margin-right: 40px;
  }
`

export const ThumbNail = styled.div`
  min-height: 100vh;
  width: 500px;

  position: absolute;
  top: 35%;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;

  background-repeat: no-repeat;
`
