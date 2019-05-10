/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Reset from "./Reset"
import Grid from "./Grid"

import Header from "../../components/Header"
import Footer from "../../components/Footer"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            brand
          }
        }
      }
    `}
    render={data => (
      <>
        <Reset />
        <Header
          siteTitle={data.site.siteMetadata.title}
          siteBrand={data.site.siteMetadata.brand}
        />
        <Grid headerFooterOffset>
          <main>{children}</main>
        </Grid>
        <Footer>Lorem Ipsum Footer</Footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
