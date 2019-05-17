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
      query SiteDataQuery {
        site {
          siteMetadata {
            title
            brand
            homePageLinks {
              pageUrl
              imgsrc
              linkText
            }
          }
        }
      }
    `}
    render={data => {
      const massagedTitle = title ? title : data.site.siteMetadata.title

      // Construct the footer links
      const siteLinks = data.site.siteMetadata.homePageLinks
      const currentPageIndex = siteLinks.findIndex(
        link => link.pageUrl === window.location.pathname
      )
      let nextPage = null
      let previousPage = null
      if (currentPageIndex !== -1) {
        if (siteLinks.length >= currentPageIndex + 1)
          nextPage = siteLinks[currentPageIndex + 1]
        if (currentPageIndex - 1 >= 0)
          previousPage = siteLinks[currentPageIndex - 1]
      }

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
          <Footer
            nextPage={nextPage}
            previousPage={previousPage}
            isIndex={isIndex}
          />
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
