import styled from "styled-components"
import PropTypes from "prop-types"

import { LARGE } from "../spacing"

const Grid = styled.div`
  max-width: 960px;
  margin: ${props => (props.headerFooterOffset ? LARGE : 0)}px auto;
`

Grid.propTypes = {
  headerFooterOffset: PropTypes.bool,
}

Grid.defaultProps = {
  headerFooterOffset: false,
}

export default Grid
