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
import FontScale from "../components/FontScale"

const BasePage = () => (
  <Layout title="Typography">
    <SEO title="Typography" keywords={[`styleguide`, `design`, `base`]} />
    {/* Put all blocks here
        Those that are shown below are meerly examples and are intended to be deleted as needed
    */}

    <Block title="Fonts">
      <Font
        fontName="TheSans"
        fontFileName="the-other-font"
        sample="Aa"
        sampleSize="120px"
        noNumbers
      >
        <FontUsageGuideline>Used for body</FontUsageGuideline>
        <FontUsageGuideline>Regular/Italic weights only</FontUsageGuideline>
        <FontUsageGuideline>Generous line spacing</FontUsageGuideline>
      </Font>
    </Block>


    {/* FONT SCALING */}
    <Block title="Font Scaling">
      <FontScale
        fontName="TheSans"
        fontFileName="the-other-font"
        fontWeight="Bold"
        letterSpacing="0px"
        lineHeight="1.2"
        size="80px"
        description="Title-Large"
      />
      <FontScale
        fontName="TheSans"
        fontFileName="the-other-font"
        fontWeight="Bold"
        letterSpacing="0px"
        lineHeight="1.2"
        size="64px"
        description="Title-Medium"
      />
      <FontScale
        fontName="TheSans"
        fontFileName="the-other-font"
        fontWeight="Bold"
        letterSpacing="0px"
        lineHeight="1.2"
        size="40px"
        description="Title-Small"
      />
      <FontScale
        fontName="TheSans"
        fontFileName="the-other-font"
        fontWeight="Bold"
        letterSpacing="0px"
        lineHeight="1.2"
        size="18px"
        description="Body-Normal"
      />
      <FontScale
        fontName="TheSans"
        fontFileName="the-other-font"
        fontWeight="Bold"
        letterSpacing="0px"
        lineHeight="1.2"
        size="14px"
        description="Body-Small"
      />
      <FontScale
        fontName="TheSans"
        fontFileName="the-other-font"
        fontWeight="Bold"
        letterSpacing="2px"
        lineHeight="1.2"
        size="12px"
        description="Label-Normal"
        transform="uppercase"
      />
      <FontScale
        fontName="TheSans"
        fontFileName="the-other-font"
        fontWeight="Bold"
        letterSpacing="2px"
        lineHeight="1.2"
        size="10px"
        description="Label-Small"
        transform="uppercase"
      />
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
  </Layout>
)

export default BasePage
