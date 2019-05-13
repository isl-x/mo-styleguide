import React from "react"

import Layout from "../utils/components/Layout"
import SEO from "../utils/components/Seo"
import { SectionLinkContainer, SectionLink } from "../components/SectionLink"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <SectionLinkContainer>
      <SectionLink pageUrl="/" imgsrc="gatsby-astronaut.png">
        Test
      </SectionLink>
      <SectionLink pageUrl="/" imgsrc="gatsby-astronaut.png">
        Test
      </SectionLink>
      <SectionLink pageUrl="/" imgsrc="gatsby-astronaut.png">
        Test
      </SectionLink>
      <SectionLink pageUrl="/" imgsrc="gatsby-astronaut.png">
        Test
      </SectionLink>
      <SectionLink pageUrl="/" imgsrc="gatsby-astronaut.png">
        Test
      </SectionLink>
      <SectionLink pageUrl="/" imgsrc="gatsby-astronaut.png">
        Test
      </SectionLink>
    </SectionLinkContainer>
  </Layout>
)

export default IndexPage
