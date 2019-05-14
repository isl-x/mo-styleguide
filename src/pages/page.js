import React from "react"

import Layout from "../utils/components/Layout"
import SEO from "../utils/components/Seo"
import { SectionLinkContainer, SectionLink } from "../components/SectionLink"

const IndexPage = () => (
  <Layout title="Test Page">
    <SEO title="Test Page" keywords={[`gatsby`, `application`, `react`]} />
  </Layout>
)

export default IndexPage
