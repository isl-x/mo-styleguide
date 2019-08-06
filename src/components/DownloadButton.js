import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import {
  PRIMARY_FOREGROUND_COLOR,
  PRIMARY_BACKGROUND_COLOR,
} from "../utils/colors"
import { S, XXS } from "../utils/font-sizes"
import { SMALL, MEDIUM } from "../utils/spacing"
import { useSiteFiles } from "../utils/hooks"
import ArrowToBottom from "../utils/components/atoms/ArrowToBottom"
import { LABEL_BASE_STYLES } from "./atoms/Labels"

const DownloadBase = styled.a`
  ${S}
  text-decoration: none;
  cursor: pointer;
  color: inherit;
  fill: ${PRIMARY_BACKGROUND_COLOR};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${SMALL}px;
  margin: ${MEDIUM}px auto 0;
  min-width: 15rem;
  max-width: 35vw;
  background: ${PRIMARY_FOREGROUND_COLOR};
  border: 2px solid ${PRIMARY_BACKGROUND_COLOR};
  transition: all 0.2s;

  &:hover,
  &:focus {
    fill: ${PRIMARY_FOREGROUND_COLOR};
    color: ${PRIMARY_FOREGROUND_COLOR};
    background-color: ${PRIMARY_BACKGROUND_COLOR};
  }
`

const DownloadText = styled.span`
  ${XXS}
  ${LABEL_BASE_STYLES}
  padding-right: ${SMALL}px;
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
      <DownloadText>{children}</DownloadText>
      <ArrowToBottom />
    </DownloadBase>
  )
}

DownloadButton.propTypes = {
  children: PropTypes.node.isRequired,
  fileName: PropTypes.string,
  externalFileLink: PropTypes.string,
}

export default DownloadButton
