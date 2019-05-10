import React from "react"
import PropTypes from "prop-types"
import { Link as GatsbyLink } from "gatsby"

// Override default Gatsby Link to make it very generic
const Link = ({ children, to }) => (
  <GatsbyLink to={to} style={{ textDecoration: "none" }}>
    {children}
  </GatsbyLink>
)

Link.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
}

export default Link
