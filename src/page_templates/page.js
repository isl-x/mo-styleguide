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
import FiftyFifty from "../components/FiftyFifty"

const BasePage = () => (
  <Layout title="Test Page">
    <SEO title="Test Page" keywords={[`styleguide`, `design`, `base`]} />
    {/* Put all sections here 
        Those that are shown below are meerly examples and are intended to be deleted as needed
    */}

    {/* COLOR SWATCH */}
    <Section title="Colors">
      <ColorSwatchDescription>A test description</ColorSwatchDescription>
      <ColorSwatchContainer>
        <ColorSwatch
          title="Aqua"
          hex="#43d8f8"
          rgb="18, 24, 32"
          cmyk="81, 71, 58, 75"
          pms="PMS Black 6 U"
        />
        <ColorSwatch title="Gray" hex="#8b8b8b" rgb="18, 24, 32" />
        <ColorSwatch />
        <ColorSwatch />
        <ColorSwatch />
      </ColorSwatchContainer>
    </Section>

    {/* SECONDARY COLOR SWATCH */}
    <Section title="Colors Secondary">
      <ColorSwatchDescription>A test description</ColorSwatchDescription>
      <ColorSwatchContainer secondary>
        <ColorSwatch
          title="Aqua"
          hex="#43d8f8"
          rgb="18, 24, 32"
          cmyk="81, 71, 58, 75"
          pms="PMS Black 6 U"
        />
        <ColorSwatch title="Gray" hex="#8b8b8b" rgb="18, 24, 32" />
        <ColorSwatch />
        <ColorSwatch />
        <ColorSwatch />
      </ColorSwatchContainer>
    </Section>

    {/* TEXT */}
    <Section title="Placeholder for guideline">
      <Basic>
        This is an example of using text
        {/* SPACER 
            The <Spacer> component can be used in any section 
            or literally anywhere desired. 
            Possible values:
            xxxlarge, xxlarge, xlarge, large, medium, normal, small, tiny
        */}
        <Spacer normal />
        <Image imgsrc="random-wide-image.png" />
        <Spacer normal />
        And having text continue after an image
      </Basic>
    </Section>

    {/* IMAGE */}
    <Section title="Images">
      <Image imgsrc="random-wide-image.png" />
    </Section>

    {/* DOWNLOAD BUTTON */}
    <Section title="Downloads">
      <DownloadButton fileName="gatsby-astronaut">Logos</DownloadButton>
    </Section>

    {/* EXTERNAL DOWNLOAD BUTTON */}
    <Section title="External Download">
      <DownloadButton externalFileLink="http://islprojects.com/capital-one/ventures/example_photos.zip">
        External
      </DownloadButton>
    </Section>

    {/* DOWNLOAD CARDS */}
    <Section title="Download Cards">
      <DownloadCardsDescription>
        This is the downloads cards block
      </DownloadCardsDescription>
      <DownloadCardsContainer columns={2}>
        <DownloadCard
          title="test"
          imgsrc="random-wide-image.png"
          fileName="gatsby-astronaut"
        />
        <DownloadCard
          title="test"
          imgsrc="random-wide-image.png"
          fileName="gatsby-astronaut"
        />
        <DownloadCard
          title="test"
          imgsrc="random-wide-image.png"
          externalFileLink="http://islprojects.com/capital-one/ventures/example_photos.zip"
        />
      </DownloadCardsContainer>
    </Section>

    {/* FONTS */}
    <Section title="Fonts">
      <Font
        fontName="The Font"
        fontFileName="the-font"
        usageName="Primary"
        sample="Aa"
        sampleSize="120px"
      >
        <FontWeightSample label="Thin" noWeightNumbers />
        <FontWeightSample weight={400} label="Medium" noUpper />
        <FontWeightSample weight={600} label="Strong" />
      </Font>
      <Font
        fontName="The Other Font"
        fontFileName="the-other-font"
        usageName="Secondary"
        sample="AA"
        sampleSize="120px"
      >
        <FontWeightSample weight={100} label="Thin" noNumbers />
        <FontWeightSample weight={400} label="Medium" noLower />
        <FontWeightSample weight="bold" label="Strong" />
      </Font>
    </Section>

    {/* FONT SCALING */}
    <Section title="Font Scaling">
      <FontScale
        fontName="The Other Font"
        fontFileName="the-other-font"
        fontWeight="normal"
        letterSpacing="1.25px"
        lineHeight="40px"
        size="40px"
        description="Super mega big"
      />
      <FontScale
        fontName="The Other Font"
        fontFileName="the-other-font"
        fontWeight="normal"
        letterSpacing="1.25px"
        lineHeight="20px"
        size="20px"
        description="Super mega normal"
      />
    </Section>

    {/* FIFTY FIFTY TEXT IMAGE */}
    <Section hidden title="Fifty Fifty Text Split">
      <FiftyFifty imgRight={true} imgsrc="random-wide-image.png">
        {/* For consistency in contextual nav, make sure Section title matches the h2 here */}
        <h2>Fifty Fifty Text Split</h2>
        <p>
          Vivamus magna justo, lacinia eget consectetur sed, convallis at
          tellus. Vestibulum ac diam sit amet quam vehicula elementum sed sit
          amet dui. Curabitur non nulla sit amet nisl tempus convallis quis ac
          lectus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
          Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.
          Nulla quis lorem ut libero malesuada feugiat. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia Curae;
          Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet
          ligula. Nulla porttitor accumsan tincidunt. Donec rutrum congue leo
          eget malesuada. Sed porttitor lectus nibh. Vivamus magna justo,
          lacinia eget consectetur sed, convallis at tellus.
        </p>
      </FiftyFifty>
    </Section>
  </Layout>
)

export default BasePage
