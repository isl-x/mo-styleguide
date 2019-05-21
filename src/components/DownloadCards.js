import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"

import { SMALL, TINY } from "../utils/spacing"
import { DEVICE } from "../utils/breakpoints"
import {
  PRIMARY_BACKGROUND_COLOR,
  PRIMARY_FOREGROUND_COLOR,
} from "../utils/colors"
import Image from "./Image"

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
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
`

DownloadCardsContainer.propTypes = {
  columns: PropTypes.number,
}
DownloadCardsContainer.defaultProps = {
  columns: 3,
}

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

const CardImageContainer = styled.div`
  filter: grayscale(100%);

  ${CardBase}:hover &,
  ${CardBase}:focus & {
    filter: grayscale(0%);
  }
`

const DownloadCard = ({ title, imgsrc, fileName }) => (
  <StaticQuery
    query={graphql`
      query AllDownloadFilesQuery {
        allFile {
          edges {
            node {
              publicURL
              name
            }
          }
        }
      }
    `}
    render={data => {
      const completeFile = data.allFile.edges
        ? data.allFile.edges.find(file => file.node.name === fileName)
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
          <CardImageContainer>
            <Image imgsrc={imgsrc} />
          </CardImageContainer>
        </CardBase>
      )
    }}
  />
)

DownloadCard.propTypes = {
  title: PropTypes.string.isRequired,
  imgsrc: PropTypes.string.isRequired,
  fileName: PropTypes.string.isRequired,
}

export { DownloadCardsContainer, DownloadCardsDescription, DownloadCard }