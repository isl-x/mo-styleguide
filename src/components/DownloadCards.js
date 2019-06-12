import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import { SMALL, TINY } from "../utils/spacing"
import { DEVICE } from "../utils/breakpoints"
import {
  PRIMARY_BACKGROUND_COLOR,
  PRIMARY_FOREGROUND_COLOR,
} from "../utils/colors"
import Image from "./Image"
import { useSiteFiles } from "../utils/hooks"

/** TEXT **/
const DownloadCardsDescription = styled.p``

/** GRID CONTAINER **/
const DownloadCardsContainer = styled.div`
  display: grid;
  margin: 0 auto;
  grid-template-columns: ${props =>
    `repeat(auto-fit, minmax(${100 / (props.columns + 1)}%, 1fr))`};
  grid-gap: ${SMALL}px;

  @media ${DEVICE.TABLET_DOWN} {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
`

/** DOWNLOAD CARD GRID ITEM **/
const CardBase = styled.a`
  text-decoration: none;
  color: ${PRIMARY_FOREGROUND_COLOR};
`

const CardHeader = styled.div`
  background: ${PRIMARY_BACKGROUND_COLOR};
  display: flex;
  justify-content: space-between;
  padding: ${TINY}px;
`

const DownloadCard = ({ title, imgsrc, fileName }) => {
  const { edges } = useSiteFiles()
  const completeFile = edges
    ? edges.find(file => file.node.name === fileName)
    : null

  return (
    <CardBase
      role="button"
      download
      href={completeFile ? completeFile.node.publicURL : null}
    >
      <CardHeader>
        <span>{title}</span>
        <span>⬇</span>
      </CardHeader>
      <div>
        <Image imgsrc={imgsrc} />
      </div>
    </CardBase>
  )
}

DownloadCard.propTypes = {
  title: PropTypes.string.isRequired,
  imgsrc: PropTypes.string.isRequired,
  fileName: PropTypes.string.isRequired,
}

DownloadCardsContainer.propTypes = {
  columns: PropTypes.number,
  children: PropTypes.oneOfType([
    PropTypes.shape({
      type: PropTypes.oneOf([DownloadCard]),
    }),
    PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.oneOf([DownloadCard]),
      })
    ),
  ]),
}
DownloadCardsContainer.defaultProps = {
  columns: 3,
}

export { DownloadCardsContainer, DownloadCardsDescription, DownloadCard }
