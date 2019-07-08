import React from "react"
import styled from "styled-components"

import Layout from "../utils/components/organisms/Layout"
import SEO from "../utils/components/atoms/Seo"
import {
  SectionLinkContainer,
  SectionLink,
} from "../utils/components/molecules/SectionLink"
import { HOME_PAGE, SITE_METADATA } from "../config"
import {
  Sidebar,
  SidebarImage,
  SidebarContent,
} from "../utils/components/molecules/Sidebar"
import { LARGE } from "../utils/spacing"
import { HighlightLabel } from "../components/atoms/Labels"

const ContentWrapper = styled.div`
  flex-basis: 70%;
  padding: ${LARGE}px;
`

const IndexPage = () => {
  const links = HOME_PAGE.HOME_PAGE_LINKS
  const inactive_links = HOME_PAGE.INACTIVE_HOME_PAGE_LINKS

  return (
    <Layout isIndex>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Sidebar>
        <SidebarImage imgsrc={SITE_METADATA.LOGO} />
        <SidebarContent>
          <span>{SITE_METADATA.SITE_TITLE}</span>
          <p>{SITE_METADATA.SITE_DESCRIPTION}</p>
        </SidebarContent>
      </Sidebar>
      <ContentWrapper>
        <HighlightLabel>Contents</HighlightLabel>
        <SectionLinkContainer>
          {links.concat(inactive_links).map((link, i) => (
            <SectionLink
              key={i}
              pageUrl={link.pageUrl}
              filename={link.filename}
            >
              <span>{link.linkText}</span>
              <p>{link.descriptiveText}</p>
            </SectionLink>
          ))}
        </SectionLinkContainer>
      </ContentWrapper>
    </Layout>
  )
}

export default IndexPage
