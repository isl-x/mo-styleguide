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
    <Section title="Primary Colors">
      <ColorSwatchDescription></ColorSwatchDescription>
      <ColorSwatchContainer>
        <ColorSwatch
          title="Core Blue 40"
          hex="#255F82"
          rgb="37, 95, 130"
          cmyk="89, 59, 31, 10"
        />
        <ColorSwatch 
          title="Gray 10" 
          hex="#F4F4F4"
          rgb="244, 244, 244"
          cmyk="3, 2, 2, 0" 
        />

      </ColorSwatchContainer>
    </Section>

    {/* SECONDARY COLOR SWATCH */}
    <Section title="Secondary Colors">
      <ColorSwatchDescription></ColorSwatchDescription>
      <ColorSwatchContainer secondary>
        <ColorSwatch
          title="Light Blue 3"
          hex="#78D0EB"
          rgb="120, 208, 235"
          cmyk="48, 0, 5, 0"
        />
        <ColorSwatch 
          title="Core Blue 30" 
          hex="#598AAA" 
          rgb="89, 138, 170"
          cmyk="69, 37, 21, 1"
        />
        <ColorSwatch 
          title="Core Blue 60" 
          hex="#10253F"
          rgb="16, 37, 63"
          cmyk="96, 82, 47, 52"
        />
        <ColorSwatch 
          title="Red 50" 
          hex="#CC2427"
          rgb="204, 36, 39"
          cmyk="13, 99, 98, 3"
        />
        <ColorSwatch 
          title="Boom" 
          hex="#F1392E"
          rgb="241, 57, 46"
          cmyk="0, 92, 90, 0"
        />
      </ColorSwatchContainer>
    </Section>

    {/* DOWNLOAD BUTTON */}
    <Section title="Download the Ventures Color Palette">
      <DownloadButton fileName="C1V_Swatches">Color Palette</DownloadButton>
    </Section>

  </Layout>
)

export default BasePage
