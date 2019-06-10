import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import { SMALL, TINY } from "../utils/spacing"
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
      grid-auto-rows: 300px;
      margin: 0 auto;
      grid-template-columns: repeat(auto-fit, minmax(${100 / colCount +
        1}%, 1fr));
      grid-gap: ${SMALL}px;
    
      @media ${DEVICE.TABLET_DOWN} {
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
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
    `

    return `  
      min-width: 100%;
      min-height: 40%;
    `
  }}
`

const ColorName = styled.h3`
  min-width: 40%;
  padding: ${SMALL}px 0 0 ${SMALL}px;
`

const ColorDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const ColorSwatch = ({ title, hex, rgb, cmyk, pms, secondary }) => (
  <ColorSwatchBase secondary={secondary}>
    <ColorExample secondary={secondary} color={hex} />
    <ColorDetails secondary={secondary}>
      <ColorName>{title}</ColorName>
      <ColorDetailsContainer>
        <span>HEX: {hex}</span>
        <span>RGB: {rgb}</span>
        <span>CMYK: {cmyk}</span>
        <span>PMS: {pms}</span>
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
  rbg: "-",
  cmyk: "-",
  pms: "-",
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
