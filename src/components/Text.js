import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const TextBase = styled.div``

const Text = ({ title, children }) => (
  <>
    <h2>{title}</h2>
    <TextBase>{children}</TextBase>
  </>
)

Text.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
}

export default Text
