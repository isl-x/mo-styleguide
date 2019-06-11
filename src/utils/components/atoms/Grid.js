import styled from "styled-components"
import PropTypes from "prop-types"

import { SMALL, LARGE, XLARGE } from "../../spacing"
import { DEVICE } from "../../breakpoints"

const Grid = styled.div`
  max-width: 1400px;
  width: 100%;
  height: 100%;
  padding: 0 ${XLARGE}px;
  margin: ${props => (props.headerFooterOffset ? LARGE : 0)}px auto;

  @media ${DEVICE.PHONE_ONLY} {
       padding: 0 ${SMALL}px;
  }
`

Grid.propTypes = {
  headerFooterOffset: PropTypes.bool,
}

Grid.defaultProps = {
  headerFooterOffset: false,
}

export default Grid
