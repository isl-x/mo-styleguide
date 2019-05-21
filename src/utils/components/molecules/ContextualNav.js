import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { throttle } from "lodash"

import Grid from "../atoms/Grid"
import Hamburger from "../atoms/Hamburger"
import {
  PRIMARY_BACKGROUND_COLOR,
  PRIMARY_FOREGROUND_COLOR,
} from "../../colors"
import { NORMAL, SMALL } from "../../spacing"
import { S } from "../../font-sizes"
import { HIGH_PRIORITY_Z_INDEX } from "../../z-index"
import { DEVICE } from "../../breakpoints"
import { DIVIDER_BORDER } from "../../borders"
import SlideOutMenu from "../atoms/SlideOutMenu"

const ContextualNavContainer = styled.div`
  height: 10vh;
  width: 100%;
  top: 0;
  position: fixed;
  background-color: ${PRIMARY_BACKGROUND_COLOR};
  transform: translateY(-100%);
  transition: 0.3s transform;
  z-index: ${HIGH_PRIORITY_Z_INDEX};

  &.showing {
    transform: translateY(0);
  }
`

const NavContentContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  color: ${PRIMARY_FOREGROUND_COLOR};
`

const Title = styled.h1`
  border-right: ${DIVIDER_BORDER};
  padding: 0 ${NORMAL}px;
  margin-right: ${NORMAL}px;

  @media ${DEVICE.PHONE_ONLY} {
    ${S}
  }
`

const DROPDOWN_MIN_W = "5rem"
const Dropdown = styled.div`
  height: 100%;
  min-width: ${DROPDOWN_MIN_W};
  display: flex;
  align-items: center;

  &::after {
    margin-left: ${SMALL}px;
    border-radius: 2px;
    border-bottom: 3px solid ${PRIMARY_FOREGROUND_COLOR};
    border-right: 3px solid ${PRIMARY_FOREGROUND_COLOR};
    width: 14px;
    height: 14px;
    content: "";
    display: block;
    transform: translateY(-2px) scale(1) rotate(45deg);
    transition: transform 0.2s;
  }

  &.active::after {
    transform: translateY(2px) scale(-1) rotate(45deg);
  }
`

const DropdownContents = styled.ul`
  display: none;
  position: absolute;
  margin: 0;
  top: 100%;
  min-width: ${DROPDOWN_MIN_W};
  max-height: 300px;
  overflow-y: scroll;
  list-style: none;
  background-color: ${PRIMARY_BACKGROUND_COLOR};

  ${Dropdown}.active & {
    display: block;
  }
`

const DropdownItem = styled.li`
  padding: ${SMALL}px;
`

export const NAV_OFFSET = 100
class ContextualNav extends React.Component {
  state = {
    current: 0,
    dropdownActive: false,
    slideOutActive: false,
    showing: false,
    blocks: [],
    isScrolling: false,
  }

  componentDidMount() {
    this.onScroll()
    window.addEventListener("scroll", this.onScroll)
    window.addEventListener(
      "mousemove",
      throttle(e => {
        let { target } = e
        let navRef = this.refs["contextual-nav-dropdown"]

        if (
          target &&
          navRef &&
          !(navRef.contains(target) || navRef === target)
        ) {
          this.setState({ dropdownActive: false })
          this.refs["contextual-nav-dropdown"].blur()
        }
      }, 250)
    )

    // Populate the list of items in the visible dropdown for the nav
    const blockElements = document.querySelectorAll('[data-type="block"]')
    if (blockElements) {
      const blocks = Array.from(blockElements).map(el => {
        return { title: el.dataset.title, id: el.id }
      })
      this.setState({ blocks: blocks })
    }
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll)
  }

  openDropdown = () => {
    this.setState({ dropdownActive: true })
  }

  openSlideout = () => {
    this.setState({ slideOutActive: !this.state.slideOutActive })
  }

  onClickOrKeyPress = (i, e) => {
    // Do nothing with non-'enter' keypress
    if ((e.type === "keypress") & (e.key !== "Enter")) return

    this.setState({
      isScrolling: true,
      current: i,
    })

    const id = e.currentTarget.dataset.target
    const el = document.getElementById(`${id}`)
    if (!el) return

    window.history.replaceState({}, "", window.location.pathname + "#" + id)

    const rect = el.getBoundingClientRect()
    const top = rect.top + (window.scrollY || window.pageYOffset)

    window.scrollTo({
      top,
      behavior: "smooth",
    })

    // NOTE: A relatively long wait time here accounts for long scroll distances
    // but we could potentially be a bit more scientific about things
    window.setTimeout(() => {
      this.setState({ isScrolling: false })
    }, 1000)
  }

  onScroll = throttle(e => {
    let { current, isScrolling, dropdownActive } = this.state
    if (isScrolling) return

    const anchors = Array.from(document.querySelectorAll("[data-type='block']"))
    anchors.forEach((anchor, i) => {
      const anchorOffsetTop = anchor.getBoundingClientRect().top
      // Check to see if the top most point is well out of view
      // NOTE: Handling a quick scroll zooming past the 100 mark for the
      // first entry
      if (i === 0 && anchorOffsetTop > NAV_OFFSET) {
        current = i
        // Then do normal check to see which anchor should display
        // if not the first one
      } else if (anchorOffsetTop < NAV_OFFSET + 50) {
        current = i
      }
    })

    const showNav = (window.scrollY || window.pageYOffset) > NAV_OFFSET
    if (!showNav) this.refs["contextual-nav-dropdown"].blur()
    this.setState({
      current,
      showing: showNav,
      dropdownActive: dropdownActive
        ? showNav === false
          ? false
          : dropdownActive
        : dropdownActive,
      isScrolling: false,
    })
  }, 500)

  render() {
    const {
      dropdownActive,
      slideOutActive,
      showing,
      blocks,
      current,
    } = this.state
    const { title } = this.props

    return (
      <ContextualNavContainer className={showing ? "showing" : null}>
        <SlideOutMenu active={slideOutActive && showing} />
        <Grid>
          <NavContentContainer>
            <Hamburger active={slideOutActive} onClick={this.openSlideout} />
            <Title>{title}</Title>
            <Dropdown
              className={dropdownActive ? "active" : null}
              ref="contextual-nav-dropdown"
              tabIndex={showing ? 0 : -1}
              onClick={this.openDropdown}
              onFocus={this.openDropdown}
            >
              {blocks[current] ? blocks[current].title : null}
              <DropdownContents>
                {blocks.map((block, i) => {
                  return (
                    <DropdownItem
                      key={i}
                      tabIndex={0}
                      data-target={block.id}
                      onClick={this.onClickOrKeyPress.bind(this, i)}
                      onKeyPress={this.onClickOrKeyPress.bind(this, i)}
                    >
                      {block.title}
                    </DropdownItem>
                  )
                })}
              </DropdownContents>
            </Dropdown>
          </NavContentContainer>
        </Grid>
      </ContextualNavContainer>
    )
  }
}

ContextualNav.propTypes = {
  title: PropTypes.string.isRequired,
}

export default ContextualNav
