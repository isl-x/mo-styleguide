import React from "react"
import styled from "styled-components"
import { PRIMARY_HIGHLIGHT_COLOR } from "../utils/colors"

const BaseDynamicSvg = styled.div`
  height: 15vh;
  width: 15vh;
  max-height: 200px;
  max-width: 200px;
  margin: 0 auto;

  * #Color * {
    fill: ${PRIMARY_HIGHLIGHT_COLOR} !important;
  }
`

const DynamicSvg = ({ filename }) => {
  const req = require.context(`../assets/dynamic_icons`, true, /\.svg$/)
  const IconTag = req(`./${filename}.svg`)

  return (
    <BaseDynamicSvg>
      <IconTag />
    </BaseDynamicSvg>
  )
}

export default DynamicSvg
