import React from "react"
import styled from "styled-components"
import { throttle } from "lodash"

import Grid from "./Grid"
import { SLATE, WHITE } from "../colors"
import { NORMAL, SMALL } from "../spacing"
import { S } from "../font-sizes"
import { HIGH_PRIORITY_Z_INDEX } from "../z-index"
import { DEVICE } from "../breakpoints"

const ContextualNavContainer = styled.div`
  height: 10vh;
  width: 100%;
  top: 0;
  position: fixed;
  background-color: ${SLATE};
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
  color: ${WHITE};
`

const Title = styled.h1`
  border-right: solid 1px white;
  padding-right: ${NORMAL}px;
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
    border-bottom: 3px solid ${WHITE};
    border-right: 3px solid ${WHITE};
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
  background-color: ${SLATE};

  ${Dropdown}.active & {
    display: block;
  }
`

const DropdownItem = styled.li`
  padding: ${SMALL}px;
`

const NAV_OFFSET = 100
class ContextualNav extends React.Component {
  state = {
    current: 0,
    dropdownActive: false,
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
      const blocks = Array.from(blockElements).map(el => el.dataset.title)
      this.setState({ blocks: blocks })
    }
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll)
  }

  openDropdown = () => {
    this.setState({ dropdownActive: true })
  }
  closeDropdown = () => {
    this.setState({ dropdownActive: false })
  }

  onClickOrKeyPress = (i, e) => {
    // Do nothing with non-'enter' keypress
    if ((e.type === "keypress") & (e.key !== "Enter")) return

    this.setState({
      isScrolling: true,
      current: i,
    })

    // NOTE: This is slightly fragile in that the same 'title' will cause problems
    const title = e.currentTarget.innerHTML
    const el = document.querySelector(`[data-title="${title}"]`)
    if (!el) return

    // TODO: We need to update the browser history probably.
    // Granted anchoring may not work super well because we aren't using IDs
    // const href = window.location.pathname + "#" + title

    const rect = el.getBoundingClientRect()
    const top = rect.top + (window.scrollY || window.pageYOffset) - NAV_OFFSET

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
      } else if (anchorOffsetTop < NAV_OFFSET) {
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
    const { dropdownActive, showing, blocks, current } = this.state
    const { title } = this.props

    return (
      <ContextualNavContainer className={showing ? "showing" : null}>
        <Grid>
          <NavContentContainer>
            <Title>{title}</Title>
            <Dropdown
              className={dropdownActive ? "active" : null}
              ref="contextual-nav-dropdown"
              tabIndex={showing ? 0 : -1}
              onClick={this.openDropdown}
              onFocus={this.openDropdown}
            >
              {blocks[current]}
              <DropdownContents>
                {blocks.map((block, i) => {
                  return (
                    <DropdownItem
                      key={i}
                      tabIndex={0}
                      onClick={this.onClickOrKeyPress.bind(this, i)}
                      onKeyPress={this.onClickOrKeyPress.bind(this, i)}
                    >
                      {block}
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

export default ContextualNav
