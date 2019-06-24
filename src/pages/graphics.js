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
  <Layout title="Icons and Graphics">
    <SEO title="Icons and Graphics" keywords={[`styleguide`, `design`, `base`]} />
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
          title="Shapes"
          imgsrc="Shapes.png"
          fileName="Shapes_download"
        />
        <DownloadCard
          title="Grain Texture"
          imgsrc="Textures.png"
          fileName="Grain"
        />
      </DownloadCardsContainer>
    </Section>

        {/* DOWNLOAD BUTTON */}
        <Section title="Download FontAwesome Icon Set">
      <DownloadButton fileName="FontAwesome_otfs">FontAwesome</DownloadButton>
    </Section>

  </Layout>
)

export default BasePage
