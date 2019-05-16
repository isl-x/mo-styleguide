import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import slugify from "slugify"

import { LARGE } from "../utils/spacing"
import { NAV_OFFSET } from "../utils/components/ContextualNav"

const BlockBase = styled.div`
  margin: ${LARGE}px 0;

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

const Block = ({ title, children }) => (
  <BlockBase>
    <Anchor
      id={slugify(title, { lower: true })}
      data-type="block"
      data-title={title}
    />
    <h2>{title}</h2>
    {children}
  </BlockBase>
)

Block.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
}

export default Block
