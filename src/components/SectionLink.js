import React from "react"
import styled from "styled-components"

import { NORMAL } from "../utils/spacing"
import { LIGHT_SMOKE } from "../utils/colors"
import Link from "../utils/components/Link"

import Image from "./Image"

export const SectionLinkContainer = styled.div`
  display: grid;
  min-height: 50vh;
  margin: 0 auto;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: ${NORMAL}px;
`

const SectionLinkBase = styled.div`
  background: ${LIGHT_SMOKE};
  display: flex;
  justify-content: center;
  align-items: center;
`

// Used to style the link contents themselves
const SectionLinkWrapper = styled.div`
  text-align: center;
  width: 50%;
`

export const SectionLink = ({ pageUrl, children, imgsrc }) => (
  <SectionLinkBase>
    <SectionLinkWrapper>
      <Link to={pageUrl}>
        <Image imgsrc={imgsrc} />
        {children}
      </Link>
    </SectionLinkWrapper>
  </SectionLinkBase>
)

// TODO: Do the prop types for section link
