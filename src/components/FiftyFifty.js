import React from "react"
import styled from "styled-components"

import Image from "./Image"
import { DEVICE } from "../utils/breakpoints"

const FiftyFiftyContainer = styled.div`
  display: flex;
  flex-direction: row;

  > * {
    width: 50%;
  }

  @media ${DEVICE.PHONE_ONLY} {
    flex-direction: column;

    > * {
      width: 100%;
    }
  }
`

const FiftyFifty = () => {
  return (
    <FiftyFiftyContainer>
      <Image imgsrc="random-wide-image.png" />
      <p>Split</p>
    </FiftyFiftyContainer>
  )
}

export default FiftyFifty
