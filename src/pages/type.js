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
import { Font, FontUsageGuideline } from "../components/Font"
import FontScale from "../components/FontScale"
import Spacer from "../components/Spacer"

const BasePage = () => (
  <Layout title="Typography">
    <SEO title="Typography" keywords={[`styleguide`, `design`, `base`]} />
    {/* Put all sections here 
        Those that are shown below are meerly examples and are intended to be deleted as needed
    */}

    {/* FONTS */}
    <Section title="Fonts">
      <Font
        fontName="Polaris"
        fontFileName="the-font"
        sample="Aa"
        sampleSize="120px"
        noNumbers
      >
        <FontUsageGuideline>Headline Text</FontUsageGuideline>
        <FontUsageGuideline>Font-weight: Bold</FontUsageGuideline>
        <FontUsageGuideline>Letter-spacing: Opx</FontUsageGuideline>
        <FontUsageGuideline>Case: Sentence Case</FontUsageGuideline>
      </Font>
      <Font
        fontName="Optimist"
        fontFileName="the-other-font"
        sample="Aa"
        sampleSize="120px"
        noNumbers
      >
        <FontUsageGuideline>Body Text</FontUsageGuideline>
        <FontUsageGuideline>Font-weight: Regular</FontUsageGuideline>
        <FontUsageGuideline>Letter-spacing: Opx</FontUsageGuideline>
        <FontUsageGuideline>Case: Sentence Case</FontUsageGuideline>
      </Font>
      <Font
        fontName="GT Pressura Mono"
        fontFileName="the-other-font"
        sample="AA"
        sampleSize="120px"
        noNumbers
      >
        <FontUsageGuideline>Label Text</FontUsageGuideline>
        <FontUsageGuideline>Font-weight: Bold</FontUsageGuideline>
        <FontUsageGuideline>Letter-spacing: 3px</FontUsageGuideline>
        <FontUsageGuideline>Case: All Caps</FontUsageGuideline>
      </Font>
    </Section>

    {/* FONT SCALING */}
    <Section title="Font Scaling">
      <FontScale
        fontName="Polaris"
        fontFileName="the-other-font"
        fontWeight="bold"
        letterSpacing="0px"
        lineHeight="66px"
        size="52px"
        description="Extra Large"
      />
      <FontScale
        fontName="Polaris"
        fontFileName="the-other-font"
        fontWeight="bold"
        letterSpacing="0px"
        lineHeight="54px"
        size="42px"
        description="Large"
      />
      <FontScale
        fontName="Polaris"
        fontFileName="the-other-font"
        fontWeight="bold"
        letterSpacing="0px"
        lineHeight="34px"
        size="42px"
        description="Medium"
      />
      <FontScale
        fontName="Polaris"
        fontFileName="the-other-font"
        fontWeight="bold"
        letterSpacing="0px"
        lineHeight="38px"
        size="24px"
        description="Small"
      />
      <FontScale
        fontName="Optimist"
        fontFileName="the-other-font"
        fontWeight="normal"
        letterSpacing="0px"
        lineHeight="26px"
        size="16px"
        description="Paragraph"
      />
      <FontScale
        fontName="GT Pressura Mono"
        fontFileName="the-other-font"
        fontWeight="bold"
        letterSpacing="3px"
        lineHeight="20px"
        size="14px"
        description="Label"
      />
    </Section>
  </Layout>
)

export default BasePage
