import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"

import { PRIMARY_TEXT_COLOR } from "../utils/colors"
import { NORMAL, TINY, XXXLARGE } from "../utils/spacing"
import { DEVICE } from "../utils/breakpoints"

/** BASE CONTAINER FOR THE BLOCK **/
const FontContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: ${NORMAL}px;

  @media ${DEVICE.PHONE_ONLY} {
    flex-direction: column;
  }

  @font-face {
    font-family: ${props => `${props.name}`};
    font-style: normal;
    font-weight: normal;
    src: url(${props => props.url}) format("woff");
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`

FontContainer.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

/** LARGE SAMPLE TEXT STYLES **/
const FontSampleContainer = styled.div`
  margin-right: ${XXXLARGE}px;
`

const FontSample = styled.div`
  font-family: ${props => `${props.fontName}`};
  font-size: ${props => props.sampleSize};
  line-height: ${props => props.sampleSize};
`

FontSample.propTypes = {
  fontName: PropTypes.string.isRequired,
  sampleSize: PropTypes.string.isRequired,
}

/** GUIDELINES AND EXAMPLES (RIGHT SIDE OF BLOCK) **/
const FontUsageContainer = styled.ul`
  margin: 0;
`

const FontUsageGuideline = styled.li`
  list-style: none;
  opacity: 0.6;
  margin-bottom: 0;

  &:before {
    height: 2px;
    width: 10px;
    content: "";
    position: relative;
    display: inline-block;
    vertical-align: middle;
    background: ${PRIMARY_TEXT_COLOR};
    margin-right: ${NORMAL}px;
  }
`

const FontExampleContainer = styled.div`
  font-family: ${props => `${props.fontName}`};
  margin-bottom: ${NORMAL}px;
`

FontExampleContainer.propTypes = {
  fontName: PropTypes.string.isRequired,
}

const FontExample = styled.p`
  margin-bottom: ${TINY}px;
`

const Font = ({
  fontName,
  fontFileName,
  sample,
  sampleSize,
  children,
  noUpper,
  noLower,
  noNumbers,
}) => (
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
        <FontContainer url={completeFile.node.publicURL} name={fontName}>
          <FontSampleContainer>
            <FontSample sampleSize={sampleSize} fontName={fontName}>
              {sample}
            </FontSample>
            <h4>{fontName}</h4>
          </FontSampleContainer>
          <div>
            <FontExampleContainer fontName={fontName}>
              {noUpper ? null : (
                <FontExample>ABCDEFGHIJKLMNOPQRSTUVWXYZ</FontExample>
              )}
              {noLower ? null : (
                <FontExample>abcdefghijklmnopqrstuvwxyz</FontExample>
              )}
              {noNumbers ? null : <FontExample>{"1234567890&%{}"}</FontExample>}
            </FontExampleContainer>
            <FontUsageContainer>{children}</FontUsageContainer>
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
  noUpper: PropTypes.bool,
  noLower: PropTypes.bool,
  noNumbers: PropTypes.bool,
}

Font.defaultProps = {
  sampleSize: "120px",
  noUpper: false,
  noLower: false,
  noNumbers: false,
}

export { Font, FontUsageGuideline }
