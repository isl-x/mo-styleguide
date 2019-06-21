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
  <Layout title="Color Palette">
    <SEO title="Color Palette" keywords={[`styleguide`, `design`, `base`]} />
    {/* Put all sections here 
        Those that are shown below are meerly examples and are intended to be deleted as needed
    */}

    {/* COLOR SWATCH */}
    <Section title="Colors">
      <ColorSwatchDescription>A test description</ColorSwatchDescription>
      <ColorSwatchContainer>
        <ColorSwatch
          title="Core Blue 40"
          hex="#255F82"
          rgb="18, 24, 32"
          cmyk="81, 71, 58, 75"
          pms="PMS Black 6 U"
        />
        <ColorSwatch 
          title="Gray 10" 
          hex="#F4F4F4" 
        />

      </ColorSwatchContainer>
    </Section>

    {/* SECONDARY COLOR SWATCH */}
    <Section title="Colors Secondary">
      <ColorSwatchDescription>A test description</ColorSwatchDescription>
      <ColorSwatchContainer secondary>
        <ColorSwatch
          title="Light Blue 3"
          hex="#78D0EB"
          rgb="18, 24, 32"
          cmyk="81, 71, 58, 75"
          pms="PMS Black 6 U"
        />
        <ColorSwatch 
          title="Core Blue 30" 
          hex="#598AAA" 
        />
        <ColorSwatch 
          title="Core Blue 60" 
          hex="#10253F"
        />
        <ColorSwatch 
          title="Red 50" 
          hex="#CC2427"
        />
        <ColorSwatch 
          title="Boom" 
          hex="#F1392E"
        />
      </ColorSwatchContainer>
    </Section>

    {/* DOWNLOAD BUTTON */}
    <Section title="Download">
      <DownloadButton fileName="gatsby-astronaut">Color Palette</DownloadButton>
    </Section>

  </Layout>
)

export default BasePage
