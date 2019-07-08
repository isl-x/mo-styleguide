import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import { PRIMARY_HIGHLIGHT_COLOR, WHITE, GREY } from "../utils/colors"
import { NORMAL, TINY, MEDIUM, SMALL } from "../utils/spacing"
import { DEVICE } from "../utils/breakpoints"
import { useSiteFiles } from "../utils/hooks"
import { M, XXS, XXL, XS } from "../utils/font-sizes"
import { OPAQUE_FONT } from "../utils/font-styles"
import ArrowToBottom from "../utils/components/atoms/ArrowToBottom"
import { SECTION_BORDER as SB } from "../utils/borders"
import { LABEL_BASE_STYLES } from "./atoms/Labels"

/** BASE CONTAINER FOR THE BLOCK **/
const FontContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: ${NORMAL}px;

  @media ${DEVICE.TABLET_DOWN} {
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
  width: 300px;
  padding: ${MEDIUM}px;
  border-color: ${SB.COLOR};
  border-style: ${SB.STYLE};
  border-width: ${SB.WIDTH} 0 ${SB.WIDTH} ${SB.WIDTH};
  text-align: center;

  @media ${DEVICE.TABLET_DOWN} {
    width: 100%;
    border-width: ${SB.WIDTH};
  }
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
const DownloadText = styled.div`
  ${XXS}
  ${OPAQUE_FONT}
  ${LABEL_BASE_STYLES}
  padding: ${TINY}px;
  width: 100%;
  text-align: center;
`

const DownloadIconContainer = styled.span`
  display: flex;
  background-color: ${PRIMARY_HIGHLIGHT_COLOR};
  fill: ${WHITE};
  text-align: center;
  padding: ${SMALL}px;
`

const DownloadButton = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-style: ${SB.STYLE};
  border-color: ${SB.COLOR};
  border-width: 0 0 ${SB.WIDTH} ${SB.WIDTH};
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  transition: all 0.2s;

  &:hover {
    background-color: ${GREY};

    ${DownloadText} {
      opacity: 1;
    }
  }

  @media ${DEVICE.TABLET_DOWN} {
    display: none;
  }
`

/** GUIDELINES AND EXAMPLES (RIGHT SIDE OF BLOCK) **/
const FontWeightSampleBase = styled.div`
  margin: ${MEDIUM}px 0;

  &:last-of-type {
    margin-bottom: 0;
  }
`

const FontName = styled.h1`
  ${XXL}
  font-family: ${props => `${props.fontName}`};
`

const FontDetails = styled.div`
  padding: ${MEDIUM}px;
  border: ${SB.WIDTH} ${SB.STYLE} ${SB.COLOR};
  width: 100%;
  min-width: 0;

  @media ${DEVICE.TABLET_DOWN} {
    border: none;
  }
`

const FontExampleContainer = styled.div`
  ${M}
  font-family: ${props => `${props.fontName}`};
  font-weight: ${props => (props.weight ? props.weight : "normal")};
  letter-spacing: 15px;

  @media ${DEVICE.PHONE_ONLY} {
    ${XS}
  }
`

FontExampleContainer.propTypes = {
  fontName: PropTypes.string.isRequired,
  weight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

const FontExample = styled.p`
  margin-bottom: ${TINY}px;

  :last-of-type {
    margin-bottom: 0;
  }
`

const Label = styled.h5`
  ${XXS}
  ${LABEL_BASE_STYLES}
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
    <Label>
      {label}
      {weight && !noWeightNumbers ? ` - ${weight}` : null}
    </Label>
    <FontExampleContainer fontName={fontName} weight={weight}>
      {noUpper ? null : <FontExample>ABCDEFGHIJKLMNOPQRSTUVWXYZ</FontExample>}
      {noLower ? null : <FontExample>abcdefghijklmnopqrstuvwxyz</FontExample>}
      {noNumbers ? null : <FontExample>{"1234567890&%{}"}</FontExample>}
    </FontExampleContainer>
  </FontWeightSampleBase>
)

FontWeightSample.propTypes = {
  label: PropTypes.string.isRequired,
  weight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fontName: PropTypes.string,
  noUpper: PropTypes.bool,
  noLower: PropTypes.bool,
  noNumbers: PropTypes.bool,
  noWeightNumbers: PropTypes.bool,
}

FontWeightSample.defaultProps = {
  noUpper: false,
  noLower: false,
  noNumbers: false,
  noWeightNumbers: false,
}

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
        <DownloadButton
          role="button"
          download
          href={completeFile ? completeFile.node.publicURL : null}
        >
          <DownloadText>Download Font</DownloadText>
          <DownloadIconContainer>
            <ArrowToBottom />
          </DownloadIconContainer>
        </DownloadButton>
      </div>
      <FontDetails>
        <FontName fontName={fontName}>{fontName}</FontName>
        {modifiedChildren}
      </FontDetails>
    </FontContainer>
  )
}

Font.propTypes = {
  fontName: PropTypes.string.isRequired,
  fontFileName: PropTypes.string.isRequired,
  usageName: PropTypes.string.isRequired,
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
}

Font.defaultProps = {
  sampleSize: "120px",
}

export { Font, FontWeightSample }
