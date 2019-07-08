import React from "react"
import styled from "styled-components"

import { PRIMARY_FOREGROUND_COLOR } from "../../colors"
import { HIGH_PRIORITY_Z_INDEX } from "../../z-index"
import { DEVICE } from "../../breakpoints"
import { XTINY } from "../../spacing"

const HamburgerButton = styled.a`
  display: inline-block;
  position: relative;
  cursor: pointer;
  z-index: ${HIGH_PRIORITY_Z_INDEX};
  padding: 0 1rem;
  margin: -1rem;

  @media ${DEVICE.PHONE_ONLY} {
    padding: 0 ${XTINY}px;
  }
`

const HamburgerBun = styled.span`
  display: block;
  /* Magic numbers very specific to constructing the hamburger */
  width: 33px;
  height: 4px;
  transform-origin: 4px 0px;
  margin-bottom: 5px;
  border-radius: 3px;
  position: relative;

  background: ${PRIMARY_FOREGROUND_COLOR};
  z-index: ${HIGH_PRIORITY_Z_INDEX};
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
    background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;

  &:first-of-type {
    transform-origin: 0% 0%;
  }

  &:last-of-type {
    transform-origin: 0% 100%;
    margin-bottom: 0;
  }
`

const hamburgerTopSectionActiveStyles = {
  transform: "rotate(45deg) translate(3px, -3px)",
}
const hamburgerMiddleSectionActiveStyles = {
  opacity: 0,
  transform: "rotate(0deg) scale(0.2, 0.2)",
}
const hamburgerBottomSectionActiveStyles = {
  transform: "rotate(-45deg) translate(0, 5px)",
}

const Hamburger = ({ active = false, onClick }) => {
  return (
    <HamburgerButton role="button" onClick={onClick}>
      <HamburgerBun style={active ? hamburgerTopSectionActiveStyles : null} />
      <HamburgerBun
        style={active ? hamburgerMiddleSectionActiveStyles : null}
      />
      <HamburgerBun
        style={active ? hamburgerBottomSectionActiveStyles : null}
      />
    </HamburgerButton>
  )
}

export default Hamburger
