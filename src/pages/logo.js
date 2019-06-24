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
  <Layout title="Capital One Ventures Logo">
    <SEO title="Logo" keywords={[`styleguide`, `design`, `base`]} />
    {/* Put all sections here 
        Those that are shown below are meerly examples and are intended to be deleted as needed
    */}

    {/* DOWNLOAD CARDS */}
    <Section title="Download Cards">
      <DownloadCardsDescription>
        This is the downloads cards block
      </DownloadCardsDescription>
      <DownloadCardsContainer columns={2}>
        <DownloadCard
          title="Full Color"
          imgsrc="Logo_Full-Color.png"
          fileName="Full-Color"
        />
        <DownloadCard
          title="White Text"
          imgsrc="Logo_White-Text.png"
          fileName="White-Text"
        />
        <DownloadCard
          title="All White"
          imgsrc="Logo_All-White.png"
          fileName="All-White"
        />
        <DownloadCard
          title="Core Blue 60"
          imgsrc="Logo_Blue.png"
          fileName="Core-Blue-60"
        />
      </DownloadCardsContainer>
    </Section>

    {/* DOWNLOAD BUTTON */}
    <Section title="Download the Ventures Logo Guidelines">
      <DownloadButton fileName="C1V_BrandGuidelines_Logo">Logo Guidelines</DownloadButton>
    </Section>

  </Layout>
)

export default BasePage
