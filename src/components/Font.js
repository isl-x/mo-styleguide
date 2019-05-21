import PropTypes from "prop-types"
import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import { StaticQuery, graphql } from "gatsby"

const FontStyle = createGlobalStyle`
    @font-face {
        font-family: ${props => `${props.name}`};
        font-style: normal;
        font-weight: normal;
        src: url(${props => props.url}) format('woff');
    }
`

const FontContainer = styled.div`
  font-family: ${props => `${props.fontName}`};
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

const Font = ({ fontName, fontFileName, sample, sampleSize, children }) => (
  <StaticQuery
    query={graphql`
      query AllDownloadFilesQueryAgain {
        allFile {
          edges {
            node {
              publicURL
              name
            }
          }
        }
      }
    `}
    render={data => {
      const completeFile = data.allFile.edges
        ? data.allFile.edges.find(file => file.node.name === fontFileName)
        : null

      return (
        <FontContainer fontName={fontName}>
          <FontStyle url={completeFile.node.publicURL} name={fontName} />
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
    }}
  />
)

Font.propTypes = {
  fontName: PropTypes.string.isRequired,
  fontFileName: PropTypes.string.isRequired,
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
