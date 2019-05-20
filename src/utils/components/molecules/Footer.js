import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"

import Grid from "../atoms/Grid"
import {
  PRIMARY_BACKGROUND_COLOR,
  PRIMARY_FOREGROUND_COLOR,
} from "../../colors"
import { MEDIUM, TINY } from "../../spacing"
import { DIVIDER_BORDER } from "../../borders"
import { XS, S, M, L } from "../../font-sizes"
import { DEVICE } from "../../breakpoints"
import Link from "../atoms/Link"

const FooterWrapper = styled.footer`
  background-color: ${PRIMARY_BACKGROUND_COLOR};
  color: ${PRIMARY_FOREGROUND_COLOR};
  padding: ${MEDIUM}px 0;
`

const FooterContents = styled.div`
  ${L}
  display: flex;
  justify-content: space-between;
  align-items: center;

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
  <StaticQuery
    query={graphql`
      query FooterTextQuery {
        site {
          siteMetadata {
            homePageFooterText
          }
        }
      }
    `}
    render={data => {
      const indexFooterText = data.site.siteMetadata.homePageFooterText

      return (
        <FooterWrapper>
          <Grid>
            {isIndex ? (
              indexFooterText
            ) : (
              <FooterContents>
                {previousPage ? (
                  <Link to={previousPage.pageUrl} textAlign="right">
                    <FooterLinkContext>Previous</FooterLinkContext>
                    {`<- ${previousPage.linkText}`}
                  </Link>
                ) : (
                  <div />
                )}
                <FooterDivider />
                {nextPage ? (
                  <Link to={nextPage.pageUrl}>
                    <FooterLinkContext>Next</FooterLinkContext>
                    {`${nextPage.linkText} ->`}
                  </Link>
                ) : (
                  <div />
                )}
              </FooterContents>
            )}
          </Grid>
        </FooterWrapper>
      )
    }}
  />
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
