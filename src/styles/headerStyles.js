import styled from "styled-components"
import { below } from "./utils"

export const HeaderContainer = styled.header`
  padding: 64px;
  width: 100%;
  display: flex;
  align-items: baseline;
  div:first-child {
    flex-grow: 0.3;
    font-size: 1.3rem;
    font-style: bold;
  }
  div:nth-child(2) {
    flex-grow: 0.3;
  }
  div:nth-child(3) {
    flex-grow: 1;
  }
  nav {
    display: block;
    ul {
      display: flex;
      list-style: none;
      text-align: right;
      li {
        .second {
          margin-top: 1rem;
          font-size: 1.2rem;
          text-decoration: underline;
        }
        &:first-child {
          margin-right: 6rem;
        }
        span {
          display: block;
        }
      }
    }
  }
`
