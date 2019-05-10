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

const Footer = ({ children }) => (
  <FooterWrapper>
    <Grid>{children}</Grid>
  </FooterWrapper>
)

export default Footer
