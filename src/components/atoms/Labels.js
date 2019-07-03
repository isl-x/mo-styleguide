import styled, { css } from "styled-components"
import { S, XS } from "../../utils/font-sizes"
import { PRIMARY_HIGHLIGHT_COLOR } from "../../utils/colors"
import { MEDIUM, TINY } from "../../utils/spacing"

const baseStyles = css`
  display: block;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
`

const HighlightLabel = styled.span`
  ${baseStyles}
  ${S}
  color: ${PRIMARY_HIGHLIGHT_COLOR};
  margin-bottom: ${MEDIUM}px;
`

const OpaqueLabel = styled.span`
  ${baseStyles}
  ${XS}
  opacity: 0.5;
  margin-bottom: ${TINY}px;
`

export { HighlightLabel, OpaqueLabel }
