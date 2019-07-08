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

    {/* TEXT */}
    <Section title="The Logo">
      <Basic>
        The Capital One Ventures logo mark stands out as the center of our
        graphic design system and is our principle brand identifier. It makes a
        fresh statement about the precise and modern style of Capital One
        Ventures and speaks to the brand’s confidence, future-facing, and
        approachable mindset.
        {/* SPACER 
            The <Spacer> component can be used in any section 
            or literally anywhere desired. 
            Possible values:
            xxxlarge, xxlarge, xlarge, large, medium, normal, small, tiny
        */}
        <Spacer normal />
        <Image imgsrc="Logo_Full-Color-2.png" />
        <Spacer normal />
      </Basic>
    </Section>

    {/* TEXT */}
    <Section title="Logo Color Variations">
      <Basic>
        While the preferred logo treatment is the full-color logo on white, the
        full-color logo can also appear on light blue backgrounds, provided
        there is enough contrast. The white text logo should appear over Core
        Blue 60. The one-color white logo should be used on photographic
        backgrounds with enough contrast. The one-color blue logo is reserved
        color-limited applications. Carefully consider before using this
        variation.
        {/* SPACER 
            The <Spacer> component can be used in any section 
            or literally anywhere desired. 
            Possible values:
            xxxlarge, xxlarge, xlarge, large, medium, normal, small, tiny
        */}
        <Spacer medium />
        <Image imgsrc="Logo_Variations.png" />
      </Basic>
    </Section>

    {/* TEXT */}
    <Section title="Incorrect Logo Usage">
      <Basic>
        There are many ways to misuse the Capital One Ventures logo. Any misuse
        of the logo mark, no matter how small, compromises the credibility of
        the brand. These examples demonstrate a few of the many non-compliant
        logo reproductions.
        {/* SPACER 
            The <Spacer> component can be used in any section 
            or literally anywhere desired. 
            Possible values:
            xxxlarge, xxlarge, xlarge, large, medium, normal, small, tiny
        */}
        <Spacer normal />
        <Image imgsrc="Logo_Misuse.png" />
      </Basic>
    </Section>

    {/* DOWNLOAD CARDS */}
    <Section title="Download Logo Files">
      <DownloadCardsDescription />
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
    <Section centered title="Download the Ventures Logo Guidelines">
      <DownloadButton fileName="C1V_BrandGuidelines_Logo">
        Logo Guide
      </DownloadButton>
    </Section>
  </Layout>
)

export default BasePage
