import React from "react"
import styled from "styled-components"

import { HIGH_PRIORITY_Z_INDEX } from "../../z-index"
import Grid from "./Grid"

const SlideOutContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: ${HIGH_PRIORITY_Z_INDEX};
  transform: translateX(-100%);
  transition: all 0.3s;
`

const Menu = styled.ul`
  padding-top: 15vh;

  &::after {
    position: absolute;
    display: inline-block;
    background: pink;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
    content: "";
    transform: translateX(-50%);
  }

  li {
    z-index: ${HIGH_PRIORITY_Z_INDEX};
    position: relative;
  }
`

const SlideOutMenu = ({ active }) => (
  <SlideOutContainer style={active ? { transform: "translateX(0%)" } : null}>
    <Grid>
      <Menu>
        <li>thing</li>
        <li>thing</li>
        <li>thing</li>
      </Menu>
    </Grid>
  </SlideOutContainer>
)

export default SlideOutMenu
