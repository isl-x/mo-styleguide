import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import { SLATE, WHITE } from "../utils/colors"
import { LARGE } from "../utils/spacing"
import Grid from "../utils/components/Grid"
import Link from "../utils/components/Link"

const HeaderWrapper = styled.header`
  background-color: ${SLATE};
  padding: ${LARGE}px 0;
  width: 100%;
  color: ${WHITE};
`

const Header = ({ siteSubText, siteMainText, isIndex }) => (
  <HeaderWrapper>
    <Grid>
      {isIndex ? (
        <span>{siteSubText}</span>
      ) : (
        <Link href="/">{siteSubText}</Link>
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
