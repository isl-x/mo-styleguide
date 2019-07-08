import styled from "styled-components"
import React from "react"
import getBlocks from "../../blockUtils"
import { WHITE } from "../../colors"
import { BOX_SHADOW } from "../../shadows"
import { HIGHLIGHT_BORDER } from "../../borders"
import { OpaqueLabel } from "../../../components/atoms/Labels"
import { MEDIUM, SMALL } from "../../spacing"
import { HIGHEST_PRIORITY_Z_INDEX } from "../../z-index"

const HeaderBase = styled.div`
  max-height: 300px;
  width: 20vw;
  max-width: 300px;
  background: ${WHITE};
  ${BOX_SHADOW}
  margin-top: -15rem;
  padding: ${MEDIUM}px;
  float: right;
  border-top: ${HIGHLIGHT_BORDER};
  position: relative;
  z-index: ${HIGHEST_PRIORITY_Z_INDEX};
  overflow-y: scroll;
`

const Links = styled.ul`
  list-style: none;
  margin: 0;

  li {
    margin: 0 0 ${SMALL}px 0;

    :last-of-type {
      margin: 0;
    }
  }
`

const LinkButton = styled.button`
  border: none;
  padding: 0;
  background: none;
  text-align: left;
  font-weight: bold;
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
        <OpaqueLabel marginBottom={`${SMALL}px`}>On this page</OpaqueLabel>
        <Links>
          {blocks.map((block, i) => {
            return (
              <li key={i}>
                <LinkButton
                  onClick={this.onClickOrKeyPress}
                  data-target={block.id}
                >
                  {block.title}
                </LinkButton>
              </li>
            )
          })}
        </Links>
      </HeaderBase>
    )
  }
}

export default HeaderIntroNav
