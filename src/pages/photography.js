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
  <Layout title="Photography">
    <SEO title="Photography" keywords={[`styleguide`, `design`, `base`]} />
    {/* Put all sections here 
        Those that are shown below are meerly examples and are intended to be deleted as needed
    */}

    {/* DOWNLOAD CARDS */}
    <Section title="">
      <DownloadCardsDescription>
      </DownloadCardsDescription>
      <DownloadCardsContainer columns={2}>
        <DownloadCard
          title="Environmental Photography"
          imgsrc="random-wide-image.png"
          fileName="gatsby-astronaut"
        />
        <DownloadCard
          title="Landscape Photography"
          imgsrc="random-wide-image.png"
          fileName="gatsby-astronaut"
        />
      </DownloadCardsContainer>
    </Section>

        {/* DOWNLOAD BUTTON */}
        <Section title="Download Image Guidelines">
      <DownloadButton fileName="gatsby-astronaut">Logos</DownloadButton>
    </Section>

  </Layout>
)

export default BasePage
