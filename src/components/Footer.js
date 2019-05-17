import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import Grid from "../utils/components/Grid"
import { SLATE, WHITE } from "../utils/colors"
import { MEDIUM, TINY } from "../utils/spacing"
import { DIVIDER_BORDER } from "../utils/borders"
import { XS, S, M, L } from "../utils/font-sizes"
import { DEVICE } from "../utils/breakpoints"

const FooterWrapper = styled.footer`
  background-color: ${SLATE};
  color: ${WHITE};
  padding: ${MEDIUM}px 0;
`

const FooterContents = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const FooterLink = styled.a`
  ${L}
  text-decoration: none;
  cursor: pointer;
  color: inherit;
  text-align: ${props => props.textAlign};

  @media ${DEVICE.PHONE_ONLY} {
    ${M}
  }
`

const FooterLinkContext = styled.span`
  ${S}
  display: block;
  opacity: 0.8;
  margin-bottom: ${TINY}px;

  @media ${DEVICE.PHONE_ONLY} {
    ${XS}
  }
`

const FooterDivider = styled.div`
  content: "";
  border-right: ${DIVIDER_BORDER};
  height: 3rem;
`

const Footer = ({ previousPage, nextPage, isIndex }) => (
  <FooterWrapper>
    <Grid>
      {isIndex ? (
        "Footer Lorem Ipsum"
      ) : (
        <FooterContents>
          {previousPage ? (
            <FooterLink href={previousPage.pageUrl} textAlign="right">
              <FooterLinkContext>Previous</FooterLinkContext>
              {`<- ${previousPage.linkText}`}
            </FooterLink>
          ) : (
            <div />
          )}
          <FooterDivider />
          {nextPage ? (
            <FooterLink href={nextPage.pageUrl}>
              <FooterLinkContext>Next</FooterLinkContext>
              {`${nextPage.linkText} ->`}
            </FooterLink>
          ) : (
            <div />
          )}
        </FooterContents>
      )}
    </Grid>
  </FooterWrapper>
)

Footer.propTypes = {
  isIndex: PropTypes.bool,
  previousPage: PropTypes.object,
  nextPage: PropTypes.object,
}

Footer.defaultProps = {
  isIndex: false,
  previousPage: null,
  nextPage: null,
}

export default Footer
