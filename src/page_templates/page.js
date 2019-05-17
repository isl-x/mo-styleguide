import React from "react"

import Layout from "../utils/components/organisms/Layout"
import SEO from "../utils/components/atoms/Seo"
import {
  ColorSwatchContainer,
  ColorSwatch,
  ColorSwatchDescription,
} from "../components/ColorSwatch"
import Text from "../components/Text"
import Image from "../components/Image"
import Block from "../components/Block"
import Download from "../components/Download"

const BasePage = () => (
  <Layout title="Test Page">
    <SEO title="Test Page" keywords={[`gatsby`, `application`, `react`]} />
    {/* Put all blocks here 
        Those that are shown below are meerly examples and are intended to be deleted as needed
    */}

    {/* COLOR SWATCH */}
    <Block title="Colors">
      <ColorSwatchDescription>A test description</ColorSwatchDescription>
      <ColorSwatchContainer>
        <ColorSwatch
          title="Aqua"
          hex="#43d8f8"
          rgb="18, 24, 32"
          cmyk="81, 71, 58, 75"
          pms="PMS Black 6 U"
        />
        <ColorSwatch title="Gray" hex="#8b8b8b" />
        <ColorSwatch />
        <ColorSwatch />
        <ColorSwatch />
      </ColorSwatchContainer>
    </Block>

    {/* TEXT */}
    <Block title="Placeholder for guideline">
      <Text>
        This is an example of using text
        <Image imgsrc="random-wide-image.png" />
        And having text continue after an image
      </Text>
    </Block>

    {/* DOWNLOAD */}
    <Block title="Downloads">
      <Download fileName="gatsby-astronaut">Logos</Download>
    </Block>
  </Layout>
)

export default BasePage
