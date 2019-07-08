import styled, { css } from "styled-components"
import { S, XXS } from "../../utils/font-sizes"
import { PRIMARY_HIGHLIGHT_COLOR } from "../../utils/colors"
import { MEDIUM, TINY } from "../../utils/spacing"

export const LABEL_BASE_STYLES = css`
  display: block;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
`

export const HighlightLabel = styled.span`
  ${LABEL_BASE_STYLES}
  ${S}
  color: ${PRIMARY_HIGHLIGHT_COLOR};
  margin-bottom: ${MEDIUM}px;
`

export const OpaqueLabel = styled.span`
  ${LABEL_BASE_STYLES}
  ${XXS}
  opacity: 0.5;
  margin-bottom: ${props =>
    props.marginBottom ? props.marginBottom : `${TINY}px`};
`
