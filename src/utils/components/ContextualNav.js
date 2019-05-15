import React from "react"
import styled from "styled-components"
import { throttle } from "lodash"

import Grid from "./Grid"
import { SLATE, WHITE } from "../colors"
import { NORMAL } from "../spacing"
import { HIGH_PRIORITY_Z_INDEX } from "../z-index"

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
`

const Dropdown = styled.div`
  height: 100%;
  min-width: 5rem;
  display: flex;
  align-items: center;

  &::after {
    margin-left: 10px;
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
  min-width: 5rem;
  list-style: none;
  background-color: ${SLATE};

  ${Dropdown}.active & {
    display: block;
  }
`

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

    // NOTE: We should probably handle going through the tab nav and releasing
    // the focus on tabbing

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

  onClick = (i, e) => {
    this.setState({
      isScrolling: true,
      current: i,
    })

    const title = e.currentTarget.innerHTML
    const el = document.querySelector(`[data-title="${title}"]`)
    if (!el) return

    // NOTE: We need to update the browser history probably.
    // Granted anchoring may not work super well because we aren't using IDs
    // const href = window.location.pathname + "#" + title

    const rect = el.getBoundingClientRect()
    const top = rect.top + (window.scrollY || window.pageYOffset) - 100

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
    let { current, isScrolling } = this.state
    if (isScrolling) return

    const anchors = Array.from(document.querySelectorAll("[data-type='block']"))
    anchors.forEach((anchor, i) => {
      const anchorOffsetTop = anchor.getBoundingClientRect().top
      // Check to see if the top most point is well out of view
      // NOTE: Handling a quick scroll zooming past the 200 mark for the
      // first entry
      if (i === 0 && anchorOffsetTop > 200) {
        current = i
        // Then do normal check to see which anchor should display
        // if no the first one
      } else if (anchorOffsetTop < 200) {
        current = i
      }
    })

    this.setState({
      current,
      showing: this.props.mainNav
        ? true
        : (window.scrollY || window.pageYOffset) > 240,
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
              tabIndex={0}
              onClick={this.openDropdown}
              onFocus={this.openDropdown}
            >
              {blocks[current]}
              <DropdownContents>
                {blocks.map((block, i) => {
                  return (
                    <li
                      key={i}
                      tabIndex={0}
                      onClick={this.onClick.bind(this, i)}
                    >
                      {block}
                    </li>
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
