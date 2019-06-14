import React from "react"

import Layout from "../utils/components/organisms/Layout"
import SEO from "../utils/components/atoms/Seo"
import {
  SectionLinkContainer,
  SectionLink,
} from "../utils/components/molecules/SectionLink"
import { HOME_PAGE } from "../config"

const IndexPage = () => {
  const links = HOME_PAGE.HOME_PAGE_LINKS
  const inactive_links = HOME_PAGE.INACTIVE_HOME_PAGE_LINKS
  const colCount = HOME_PAGE.HOME_PAGE_DESKTOP_COLUMN_COUNT

  return (
    <Layout isIndex>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <SectionLinkContainer colCount={colCount}>
        {links.concat(inactive_links).map((link, i) => (
          <SectionLink key={i} pageUrl={link.pageUrl} filename={link.filename}>
            {link.linkText}
          </SectionLink>
        ))}
      </SectionLinkContainer>
    </Layout>
  )
}

export default IndexPage
