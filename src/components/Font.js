import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const FontContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`

const FontSample = styled.div`
  font-size: ${props => props.sampleSize};
  line-height: ${props => props.sampleSize};
`

const FontUsageGuideline = styled.li``

const FontExample = styled.p``

const Font = ({ fontName, sample, sampleSize, children }) => {
  return (
    <FontContainer>
      <div>
        <FontSample sampleSize={sampleSize}>{sample}</FontSample>
        <h4>{fontName}</h4>
      </div>
      <div>
        <FontExample>ABCDEFGHIJKLMNOPQRSTUVWXYZ</FontExample>
        <FontExample>abcdefghijklmnopqrstuvwzyz</FontExample>
        <FontExample>{"1234567890&%{}"}</FontExample>
        <ul>{children}</ul>
      </div>
    </FontContainer>
  )
}

Font.propTypes = {
  fontName: PropTypes.string.isRequired,
  sample: PropTypes.string.isRequired,
  sampleSize: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.shape({
      type: PropTypes.oneOf([FontUsageGuideline]),
    }),
    PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.oneOf([FontUsageGuideline]),
      })
    ),
  ]),
}

Font.defaultProps = {
  sampleSize: "120px",
}

export { Font, FontUsageGuideline }
