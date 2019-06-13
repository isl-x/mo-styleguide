import styled from "styled-components"
import {
  XXXLARGE,
  XXLARGE,
  XLARGE,
  LARGE,
  MEDIUM,
  NORMAL,
  SMALL,
  TINY,
} from "../utils/spacing"

const Spacer = styled.div`
  display: block;
  width: 100%;

  ${props => {
    let height = 0
    if (props.xxxlarge) {
      height = XXXLARGE
    } else if (props.xxlarge) {
      height = XXLARGE
    } else if (props.xlarge) {
      height = XLARGE
    } else if (props.large) {
      height = LARGE
    } else if (props.medium) {
      height = MEDIUM
    } else if (props.normal) {
      height = NORMAL
    } else if (props.small) {
      height = SMALL
    } else if (props.tiny) {
      height = TINY
    }

    return `height: ${height}px`
  }}
`

export default Spacer
