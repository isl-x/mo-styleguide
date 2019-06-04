import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import { SMALL } from "../utils/spacing"
import { LINK_BACKGROUND_COLOR } from "../utils/colors"
import { DEVICE } from "../utils/breakpoints"

/* SWATCH DETAILS */
const ColorSwatchDescription = styled.p``

/* SWATCH CONTAINER */

const ColorSwatchContainer = styled.div`
  display: grid;
  grid-auto-rows: 300px;
  margin: 0 auto;
  grid-template-columns: ${props =>
    `repeat(auto-fit, minmax(${100 / (props.colCount + 1)}%, 1fr))`};
  grid-gap: ${SMALL}px;

  @media ${DEVICE.TABLET_DOWN} {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
`

/* INDIVIDUAL SWATCH PALETTES */

const ColorSwatchBase = styled.div`
  background: ${LINK_BACKGROUND_COLOR};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ColorExample = styled.div`
  min-height: 60%;
  min-width: 100%;
  background-color: ${props => props.color};
  content: "";
`

const ColorDetails = styled.div`
  min-width: 100%;
  min-height: 40%;
  display: flex;
  flex-direction: row;
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

const ColorSwatch = ({ title, hex, rgb, cmyk, pms }) => (
  <ColorSwatchBase>
    <ColorExample color={hex} />
    <ColorDetails>
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
