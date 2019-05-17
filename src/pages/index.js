import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../utils/components/organisms/Layout"
import SEO from "../utils/components/atoms/Seo"
import {
  SectionLinkContainer,
  SectionLink,
} from "../utils/components/molecules/SectionLink"

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query HomePageQuery {
        site {
          siteMetadata {
            homePageLinks {
              pageUrl
              imgsrc
              linkText
            }
          }
        }
      }
    `}
    render={data => {
      const links = data.site.siteMetadata.homePageLinks

      return (
        <Layout isIndex>
          <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
          <SectionLinkContainer>
            {links.map((link, i) => (
              <SectionLink key={i} pageUrl={link.pageUrl} imgsrc={link.imgsrc}>
                {link.linkText}
              </SectionLink>
            ))}
          </SectionLinkContainer>
        </Layout>
      )
    }}
  />
)

export default IndexPage
