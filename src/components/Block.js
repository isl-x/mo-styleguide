import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { LARGE } from "../utils/spacing"

const BlockBase = styled.div`
  margin: ${LARGE}px 0;

  &:first-of-type {
    margin-top: 0;
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`

const Block = ({ title, children }) => (
  <BlockBase>
    <h2>{title}</h2>
    {children}
  </BlockBase>
)

Block.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
}

export default Block
