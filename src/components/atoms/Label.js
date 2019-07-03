import styled from "styled-components"
import { S } from "../../utils/font-sizes"
import { PRIMARY_HIGHLIGHT_COLOR } from "../../utils/colors"
import { MEDIUM } from "../../utils/spacing"

const Label = styled.span`
  ${S}
  display: block;
  color: ${PRIMARY_HIGHLIGHT_COLOR};
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: ${MEDIUM}px;
`

export default Label
