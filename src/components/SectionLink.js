import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import { NORMAL } from "../utils/spacing"
import { LIGHT_SMOKE } from "../utils/colors"
import Link from "../utils/components/Link"

import Image from "./Image"

/* LINK CONTAINER */

export const SectionLinkContainer = styled.div`
  display: grid;
  min-height: 50vh;
  margin: 0 auto;
  grid-template-columns: ${props => `repeat(${props.colCount}, 1fr)`};
  grid-gap: ${NORMAL}px;
`

SectionLinkContainer.propTypes = {
  colCount: PropTypes.number.isRequired,
}
SectionLinkContainer.defaultProps = {
  colCount: 4,
}

/* INDIVIDUAL LINKS */

const SectionLinkBase = styled.div`
  background: ${LIGHT_SMOKE};
  display: flex;
  justify-content: center;
  align-items: center;
`

// Used to style the link contents themselves
const SectionLinkWrapper = styled.div`
  text-align: center;
  width: 30%;
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
  imgsrc: "font-awesome-default.png",
}
