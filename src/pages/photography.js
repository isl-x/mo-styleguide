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

    {/* TEXT */}
    <Section title="How We Work">
      <Basic>
        When visually capturing how Capital One Ventures works, photography
        should highlight the optimistic, collaborative, truth seeking, and
        analytical spirit of our team. When using imagery of people outside of
        our team, it’s important to capture an authentic sense of diversity that
        doesn’t feel staged. Naturally lit office interiors with a shallow depth
        of field will support a tone that is West Coast over Wall Street,
        authentic, energetic, and innovative — not overly posed, robotic, or
        corporate.
        {/* SPACER 
            The <Spacer> component can be used in any section 
            or literally anywhere desired. 
            Possible values:
            xxxlarge, xxlarge, xlarge, large, medium, normal, small, tiny
        */}
      </Basic>
    </Section>

    {/* TEXT */}
    <Section title="Headshot Photography">
      <Basic>
        Capital One Ventures’ headshots will be naturally lit and take place
        outdoors. A clear blue sky speaks to our ambitious and forward thinking
        approach. The tone should feel candid, friendly and professional — not
        overly posed, cluttered, or too serious.
        {/* SPACER 
            The <Spacer> component can be used in any section 
            or literally anywhere desired. 
            Possible values:
            xxxlarge, xxlarge, xlarge, large, medium, normal, small, tiny
        */}
        <Spacer normal />
        <Image imgsrc="Headshot_Photos_Examples.png" />
        <Spacer normal />
      </Basic>
    </Section>

    <Section title="Hero Photography">
      <Basic>
        For header images, we will capture work-environment elements. Close-ups
        of hands, desks, and computers work best with diverse talent.
        Photography will be naturally lit with short depth of field and blurred
        foreground elements. Reducing areas of white in the photos will help
        text stand out. Diverse talent should not look posed or stiff.
        {/* SPACER 
            The <Spacer> component can be used in any section 
            or literally anywhere desired. 
            Possible values:
            xxxlarge, xxlarge, xlarge, large, medium, normal, small, tiny
        */}
        <Spacer normal />
        <Image imgsrc="hero_photography_example.png" />
        <Spacer normal />
      </Basic>
    </Section>

    {/* DOWNLOAD CARDS */}
    <Section title="Download Sample Photos">
      <DownloadCardsDescription />
      <DownloadCardsContainer columns={2}>
        <DownloadCard
          title="Hero Photography"
          imgsrc="Hero-Thumb.jpg"
          fileName="Hero-Photos"
        />
        <DownloadCard
          title="Example Photography"
          imgsrc="Example_Hero.jpg"
          externalFileLink="http://islprojects.com/capital-one/ventures/example_photos.zip"
        />
      </DownloadCardsContainer>
    </Section>
  </Layout>
)

export default BasePage
