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

const BasePage = () => (
  <Layout title="Typography">
    <SEO title="Typography" keywords={[`styleguide`, `design`, `base`]} />
    {/* Put all sections here
        Those that are shown below are meerly examples and are intended to be deleted as needed
    */}

    {/* TEXT */}
    <Section title="Font System">
      <Basic>
        {/* SPACER
            The <Spacer> component can be used in any section
            or literally anywhere desired.
            Possible values:
            xxxlarge, xxlarge, xlarge, large, medium, normal, small, tiny
        */}
        <Spacer normal />
        <Image imgsrc="type_system.png" />
        <Spacer normal />
      </Basic>
    </Section>

    {/* FONTS */}
    <Section title="Brand Fonts">
      <Font
        fontName="Polaris"
        fontFileName="Polaris-Bold"
        usageName="Header Font"
        sample="Aa"
        sampleSize="120px"
      >
        <FontWeightSample weight="bold" label="Bold" />
      </Font>
      <Font
        fontName="Optimist"
        fontFileName="Optimist_Rg"
        usageName="Body Text"
        sample="Aa"
        sampleSize="120px"
      >
        <FontWeightSample weight="regular" label="regular" />
      </Font>

      <Font
        fontName="GT Pressura Mono"
        fontFileName="GT-Pressura-Mono-Bold"
        usageName="Labels"
        sample="AA"
        sampleSize="120px"
      >
        <FontWeightSample weight="bold" label="Bold" noLower />
      </Font>
    </Section>

    {/* FONT SCALING */}
    <Section title="Font Scaling">
      <FontScale
        fontName="Polaris"
        fontFileName="Polaris-Bold"
        fontWeight="bold"
        letterSpacing="0px"
        lineHeight="66px"
        size="52px"
        description="Extra Large"
      />
      <FontScale
        fontName="Polaris"
        fontFileName="Polaris-Bold"
        fontWeight="bold"
        letterSpacing="0px"
        lineHeight="54px"
        size="42px"
        description="Large"
      />
      <FontScale
        fontName="Polaris"
        fontFileName="Polaris-Bold"
        fontWeight="bold"
        letterSpacing="0px"
        lineHeight="42px"
        size="34px"
        description="Medium"
      />
      <FontScale
        fontName="Polaris"
        fontFileName="Polaris-Bold"
        fontWeight="bold"
        letterSpacing="0px"
        lineHeight="38px"
        size="24px"
        description="Small"
      />
      <FontScale
        fontName="Optimist"
        fontFileName="Optimist_Rg"
        fontWeight="regular"
        letterSpacing="0px"
        lineHeight="26px"
        size="16px"
        description="Paragraph"
      />
      <FontScale
        fontName="GT Pressura Mono"
        fontFileName="GT-Pressura-Mono-Bold"
        fontWeight="bold"
        letterSpacing="3px"
        lineHeight="20px"
        size="14px"
        description="Label"
      />
    </Section>

    {/* DOWNLOAD BUTTON */}
    <Section centered title="Download All Fonts">
      <DownloadButton fileName="Font_Package_All">Font Package</DownloadButton>
    </Section>

  </Layout>
)

export default BasePage
