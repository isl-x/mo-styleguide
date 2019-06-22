import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import {
  PRIMARY_FOREGROUND_COLOR,
  PRIMARY_BACKGROUND_COLOR,
} from "../utils/colors"
import { S } from "../utils/font-sizes"
import { SMALL } from "../utils/spacing"
import { useSiteFiles } from "../utils/hooks"
import { FaDownload } from "react-icons/fa"

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

const DownloadButton = ({ children, fileName }) => {
  const { edges } = useSiteFiles()
  const completeFile = edges
    ? edges.find(file => file.node.name === fileName)
    : null

  return (
    <DownloadBase
      role="button"
      download
      href={completeFile ? completeFile.node.publicURL : null}
    >
      <span>{children}</span>
      <FaDownload />
    </DownloadBase>
  )
}

DownloadButton.propTypes = {
  children: PropTypes.node.isRequired,
  fileName: PropTypes.string.isRequired,
}

export default DownloadButton
