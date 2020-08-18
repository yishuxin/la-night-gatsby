import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { Container } from "../styles/elements/Container"
import { HeaderContainer } from "../styles/headerStyles"

const Header = () => (
  <Container>
    <HeaderContainer>
      <div>mag.</div>
      <div>presents</div>
      <div />
      <nav>
        <ul>
          <li>
            <Link to="/">
              <span className="first">HOW TO</span>
              <span className="second">
                Spend a night in <span>Los Angeles</span>{" "}
              </span>
            </Link>
          </li>
          <li>
            <span className="first">A GUIDE FOR</span>
            <span className="second">
              Night owls, travel junkies, <span>and adventures alike.</span>{" "}
            </span>
          </li>
        </ul>
      </nav>
    </HeaderContainer>
  </Container>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
