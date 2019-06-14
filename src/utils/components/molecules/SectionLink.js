import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import { NORMAL, SMALL } from "../../spacing"
import { LINK_BACKGROUND_COLOR } from "../../colors"
import { DEVICE } from "../../breakpoints"
import Link from "../atoms/Link"

import DynamicSvg from "../../../components/DynamicSvg"

/* LINK CONTAINER */

const SectionLinkContainer = styled.div`
  display: grid;
  min-height: 50vh;
  margin: 0 auto;
  grid-template-columns: ${props =>
    `repeat(auto-fit, minmax(${100 / (props.colCount + 1)}%, 1fr))`};
  grid-gap: ${NORMAL}px;
  align-items: center;

  @media ${DEVICE.TABLET_DOWN} {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
`

/* INDIVIDUAL LINKS */

const SectionLinkBase = styled.div`
  background: ${LINK_BACKGROUND_COLOR};
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${props => (props.inactive ? 0.5 : 1)};
`

// Used to style the link contents themselves
const SectionLinkWrapper = styled.div`
  text-align: center;
  min-width: 30%;
  padding: ${SMALL}px;
`

const SectionLink = ({ filename, pageUrl, children }) => {
  const body = (
    <SectionLinkWrapper>
      <DynamicSvg filename={filename} />
      {children}
    </SectionLinkWrapper>
  )

  return (
    <SectionLinkBase inactive={!pageUrl}>
      {pageUrl ? (
        <Link to={pageUrl} style={{ height: "100%", width: "100%" }}>
          {body}
        </Link>
      ) : (
        body
      )}
    </SectionLinkBase>
  )
}

SectionLink.propTypes = {
  filename: PropTypes.string.isRequired,
  pageUrl: PropTypes.string,
  children: PropTypes.node,
}
SectionLink.defaultProps = {
  filename: "ColorsIcon",
}

SectionLinkContainer.propTypes = {
  colCount: PropTypes.number.isRequired,
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
SectionLinkContainer.defaultProps = {
  colCount: 4,
}

export { SectionLinkContainer, SectionLink }
