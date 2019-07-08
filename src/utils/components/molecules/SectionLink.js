import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import Link from "../atoms/Link"
import { MEDIUM } from "../../spacing"
import { OPAQUE_FONT } from "../../font-styles"
import { XL } from "../../font-sizes"

/* LINK CONTAINER */
const SectionLinkContainer = styled.main`
  display: flex;
  flex-direction: column;
`

/* INDIVIDUAL LINKS */
const SectionLinkBase = styled.div`
  margin-bottom: ${MEDIUM}px;
  opacity: ${props => (props.inactive ? 0.3 : 1)};

  span {
    ${XL}
    font-weight: bold;
  }

  p {
    ${OPAQUE_FONT}
  }
`

const SectionLink = ({ pageUrl, children }) => {
  return (
    <SectionLinkBase inactive={!pageUrl}>
      {pageUrl ? (
        <Link to={pageUrl} style={{ height: "100%", width: "100%" }}>
          {children}
        </Link>
      ) : (
        children
      )}
    </SectionLinkBase>
  )
}

SectionLink.propTypes = {
  pageUrl: PropTypes.string,
  children: PropTypes.node,
}

SectionLinkContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.shape({
      type: PropTypes.oneOf([SectionLink]),
    }),
    PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.oneOf([SectionLink]),
      })
    ),
  ]),
}

export { SectionLinkContainer, SectionLink }
