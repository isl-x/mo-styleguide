import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

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
import { HOME_PAGE } from "../../../config"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"

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
  text-align: ${props => (props.textAlign ? props.textAlign : "inherit")};

  @media ${DEVICE.PHONE_ONLY} {
    ${XS}
  }
`

const FooterDivider = styled.div`
  content: "";
  border-right: ${DIVIDER_BORDER};
  height: 3rem;
`

const Footer = ({ previousPage, nextPage, isIndex }) => {
  const indexFooterText = HOME_PAGE.HOME_PAGE_FOOTER_TEXT

  return (
    <FooterWrapper>
      <Grid>
        {isIndex ? (
          indexFooterText
        ) : (
          <FooterContents>
            {previousPage ? (
              <Link to={previousPage.pageUrl}>
                <FooterLinkContext textAlign="right">
                  Previous
                </FooterLinkContext>
                <FaArrowLeft
                  style={{ verticalAlign: "top", marginRight: TINY }}
                />
                {`${previousPage.linkText}`}
              </Link>
            ) : (
              <div />
            )}
            <FooterDivider />
            {nextPage ? (
              <Link to={nextPage.pageUrl}>
                <FooterLinkContext>Next</FooterLinkContext>
                {`${nextPage.linkText}`}
                <FaArrowRight
                  style={{ verticalAlign: "top", marginLeft: TINY }}
                />
              </Link>
            ) : (
              <div />
            )}
          </FooterContents>
        )}
      </Grid>
    </FooterWrapper>
  )
}

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
