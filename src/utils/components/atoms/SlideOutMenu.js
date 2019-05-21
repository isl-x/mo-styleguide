import PropTypes from "prop-types"
import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import { StaticQuery } from "gatsby"

import { HIGH_PRIORITY_Z_INDEX } from "../../z-index"
import Grid from "./Grid"
import {
  BLACK,
  PRIMARY_BACKGROUND_COLOR,
  PRIMARY_FOREGROUND_COLOR,
} from "../../colors"
import { NORMAL } from "../../spacing"
import { XL } from "../../font-sizes"
import Link from "./Link"

const BodyStyles = createGlobalStyle`
    html {
        overflow: hidden;
    }
`

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: ${HIGH_PRIORITY_Z_INDEX};
  position: absolute;
  background: ${BLACK};
  opacity: 0.2;
`

const SlideOutContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: ${HIGH_PRIORITY_Z_INDEX};
  transform: translateX(-100%);
  transition: all 0.3s;
`

const MenuContainer = styled.div`
  padding-top: 15vh;
  width: fit-content;
`

const MenuSubText = styled.p`
  z-index: ${HIGH_PRIORITY_Z_INDEX};
  position: relative;
  color: ${PRIMARY_FOREGROUND_COLOR};
  opacity: 0.6;
  margin-bottom: ${NORMAL}px;
`

const Menu = styled.ul`
  list-style: none;
  margin-left: 0;

  &::after {
    position: absolute;
    display: inline-block;
    background: ${PRIMARY_BACKGROUND_COLOR};
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
    content: "";
    transform: translateX(-70%);
  }
`

const MenuItem = styled.li`
  ${XL};
  z-index: ${HIGH_PRIORITY_Z_INDEX};
  position: relative;
  color: ${PRIMARY_FOREGROUND_COLOR};
  margin-bottom: ${NORMAL}px;
`

const SlideOutMenu = ({ active }) => (
  <StaticQuery
    query={graphql`
      query SiteLinksQuery {
        site {
          siteMetadata {
            homePageLinks {
              pageUrl
              linkText
            }
          }
        }
      }
    `}
    render={data => {
      const siteLinks = data.site.siteMetadata.homePageLinks

      return (
        <>
          {active ? (
            <>
              <BodyStyles />
              <Background />
            </>
          ) : null}
          <SlideOutContainer
            style={active ? { transform: "translateX(0%)" } : null}
          >
            <Grid>
              <MenuContainer>
                <MenuSubText>Jump to</MenuSubText>
                <Menu>
                  {siteLinks &&
                    siteLinks.map((link, i) => (
                      <MenuItem key={i}>
                        <Link to={link.pageUrl}>{link.linkText}</Link>
                      </MenuItem>
                    ))}
                </Menu>
              </MenuContainer>
            </Grid>
          </SlideOutContainer>
        </>
      )
    }}
  />
)

SlideOutMenu.propTypes = {
  active: PropTypes.bool.isRequired,
}

export default SlideOutMenu
