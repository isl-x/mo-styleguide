/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"

import Reset from "./Reset"
import Grid from "./Grid"

import Header from "../../components/Header"
import Footer from "../../components/Footer"
import ContextualNav from "./ContextualNav"

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`

const Layout = ({ children, title, isIndex }) => (
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
    render={data => {
      const massagedTitle = title ? title : data.site.siteMetadata.title

      return (
        <LayoutWrapper>
          <Reset />
          {isIndex ? null : <ContextualNav title={massagedTitle} />}
          <Header
            siteMainText={massagedTitle}
            siteSubText={
              isIndex
                ? data.site.siteMetadata.brand
                : `<- Back to ${data.site.siteMetadata.title}`
            }
            isIndex={isIndex}
          />
          <Grid headerFooterOffset>
            <main>{children}</main>
          </Grid>
          <Footer>Lorem Ipsum Footer</Footer>
        </LayoutWrapper>
      )
    }}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isIndex: PropTypes.bool,
  title: PropTypes.string,
}

Layout.defaultProps = {
  title: "",
  isIndex: false,
}

export default Layout
