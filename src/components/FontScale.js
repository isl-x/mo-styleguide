import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import { useSiteFiles } from "../utils/hooks"
import { MEDIUM, TINY } from "../utils/spacing"
import { PRIMARY_TEXT_COLOR } from "../utils/colors"

const FontScaleContainer = styled.div`
  border-color: ${PRIMARY_TEXT_COLOR};
  border-style: solid;
  border-width: 1px 1px 0 1px;
  padding: ${MEDIUM}px;
  min-height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  :last-of-type {
    border-width: 1px;
  }
`

const FontExample = styled.div`
  @font-face {
    font-family: ${props => `${props.name}`};
    font-style: normal;
    font-weight: ${props => props.weight};
    src: url(${props => props.url}) format("woff");
  }

  font-family: ${props => `${props.name}`};
  font-size: ${props => props.size};
  letter-spacing: ${props => props.letterSpacing};
  line-height: ${props => props.lineHeight};
  white-space: nowrap;
  overflow-x: hidden;
  overflow-y: hidden;
  text-transform: ${props => props.transform};
`

const FontDescription = styled.span`
  margin-top: ${TINY}px;
  opacity: 0.6;
`

FontExample.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  weight: PropTypes.string.isRequired,
  letterSpacing: PropTypes.string.isRequired,
  lineHeight: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
}

const FontScale = ({
  fontName,
  fontFileName,
  fontWeight,
  letterSpacing,
  lineHeight,
  size,
  description,
  transform,
}) => {
  const { edges } = useSiteFiles()
  const completeFile = edges
    ? edges.find(file => file.node.name === fontFileName)
    : null

  return (
    <FontScaleContainer>
      <FontExample
        url={completeFile.node.publicURL}
        name={fontName}
        weight={fontWeight}
        letterSpacing={letterSpacing}
        lineHeight={lineHeight}
        size={size}
        transform={transform}
      >
        The quick brown fox jumps over the lazy dog
      </FontExample>
      <FontDescription>
        <strong>{description}</strong> - {size} - {fontWeight}
      </FontDescription>
    </FontScaleContainer>
  )
}

FontScale.propTypes = {
  fontName: PropTypes.string.isRequired,
  fontFileName: PropTypes.string.isRequired,
  fontWeight: PropTypes.string.isRequired,
  letterSpacing: PropTypes.string.isRequired,
  lineHeight: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  transform: PropTypes.string.isRequired,
}

FontScale.defaultProps = {}

export default FontScale
