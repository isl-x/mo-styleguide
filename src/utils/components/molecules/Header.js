import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import {
  PRIMARY_BACKGROUND_COLOR,
  PRIMARY_FOREGROUND_COLOR,
} from "../../colors"
import { LARGE, TINY } from "../../spacing"
import Grid from "../atoms/Grid"
import Link from "../atoms/Link"
import { FaArrowLeft } from "react-icons/fa"

const HeaderWrapper = styled.header`
  background-color: ${PRIMARY_BACKGROUND_COLOR};
  padding: ${LARGE}px 0;
  width: 100%;
  color: ${PRIMARY_FOREGROUND_COLOR};
`

const Header = ({ siteSubText, siteMainText, isIndex }) => (
  <HeaderWrapper>
    <Grid>
      {isIndex ? (
        <span>{siteSubText}</span>
      ) : (
        <Link to="/" style={{ display: "flex", alignItems: "center" }}>
          <FaArrowLeft style={{ marginRight: TINY }} />
          {siteSubText}
        </Link>
      )}
      <h1>{siteMainText}</h1>
    </Grid>
  </HeaderWrapper>
)

Header.propTypes = {
  siteMainText: PropTypes.string,
  siteSubText: PropTypes.string,
  isIndex: PropTypes.bool,
}

Header.defaultProps = {
  siteMainText: ``,
  siteSubText: ``,
  isIndex: false,
}

export default Header
