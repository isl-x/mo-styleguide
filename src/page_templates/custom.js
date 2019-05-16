import React from "react"

import Layout from "../utils/components/Layout"
import SEO from "../utils/components/Seo"

const CustomPage = () => (
  /* There is no requirement to use the layout component if you truly want a custom page, end to end */
  <Layout>
    <SEO
      title="Custom CSS/HTML Example"
      keywords={[`custom`, `example`, `why are you using SEO here`]}
    />
    <div className="example">
      This is an example component to demonstrate how you can write your own
      HTML and CSS
      <button className="example__button">Push me</button>
    </div>
  </Layout>
)

export default CustomPage
