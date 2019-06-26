import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import Image from "./Image"
import { DEVICE } from "../utils/breakpoints"
import { SMALL } from "../utils/spacing"

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  > * {
    flex: 0 0 48%;
  }

  @media ${DEVICE.TABLET_DOWN} {
    flex-direction: ${props => (props.inverted ? "column-reverse" : "column")};
  }
`

Container.propTypes = {
  inverted: PropTypes.bool.isRequired,
}

const Body = styled.div`
  @media ${DEVICE.TABLET_DOWN} {
    margin-top: ${SMALL}px;
  }
`

const FiftyFifty = ({ children, imgsrc, imgRight }) => {
  const text = <Body>{children}</Body>
  const image = (
    <div>
      <Image imgsrc={imgsrc} />
    </div>
  )
  return (
    <Container inverted={imgRight}>
      {imgRight ? text : image}
      {imgRight ? image : text}
    </Container>
  )
}

FiftyFifty.propTypes = {
  children: PropTypes.node.isRequired,
  imgsrc: PropTypes.string.isRequired,
  imgRight: PropTypes.bool.isRequired,
}

export default FiftyFifty
