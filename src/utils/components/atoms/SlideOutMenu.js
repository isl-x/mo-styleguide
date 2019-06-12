import PropTypes from "prop-types"
import React from "react"
import styled, { createGlobalStyle } from "styled-components"

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
import { DEVICE } from "../../breakpoints"
import { HOME_PAGE } from "../../../config"

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

  /* Active state */
  /* NOTE:   Both the height and the translate 64 px are a bit magic
             number-y. They are both derived from the font-size (XL) 
             and margin-bottom (MEDIUM) of each of the <li>'s.
             The 10px offset Y is to help give the active state a centered
             look.
  */
  &::before {
    left: 0;
    position: absolute;
    background-color: ${PRIMARY_FOREGROUND_COLOR};
    opacity: 0.1;
    width: 100%;
    height: 60px;
    content: "";
    z-index: ${HIGH_PRIORITY_Z_INDEX};
    transform: ${props =>
      props.currentPageIndex > 0
        ? `translate(-60%, ${64 * props.currentPageIndex - 10}px)`
        : "translate(-60%, -10px)"};

    @media ${DEVICE.TABLET_DOWN} {
      transform: ${props =>
        props.currentPageIndex > 0
          ? `translate(-20%, ${64 * props.currentPageIndex - 10}px)`
          : "translate(-20%, -10px)"};
    }
  }

  /* Background */
  &::after {
    position: absolute;
    display: inline-block;
    background: ${PRIMARY_BACKGROUND_COLOR};
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
    content: "";
    transform: translateX(-60%);

    @media ${DEVICE.TABLET_DOWN} {
      transform: translateX(-20%);
    }
  }
`

const MenuItem = styled.li`
  ${XL};
  z-index: ${HIGH_PRIORITY_Z_INDEX};
  position: relative;
  color: ${PRIMARY_FOREGROUND_COLOR};
  margin-bottom: ${NORMAL}px;
`

const SlideOutMenu = ({ active, currentPageIndex }) => {
  const siteLinks = HOME_PAGE.HOME_PAGE_LINKS

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
          <MenuContainer style={active ? null : { display: "none" }}>
            <MenuSubText>Jump to</MenuSubText>
            <Menu currentPageIndex={currentPageIndex}>
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
}

SlideOutMenu.propTypes = {
  active: PropTypes.bool.isRequired,
}

export default SlideOutMenu
