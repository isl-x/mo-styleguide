import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import { PRIMARY_HIGHLIGHT_COLOR, WHITE } from "../utils/colors"
import { NORMAL, TINY, MEDIUM, SMALL } from "../utils/spacing"
import { DEVICE } from "../utils/breakpoints"
import { useSiteFiles } from "../utils/hooks"
import { M, XS } from "../utils/font-sizes"
import { FaDownload } from "react-icons/fa"

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
  padding: ${MEDIUM}px;
  border-color: green;
  border-style: solid;
  border-width: 1px 0 1px 1px;
  text-align: center;
`

const FontSample = styled.div`
  font-family: ${props => `${props.fontName}`};
  font-size: ${props => props.sampleSize};
  line-height: ${props => props.sampleSize};
`

const FontType = styled.h4`
  margin: 0;
`

FontSample.propTypes = {
  fontName: PropTypes.string.isRequired,
  sampleSize: PropTypes.string.isRequired,
}

/** DOWNLOAD **/
const DownloadButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border-style: solid;
  border-color: green;
  border-width: 0 0 1px 1px;
  cursor: pointer;
`

const DownloadText = styled.div`
  ${XS}
  padding: ${TINY}px;
  flex-basis: 80%;
  text-transform: uppercase;
  text-align: center;
`

const DownloadIconContainer = styled.span`
  background-color: ${PRIMARY_HIGHLIGHT_COLOR};
  color: ${WHITE};
  text-align: center;
  flex-basis: 20%;
  padding: ${SMALL}px;
`

/** GUIDELINES AND EXAMPLES (RIGHT SIDE OF BLOCK) **/
const FontWeightSampleBase = styled.div``

const FontName = styled.h1`
  font-family: ${props => `${props.fontName}`};
`

const FontDetails = styled.div`
  padding: ${MEDIUM}px;
  border: 1px solid green;
  width: 100%;
`

const FontExampleContainer = styled.div`
  ${M}
  font-family: ${props => `${props.fontName}`};
  font-weight: ${props => (props.weight ? props.weight : "normal")};
  letter-spacing: 10px;
  margin-bottom: ${NORMAL}px;
`

FontExampleContainer.propTypes = {
  fontName: PropTypes.string.isRequired,
}

const FontExample = styled.p`
  margin-bottom: ${TINY}px;
`

const FontWeightSample = ({
  label,
  weight,
  fontName,
  noUpper,
  noLower,
  noNumbers,
  noWeightNumbers,
}) => (
  <FontWeightSampleBase>
    <span>
      {label}
      {weight && !noWeightNumbers ? ` - ${weight}` : null}
    </span>
    <FontExampleContainer fontName={fontName} weight={weight}>
      {noUpper ? null : <FontExample>ABCDEFGHIJKLMNOPQRSTUVWXYZ</FontExample>}
      {noLower ? null : <FontExample>abcdefghijklmnopqrstuvwxyz</FontExample>}
      {noNumbers ? null : <FontExample>{"1234567890&%{}"}</FontExample>}
    </FontExampleContainer>
  </FontWeightSampleBase>
)

const Font = ({
  fontName,
  fontFileName,
  usageName,
  sample,
  sampleSize,
  children,
}) => {
  const { edges } = useSiteFiles()
  const completeFile = edges
    ? edges.find(file => file.node.name === fontFileName)
    : null
  const modifiedChildren = React.Children.map(children, child => {
    return React.cloneElement(child, {
      fontName: fontName,
    })
  })

  return (
    <FontContainer url={completeFile.node.publicURL} name={fontName}>
      <div>
        <FontSampleContainer>
          <FontSample sampleSize={sampleSize} fontName={fontName}>
            {sample}
          </FontSample>
          <FontType>{usageName}</FontType>
        </FontSampleContainer>
        <DownloadButton>
          <DownloadText>Download Font</DownloadText>
          <DownloadIconContainer>
            <FaDownload />
          </DownloadIconContainer>
        </DownloadButton>
      </div>
      <FontDetails>
        <FontName fontName={fontName}>{fontName}</FontName>
        {modifiedChildren}
        <div />
      </FontDetails>
    </FontContainer>
  )
}

Font.propTypes = {
  fontName: PropTypes.string.isRequired,
  fontFileName: PropTypes.string.isRequired,
  sample: PropTypes.string.isRequired,
  sampleSize: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.shape({
      type: PropTypes.oneOf([FontWeightSample]),
    }),
    PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.oneOf([FontWeightSample]),
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

export { Font, FontWeightSample }
