/**
 * This is where we configure base styles and more for our new style guide app
 */

/*********************************** SITE METADATA ***********************************/
export const SITE_METADATA = {
  // All of these values are used in many ways, but more broadly are just descriptors
  // of the site itself
  SITE_TITLE: "Styleguide",
  SITE_DESCRIPTION: `We created this style guide as a central location where we house a live inventory of our brand guidelines & assets. Anyone working with Capital One Ventures is encouraged to stay familiar with this style guide and help ensure that it is kept up-to-date.`,
  BRAND_NAME: "Capital One Ventures",
  AUTHOR: "ISL",
  LOGO: "C1V_logo_home.png",
}

/*********************************** HOME PAGE ***********************************/
export const HOME_PAGE = {
  HOME_PAGE_LINKS: [
    /**
     * Copy/paste/delete these links as you need to add more or remove some
     * The links will render in the order below on the home page.
     *
     * pageUrl:    Should match the name of a file in your pages folder.
     *             i.e. "page.js" would be "/page/" (NOTE: Add trailing slash)
     * filename:   Any SVG in the assets/dynamic_icons folder.
     * linkText:   Whatever you'd like the visible text to say for the link and
     *             the resulting page title.
     * descriptiveText:   Used to describe what can be found at the link for the home page
     */
    { pageUrl: "/logo/", filename: "LogoIcon", linkText: "Logo" },
    {
      pageUrl: "/typography/",
      filename: "TypographyIcon",
      linkText: "Typography",
    },
    { pageUrl: "/color/", filename: "ColorsIcon", linkText: "Color Palette" },
    {
      pageUrl: "/graphics/",
      filename: "IllustrationIcon",
      linkText: "Icons & Graphics",
    },
    {
      pageUrl: "/photography/",
      filename: "PhotographyIcon",
      linkText: "Photography",
    },
    {
      pageUrl: "/position/",
      filename: "VoiceAndToneIcon",
      linkText: "Position & Brand Playbook",
    },
  ],
  INACTIVE_HOME_PAGE_LINKS: [
    /**
     * All of the same rules as regular page links apply as above.
     * Just don't supply a pageUrl
     *
     * These links will show at the end of all active links on the home page.
     * If no inactive links - just remove the links from this list, but leave
     * INACTIVE_HOME_PAGE_LINKS: [] <- empty
     */
  ],
  // Set the number of link columns on the home page
  // The site is responsive on smaller screens and thus not configurable
  HOME_PAGE_DESKTOP_COLUMN_COUNT: 4,
  HOME_PAGE_FOOTER_TEXT: `Created by ISL`,
}

/*********************************** COLORS ***********************************/
export const COLORS = {
  // Headers, footers, etc...
  PRIMARY_BACKGROUND_COLOR: "#10253F",
  // Basic (and other items) that goes on top of the PRIMARY_BACKGROUND_COLOR
  PRIMARY_FOREGROUND_COLOR: "#f8f8f8",
  // Used to generate a pop of color throughout the site. Used as an accent
  PRIMARY_HIGHLIGHT_COLOR: "#F1392E",

  /** SECONDARY REFERENCES **/
  PRIMARY_TEXT_COLOR: "#000",
  // The background color for color swatches
  LINK_BACKGROUND_COLOR: "#eef2f7",
}

/*********************************** FONTS ***********************************/
/**
 * You have two options with setting fonts globally for the site
 *
 *    1. Upload a new ".woff" file as the 'Primary' or 'Header' fonts
 *       at 'src/assets/fonts/...'. The name needs to be both Primary and Header
 *       as they apply to the broader body (Primary) and headers (Header).
 *       NOTE: The fonts that are provided as examples now are not sourced with
 *             licensing considered. They are open source, but should be replaced.
 *             Also, USE_OTHER_FONT_BASE should be equal to "" if you want to use
 *             this option.
 *    2. Type in a font below in USE_OTHER_FONT_BASE such as "helvetica" or "arial"
 *       to use a font that is provided in browser.
 */
export const USE_OTHER_FONT_BASE = "helvetica"
