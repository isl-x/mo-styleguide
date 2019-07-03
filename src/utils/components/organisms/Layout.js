import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import Reset from "../atoms/Reset"
import Grid from "../atoms/Grid"
import Header from "../molecules/Header"
import Footer from "../molecules/Footer"
import ContextualNav from "../molecules/ContextualNav"
import { HOME_PAGE, SITE_METADATA } from "../../../config"
import { DEVICE } from "../../breakpoints"

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: ${props => (props.isIndex ? "row" : "column")};
  justify-content: space-between;
  min-height: 100vh;

  @media ${DEVICE.TABLET_DOWN} {
    flex-direction: column;
  }
`

class Layout extends React.Component {
  state = {
    currentPageRoute: null,
  }

  componentDidMount() {
    this.setState({ currentPageRoute: window.location.pathname })
  }

  render() {
    const { children, title, isIndex } = this.props
    const { currentPageRoute } = this.state
    const massagedTitle = title ? title : SITE_METADATA.SITE_TITLE

    // Construct the footer links
    const siteLinks = HOME_PAGE.HOME_PAGE_LINKS
    const currentPageIndex = siteLinks.findIndex(
      link => link.pageUrl === currentPageRoute
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
      <LayoutWrapper isIndex={isIndex}>
        <Reset />
        {isIndex ? (
          children
        ) : (
          <>
            <ContextualNav
              title={massagedTitle}
              currentPageIndex={currentPageIndex}
            />
            <Header
              siteMainText={massagedTitle}
              siteSubText={SITE_METADATA.SITE_TITLE}
            />
            <Grid headerFooterOffset>
              <main>{children}</main>
            </Grid>
            <Footer nextPage={nextPage} previousPage={previousPage} />
          </>
        )}
      </LayoutWrapper>
    )
  }
}

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
