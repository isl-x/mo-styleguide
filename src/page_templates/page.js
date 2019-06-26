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
import Section from "../components/Section"
import DownloadButton from "../components/DownloadButton"
import {
  DownloadCardsContainer,
  DownloadCardsDescription,
  DownloadCard,
} from "../components/DownloadCards"
import { Font, FontWeightSample } from "../components/Font"
import FontScale from "../components/FontScale"
import Spacer from "../components/Spacer"
import FiftyFifty from "../components/FiftyFifty"

const BasePage = () => (
  <Layout title="Test Page">
    <SEO title="Test Page" keywords={[`styleguide`, `design`, `base`]} />
    {/* Put all sections here 
        Those that are shown below are meerly examples and are intended to be deleted as needed
    */}

    {/* COLOR SWATCH */}
    <Section title="Colors">
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
    </Section>

    {/* SECONDARY COLOR SWATCH */}
    <Section title="Colors Secondary">
      <ColorSwatchDescription>A test description</ColorSwatchDescription>
      <ColorSwatchContainer secondary>
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
    </Section>

    {/* TEXT */}
    <Section title="Placeholder for guideline">
      <Basic>
        This is an example of using text
        {/* SPACER 
            The <Spacer> component can be used in any section 
            or literally anywhere desired. 
            Possible values:
            xxxlarge, xxlarge, xlarge, large, medium, normal, small, tiny
        */}
        <Spacer normal />
        <Image imgsrc="random-wide-image.png" />
        <Spacer normal />
        And having text continue after an image
      </Basic>
    </Section>

    {/* IMAGE */}
    <Section title="Images">
      <Image imgsrc="random-wide-image.png" />
    </Section>

    {/* DOWNLOAD BUTTON */}
    <Section title="Downloads">
      <DownloadButton fileName="gatsby-astronaut">Logos</DownloadButton>
    </Section>

    {/* DOWNLOAD CARDS */}
    <Section title="Download Cards">
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
    </Section>

    {/* FONTS */}
    <Section title="Fonts">
      <Font
        fontName="The Font"
        fontFileName="the-font"
        usageName="Primary"
        sample="Aa"
        sampleSize="120px"
      >
        <FontWeightSample label="Thin" noWeightNumbers />
        <FontWeightSample weight={400} label="Medium" noUpper />
        <FontWeightSample weight={600} label="Strong" />
      </Font>
      <Font
        fontName="The Other Font"
        fontFileName="the-other-font"
        usageName="Secondary"
        sample="AA"
        sampleSize="120px"
      >
        <FontWeightSample weight={100} label="Thin" noNumbers />
        <FontWeightSample weight={400} label="Medium" noLower />
        <FontWeightSample weight="bold" label="Strong" />
      </Font>
    </Section>

    {/* FONT SCALING */}
    <Section title="Font Scaling">
      <FontScale
        fontName="The Other Font"
        fontFileName="the-other-font"
        fontWeight="normal"
        letterSpacing="1.25px"
        lineHeight="40px"
        size="40px"
        description="Super mega big"
      />
      <FontScale
        fontName="The Other Font"
        fontFileName="the-other-font"
        fontWeight="normal"
        letterSpacing="1.25px"
        lineHeight="20px"
        size="20px"
        description="Super mega normal"
      />
    </Section>

    {/* FIFTY FIFTY TEXT IMAGE */}
    <Section title="Fifty Fifty Text Split">
      <FiftyFifty>Yays</FiftyFifty>
    </Section>
  </Layout>
)

export default BasePage
