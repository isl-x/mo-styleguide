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

const DownloadButton = ({ children, fileName, externalFileLink }) => {
  let fileLink = ""
  if (fileName) {
    const { edges } = useSiteFiles()
    const completeFile = edges
      ? edges.find(file => file.node.name === fileName)
      : null
    fileLink = completeFile.node.publicURL
  } else if (externalFileLink) fileLink = externalFileLink

  return (
    <DownloadBase role="button" download href={fileLink}>
      <span>{children}</span>
      <FaDownload />
    </DownloadBase>
  )
}

DownloadButton.propTypes = {
  children: PropTypes.node.isRequired,
  fileName: PropTypes.string,
  externalFileLink: PropTypes.string,
}

export default DownloadButton
