import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import { SLATE, WHITE } from "../utils/colors"
import Grid from "../utils/components/Grid"
import { LARGE } from "../utils/spacing"

const HeaderWrapper = styled.header`
  background-color: ${SLATE};
  padding: ${LARGE}px 0;
  width: 100%;
  color: ${WHITE};
`

const Header = ({ siteBrand, siteTitle }) => (
  <HeaderWrapper>
    <Grid>
      <span>{siteBrand}</span>
      <h1>{siteTitle}</h1>
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
