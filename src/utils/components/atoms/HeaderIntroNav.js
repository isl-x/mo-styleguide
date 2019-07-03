import styled from "styled-components"
import React from "react"
import getBlocks from "../../blockUtils"
import { WHITE } from "../../colors"
import { BOX_SHADOW } from "../../shadows"
import { HIGHLIGHT_BORDER } from "../../borders"
import { OpaqueLabel } from "../../../components/atoms/Labels"
import { MEDIUM } from "../../spacing"
import { HIGHEST_PRIORITY_Z_INDEX } from "../../z-index"

const HeaderBase = styled.div`
  height: 300px;
  width: 20vw;
  max-width: 250px;
  background: ${WHITE};
  ${BOX_SHADOW}
  margin-top: -15rem;
  padding: ${MEDIUM}px;
  float: right;
  border-top: ${HIGHLIGHT_BORDER};
  z-index: ${HIGHEST_PRIORITY_Z_INDEX}; /* TODO: fix this */
  overflow-y: scroll;
`

class HeaderIntroNav extends React.Component {
  state = {
    blocks: [],
  }

  componentDidMount() {
    this.setState({ blocks: getBlocks() })
  }

  onClickOrKeyPress = e => {
    // Do nothing with non-'enter' keypress
    if ((e.type === "keypress") & (e.key !== "Enter")) return

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
  }

  render() {
    const { blocks } = this.state
    return (
      <HeaderBase>
        <OpaqueLabel>On this page</OpaqueLabel>
        <ul>
          {blocks.map((block, i) => {
            return (
              <li onClick={this.onClickOrKeyPress} key={i}>
                {/* TODO: Why is the click not working? */}
                {block.title}
              </li>
            )
          })}
        </ul>
      </HeaderBase>
    )
  }
}

export default HeaderIntroNav
