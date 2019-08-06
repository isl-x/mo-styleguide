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

    {/* TEXT */}
    <Section title="Our Charter">
      <Basic>
      Capital One Ventures allies leading startups
      with Capital One, a financial industry leader in
      data and technology, creating opportunities for
      both companies to change banking for good.
      </Basic>
    </Section>

    <Section title="Our Vision">
      <Basic>
      When we fulfill our mission, we will have
      brought the most innovative and promising
      data, technology and digital solutions to
      market — transforming banking as we know it.
      </Basic>
    </Section>

    {/* DOWNLOAD CARDS */}
    <Section title="Download Full Brand Guidelines">
      <DownloadCardsDescription>
      </DownloadCardsDescription>
      <DownloadCardsContainer columns={2}>
        <DownloadCard
          title=""
          imgsrc="Guidelines_Cover.png"
          fileName="C1V_BrandGuidelines"
        />
      </DownloadCardsContainer>
    </Section>

  </Layout>
)

export default BasePage
