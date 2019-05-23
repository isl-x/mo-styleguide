import React from "react"

import Layout from "../utils/components/organisms/Layout"
import SEO from "../utils/components/atoms/Seo"
import {
  ColorSwatchContainer,
  ColorSwatch,
  ColorSwatchDescription,
} from "../components/ColorSwatch"
import Basic from "../components/Basic"
import Image from "../components/Image"
import Block from "../components/Block"
import DownloadButton from "../components/DownloadButton"
import {
  DownloadCardsContainer,
  DownloadCardsDescription,
  DownloadCard,
} from "../components/DownloadCards"
import { Font, FontUsageGuideline } from "../components/Font"

const BasePage = () => (
  <Layout title="Test Page">
    <SEO title="Test Page" keywords={[`styleguide`, `design`, `base`]} />
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
      <Basic>
        This is an example of using text
        <Image imgsrc="random-wide-image.png" />
        And having text continue after an image
      </Basic>
    </Block>

    {/* IMAGE */}
    <Block title="Images">
      <Image imgsrc="random-wide-image.png" />
    </Block>

    {/* DOWNLOAD BUTTON */}
    <Block title="Downloads">
      <DownloadButton fileName="gatsby-astronaut">Logos</DownloadButton>
    </Block>

    {/* DOWNLOAD CARDS */}
    <Block title="Download Cards">
      <DownloadCardsDescription>
        This is the downloads cards block
      </DownloadCardsDescription>
      <DownloadCardsContainer columns={2}>
        <DownloadCard
          title="test"
          imgsrc="random-wide-image.png"
          fileName="gatsby-astronaut"
        />
        <DownloadCard
          title="test"
          imgsrc="random-wide-image.png"
          fileName="gatsby-astronaut"
        />
        <DownloadCard
          title="test"
          imgsrc="random-wide-image.png"
          fileName="gatsby-astronaut"
        />
      </DownloadCardsContainer>
    </Block>

    {/* FONTS */}
    <Block title="Fonts">
      <Font
        fontName="The Font"
        fontFileName="the-font"
        sample="Aa"
        sampleSize="120px"
      >
        <FontUsageGuideline>Used for body</FontUsageGuideline>
        <FontUsageGuideline>Regular/Italic weights only</FontUsageGuideline>
        <FontUsageGuideline>Generous line spacing</FontUsageGuideline>
      </Font>
      <Font
        fontName="The Other Font"
        fontFileName="the-other-font"
        sample="AA"
        sampleSize="120px"
        noLower
      >
        <FontUsageGuideline>Used for body</FontUsageGuideline>
        <FontUsageGuideline>No lower case letters</FontUsageGuideline>
        <FontUsageGuideline>Generous line spacing</FontUsageGuideline>
      </Font>
    </Block>
  </Layout>
)

export default BasePage
