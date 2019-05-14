import styled from "styled-components"
import { LARGE } from "../utils/spacing"

const Block = styled.div`
  margin: ${LARGE}px 0;

  &:first-of-type {
    margin-top: 0;
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`

export default Block
