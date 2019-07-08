import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import slugify from "slugify"

import { LARGE, MEDIUM } from "../utils/spacing"
import { NAV_OFFSET } from "../utils/components/molecules/ContextualNav"
import { SECTION_BORDER as SB } from "../utils/borders"

const SectionBase = styled.div`
  margin: ${LARGE}px 0;

  ${({ centered }) =>
    centered &&
    `text-align: center; 
     padding-top: ${MEDIUM}px;
     border-top: ${SB.WIDTH} ${SB.STYLE} ${SB.COLOR};`}

  &:first-of-type {
    margin-top: 0;
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`

const Anchor = styled.div`
  display: block;
  position: relative;
  top: -${NAV_OFFSET}px;
  visibility: hidden;
`

const Section = ({ title, children, hidden, centered }) => (
  <SectionBase centered={centered}>
    <Anchor
      id={slugify(title, { lower: true })}
      data-type="block"
      data-title={title}
    />
    {!hidden ? <h2>{title}</h2> : null}
    {children}
  </SectionBase>
)

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
}

export default Section
