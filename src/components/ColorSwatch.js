import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import { NORMAL, SMALL, TINY } from "../utils/spacing"
import { LINK_BACKGROUND_COLOR } from "../utils/colors"
import { DEVICE } from "../utils/breakpoints"

/* SWATCH DETAILS */
const ColorSwatchDescription = styled.p``

/* SWATCH CONTAINER */
const ColorSwatchContainerBase = styled.div`
  ${({ secondary, colCount }) => {
    if (secondary)
      return `
      display: flex;
      flex-direction: column;
    `

    return `  
      display: grid;
      grid-auto-rows: 400px;
      margin: 0 auto;
      grid-template-columns: repeat(auto-fit, minmax(${100 / colCount +
        1}%, 1fr));
      grid-gap: ${SMALL}px;
    
      @media ${DEVICE.TABLET_ONLY} {
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      }

      @media ${DEVICE.PHONE_ONLY} {
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      }
    `
  }}
`

const ColorSwatchContainer = ({ secondary, colCount, children }) => {
  // Add the secondary flag to all the child swatches
  const modifiedChildren = React.Children.map(children, child => {
    return React.cloneElement(child, {
      secondary: secondary,
    })
  })
  return (
    <ColorSwatchContainerBase secondary={secondary} colCount={colCount}>
      {modifiedChildren}
    </ColorSwatchContainerBase>
  )
}

/* INDIVIDUAL SWATCH PALETTES */
const ColorSwatchBase = styled.div`
  display: flex;
  flex-direction: ${props => (props.secondary ? "row" : "column")};
  justify-content: center;

  ${({ secondary }) => {
    if (secondary)
      return `
        margin: ${TINY}px 0;

        :first-of-type {
          margin-top: 0;
        }

        :last-of-type {
          margin-bottom: 0;
        }
      `

    return `
      background: ${LINK_BACKGROUND_COLOR};
      align-items: center;
    `
  }}
`

const ColorExample = styled.div`
  background-color: ${props => props.color};
  content: "";

  ${({ secondary }) => {
    if (secondary)
      return `
      flex-basis: 20%;
      margin-right: ${SMALL}px;
    `

    return `  
      min-height: 60%;
      min-width: 100%;
    `
  }}
`

const ColorDetails = styled.div`
  display: flex;
  flex-direction: row;

  ${({ secondary }) => {
    if (secondary)
      return `
      flex-basis: 80%;
      background: ${LINK_BACKGROUND_COLOR};
      align-items: center;
      padding: ${NORMAL}px;

      @media ${DEVICE.PHONE_ONLY} {
        flex-wrap: wrap;
      }
    `

    return `  
      min-width: 100%;
      min-height: 40%;
    `
  }}
`

const ColorName = styled.h3`
  ${({ secondary }) => {
    // 1/4 of the content is this first section
    if (secondary)
      return `
      flex-basis: 25%;
      text-align: left;
      padding-right: ${TINY}px;
      margin-bottom: 0;

      @media ${DEVICE.PHONE_ONLY} {
        margin-bottom: ${TINY}px;
      }
    `

    return `
      min-width: 40%;
      padding: ${SMALL}px 0 0 ${SMALL}px;
    `
  }}
`

const ColorDetailsContainer = styled.div`
  display: flex;
  flex-direction: ${props => (props.secondary ? "row" : "column")};
  justify-content: ${props =>
    props.secondary ? "space-around" : "flex-start"};

  ${({ secondary }) => {
    if (secondary)
      return `
        flex-wrap: wrap; 
        flex-basis: 75%;
      `

    return `padding-top: ${SMALL}px`
  }}
`

const ColorDetail = styled.span`
  ${({ secondary }) => secondary && "flex-basis: 200px; flex-grow: 1;"}
`

const ColorDetailValue = styled.span`
  user-select: all;
`

const ColorSwatch = ({ title, hex, rgb, cmyk, pms, secondary }) => (
  <ColorSwatchBase secondary={secondary}>
    <ColorExample secondary={secondary} color={hex} />
    <ColorDetails secondary={secondary}>
      <ColorName secondary={secondary}>{title}</ColorName>
      <ColorDetailsContainer secondary={secondary}>
        <ColorDetail secondary={secondary}>
          {hex ? (
            <>
              HEX: <ColorDetailValue>{hex}</ColorDetailValue>
            </>
          ) : null}
        </ColorDetail>
        <ColorDetail secondary={secondary}>
          {rgb ? (
            <>
              RGB: <ColorDetailValue>{rgb}</ColorDetailValue>
            </>
          ) : null}
        </ColorDetail>
        <ColorDetail secondary={secondary}>
          {cmyk ? (
            <>
              CMYK: <ColorDetailValue>{cmyk}</ColorDetailValue>
            </>
          ) : null}
        </ColorDetail>
        {secondary ? null : (
          <ColorDetail>
            {pms ? (
              <>
                PMS: <ColorDetailValue>{pms}</ColorDetailValue>
              </>
            ) : null}
          </ColorDetail>
        )}
      </ColorDetailsContainer>
    </ColorDetails>
  </ColorSwatchBase>
)

ColorSwatch.propTypes = {
  title: PropTypes.string,
  hex: PropTypes.string,
  rbg: PropTypes.string,
  cmyk: PropTypes.string,
  pms: PropTypes.string,
}
ColorSwatch.defaultProps = {
  title: "Black",
  hex: "#000",
}

ColorSwatchContainer.propTypes = {
  colCount: PropTypes.number.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.shape({
      type: PropTypes.oneOf([ColorSwatch]),
    }),
    PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.oneOf([ColorSwatch]),
      })
    ),
  ]),
}
ColorSwatchContainer.defaultProps = {
  colCount: 4,
}

export { ColorSwatchDescription, ColorSwatchContainer, ColorSwatch }
