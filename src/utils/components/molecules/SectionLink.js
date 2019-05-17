import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import { NORMAL, SMALL } from "../../spacing"
import { LINK_BACKGROUND_COLOR } from "../../colors"
import { DEVICE } from "../../breakpoints"
import Link from "../atoms/Link"

import Image from "../../../components/Image"

/* LINK CONTAINER */

export const SectionLinkContainer = styled.div`
  display: grid;
  min-height: 50vh;
  margin: 0 auto;
  grid-template-columns: ${props =>
    `repeat(auto-fit, minmax(${100 / (props.colCount + 1)}%, 1fr))`};
  grid-gap: ${NORMAL}px;

  @media ${DEVICE.TABLET_DOWN} {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
`

SectionLinkContainer.propTypes = {
  colCount: PropTypes.number.isRequired,
}
SectionLinkContainer.defaultProps = {
  colCount: 4,
}

/* INDIVIDUAL LINKS */

const SectionLinkBase = styled.div`
  background: ${LINK_BACKGROUND_COLOR};
  display: flex;
  justify-content: center;
  align-items: center;
`

// Used to style the link contents themselves
const SectionLinkWrapper = styled.div`
  text-align: center;
  min-width: 30%;
  padding: ${SMALL}px;
`

export const SectionLink = ({ imgsrc, pageUrl, children }) => (
  <SectionLinkBase>
    <SectionLinkWrapper>
      <Link to={pageUrl}>
        <Image imgsrc={imgsrc} />
        {children}
      </Link>
    </SectionLinkWrapper>
  </SectionLinkBase>
)

SectionLink.propTypes = {
  imgsrc: PropTypes.string.isRequired,
  pageUrl: PropTypes.string.isRequired,
  children: PropTypes.node,
}
SectionLink.defaultProps = {
  imgsrc: "gatsby-astronaut.png",
}
