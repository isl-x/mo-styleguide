import PropTypes from "prop-types"
import styled from "styled-components"
import React from "react"

import { PRIMARY_BACKGROUND_COLOR, WHITE, GREY } from "../../colors"
import { LARGE, MEDIUM } from "../../spacing"
import Image from "../../../components/Image"
import { OPAQUE_FONT } from "../../font-styles"
import { L } from "../../font-sizes"

/** BASE **/
const Sidebar = styled.aside`
  flex-basis: 30%;
  background-color: ${PRIMARY_BACKGROUND_COLOR};
  padding: ${LARGE}px;
`

/** IMAGE **/
const SideBarImageContainer = styled.div`
  padding-bottom: ${LARGE}px;
`

const SidebarImage = ({ imgsrc }) => (
  <SideBarImageContainer>
    <Image imgsrc={imgsrc} />
  </SideBarImageContainer>
)

SidebarImage.propTypes = {
  imgsrc: PropTypes.string.isRequired,
}

/** TEXT **/

const SidebarContent = styled.div`
  padding-top: ${LARGE}px;
  color: ${WHITE};
  border-top: 1px solid ${GREY};

  span {
    ${L}
    font-weight: bold;
  }

  p {
    ${OPAQUE_FONT}
    margin-top: ${MEDIUM}px;
    max-width: 90%;
  }
`

export { Sidebar, SidebarImage, SidebarContent }
