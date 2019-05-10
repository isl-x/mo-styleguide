import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import { PURPLE } from "../utils/colors"
import { HIGH_PRIORITY_Z_INDEX } from "../utils/z-index"
import { Grid } from "../utils/components/Grid"

const HeaderWrapper = styled.header`
  background-color: ${PURPLE};
  margin-bottom: 1.45rem;
  position: fixed;
  width: 100%;
  z-index: ${HIGH_PRIORITY_Z_INDEX};
`

const Header = ({ siteBrand, siteTitle }) => (
  <HeaderWrapper>
    <Grid>
      <div
        style={{
          margin: `0 auto`,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <span>{siteBrand}</span>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </div>
    </Grid>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteBrand: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  siteBrand: ``,
}

export default Header
