import styled from "styled-components"
import PropTypes from "prop-types"

import { LARGE, MEDIUM } from "../../spacing"
import { DEVICE } from "../../breakpoints"

const Grid = styled.div`
  max-width: 1400px;
  width: 100%;
  height: 100%;
  padding: 0 120px;
  margin: ${props => (props.headerFooterOffset ? LARGE : 0)}px auto;

  @media ${DEVICE.TABLET_DOWN} {
    padding: 0 ${MEDIUM}px;
  }
`

Grid.propTypes = {
  headerFooterOffset: PropTypes.bool,
}

Grid.defaultProps = {
  headerFooterOffset: false,
}

export default Grid
