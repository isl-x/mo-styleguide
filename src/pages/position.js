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
  <Layout title="Brand Position">
    <SEO title="Brand Position" keywords={[`styleguide`, `design`, `base`]} />
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
          title="Brand Positioning"
          imgsrc="Position_Photo.png"
          fileName="C1V_BrandGuidelines_Position"
        />
      </DownloadCardsContainer>
    </Section>

  </Layout>
)

export default BasePage
