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
import Block from "../components/Block"
import DownloadButton from "../components/DownloadButton"
import {
  DownloadCardsContainer,
  DownloadCardsDescription,
  DownloadCard,
} from "../components/DownloadCards"
import { Font, FontUsageGuideline } from "../components/Font"

const BasePage = () => (
  <Layout title="Color">
    <SEO title="Color" keywords={[`styleguide`, `design`, `base`]} />
    {/* Put all blocks here
        Those that are shown below are meerly examples and are intended to be deleted as needed
    */}

    {/* COLOR SWATCH */}
    <Block title="Primary Colors">
      <ColorSwatchDescription></ColorSwatchDescription>
      <ColorSwatchContainer>
        <ColorSwatch
          title="NYP Red"
          hex="#e2231a"
          rgb="18, 24, 32"
          cmyk="81, 71, 58, 75"
          pms="PMS 485"
        />
        <ColorSwatch
          title="Black"
          hex="#000"
          rgb="0, 0, 0"
          cmyk="20 , 20, 20, 90"
          pms="PMS Black 6 U"
        />
        <ColorSwatch
          title="White"
          hex="#fff"
          rgb="255, 255, 255"
          cmyk="20 , 20, 20, 90"
          pms="PMS White"
        />
      </ColorSwatchContainer>
    </Block>

    <Block title="Secondary Accent Colors">
      <ColorSwatchContainer secondary>
        <ColorSwatch
          title="Dark Blue"
          hex="#006ba6"
          rgb="18, 24, 32"
          cmyk="81, 71, 58, 75"
          pms="PMS 485"
        />
        <ColorSwatch
          title="Orange"
          hex="#ffa300"
          rgb="0, 0, 0"
          cmyk="20 , 20, 20, 90"
          pms="PMS Black 6 U"
        />
        <ColorSwatch
          title="Green"
          hex="#84c661"
          rgb="255, 255, 255"
          cmyk="20 , 20, 20, 90"
          pms="PMS White"
        />
        <ColorSwatch
          title="Light Blue"
          hex="#00a3e0"
          rgb="255, 255, 255"
          cmyk="20 , 20, 20, 90"
          pms="PMS White"
        />
        <ColorSwatch
          title="Yellow"
          hex="#fbe122"
          rgb="255, 255, 255"
          cmyk="20 , 20, 20, 90"
          pms="PMS White"
        />
      </ColorSwatchContainer>
    </Block>
    <Block title="Grays">
      <ColorSwatchContainer secondary>
        <ColorSwatch
          title="G1—Extra Dark"
          hex="#63666a"
          rgb="18, 24, 32"
          cmyk="81, 71, 58, 75"
          pms="PMS 485"
        />
        <ColorSwatch
          title="G1—Dark"
          hex="#97999b"
          rgb="18, 24, 32"
          cmyk="81, 71, 58, 75"
          pms="PMS 485"
        />
        <ColorSwatch
          title="G1—Extra Dark"
          hex="#c8c9c7"
          rgb="18, 24, 32"
          cmyk="81, 71, 58, 75"
          pms="PMS 485"
        />
        <ColorSwatch
          title="G1—Extra Dark"
          hex="#d9d9d6"
          rgb="18, 24, 32"
          cmyk="81, 71, 58, 75"
          pms="PMS 485"
        />
      </ColorSwatchContainer>

       <Image imgsrc="Color-Hierarchy.jpg" />

    </Block>

    <Block title="Color Hierarchy">
      <Image imgsrc="Color-Hierarchy.jpg" />
    </Block>

    <Block title="Extended palette">
      <ColorSwatchDescription>The extended palette consists of all the useable tints and shades of each color in the palette. They are all helpfully numbered for easy reference. Usage of these colors varies depending on the touch point, but they come in handy for illustrations and components in product.</ColorSwatchDescription>
      <ColorSwatchContainer secondary>
        <ColorSwatch
          title="Red-1"
          hex="#AD1A13"
          rgb="18, 24, 32"
          cmyk="81, 71, 58, 75"
          pms="PMS 485"
        />
        <ColorSwatch
          title="Red-2"
          hex="#C71E16"
          rgb="18, 24, 32"
          cmyk="81, 71, 58, 75"
          pms="PMS 485"
        />
        <ColorSwatch
          title="Red-3"
          hex="#FA3D34"
          rgb="18, 24, 32"
          cmyk="81, 71, 58, 75"
          pms="PMS 485"
        />
        <ColorSwatch
          title="Red-4"
          hex="#FF574F"
          rgb="18, 24, 32"
          cmyk="81, 71, 58, 75"
          pms="PMS 485"
        />
      </ColorSwatchContainer>
    </Block>

    <Block title="Downloads">
      <DownloadButton fileName="gatsby-astronaut">Download NYP Color Palette</DownloadButton>
    </Block>

  </Layout>
)

export default BasePage
