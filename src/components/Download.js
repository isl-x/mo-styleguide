import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"

import {
  PRIMARY_FOREGROUND_COLOR,
  PRIMARY_BACKGROUND_COLOR,
} from "../utils/colors"
import { S } from "../utils/font-sizes"
import { SMALL } from "../utils/spacing"

const DownloadBase = styled.a`
  ${S}
  text-decoration: none;
  color: inherit;
  display: flex;
  justify-content: space-between;
  padding: ${SMALL}px;
  width: 10rem;
  background: ${PRIMARY_FOREGROUND_COLOR};
  border: 2px solid ${PRIMARY_BACKGROUND_COLOR};
  transition: all 0.2s;

  &:hover,
  &:focus {
    color: ${PRIMARY_FOREGROUND_COLOR};
    background-color: ${PRIMARY_BACKGROUND_COLOR};
  }
`

const Download = ({ children, fileName }) => (
  <StaticQuery
    query={graphql`
      query AllFilesQuery {
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
        <DownloadBase
          role="button"
          download
          href={completeFile ? completeFile.node.publicURL : null}
        >
          <span>{children}</span>
          <span>:)</span>
        </DownloadBase>
      )
    }}
  />
)

Download.propTypes = {
  children: PropTypes.node.isRequired,
  fileName: PropTypes.string.isRequired,
}

export default Download
