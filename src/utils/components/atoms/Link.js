import React from "react"
import PropTypes from "prop-types"
import { Link as GatsbyLink } from "gatsby"

// Override default Gatsby Link to make it very generic
const Link = ({ children, to, style, tabIndex }) => (
  <GatsbyLink
    tabIndex={tabIndex ? tabIndex : 0}
    to={to}
    style={{ textDecoration: "none", color: "inherit", ...style }}
  >
    {children}
  </GatsbyLink>
)

Link.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
  style: PropTypes.object,
  tabIndex: PropTypes.number,
}

export default Link
