import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import Grid from "../utils/components/Grid"
import { SLATE, WHITE } from "../utils/colors"
import { MEDIUM } from "../utils/spacing"

const FooterWrapper = styled.footer`
  background-color: ${SLATE};
  color: ${WHITE};
  padding: ${MEDIUM}px 0;
`

const FooterContents = styled.div`
  display: flex;
  justify-content: space-between;
`

const FooterLink = styled.a``
const FooterDivider = styled.div``

const Footer = ({ children }) => (
  <FooterWrapper>
    <Grid>
      <FooterContents>{children}</FooterContents>
    </Grid>
  </FooterWrapper>
)

Footer.propTypes = {
  children: PropTypes.node,
}

export default Footer
