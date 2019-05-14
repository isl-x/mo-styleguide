import React from "react"

import Layout from "../utils/components/Layout"
import SEO from "../utils/components/Seo"
import {
  ColorSwatchContainer,
  ColorSwatch,
  ColorSwatchTitle,
  ColorSwatchDescription,
} from "../components/ColorSwatch"
import Block from "../components/Block"

const BasePage = () => (
  <Layout title="Test Page">
    <SEO title="Test Page" keywords={[`gatsby`, `application`, `react`]} />
    {/* Put all blocks here 
        Those that are shown below are meerly examples and are intended to be deleted as needed
    */}

    {/* COLOR SWATCH */}
    <Block>
      <ColorSwatchTitle>Test</ColorSwatchTitle>
      <ColorSwatchDescription>A test description</ColorSwatchDescription>
      <ColorSwatchContainer>
        <ColorSwatch title="Slate" />
        <ColorSwatch />
        <ColorSwatch />
        <ColorSwatch />
        <ColorSwatch />
      </ColorSwatchContainer>
    </Block>
  </Layout>
)

export default BasePage
