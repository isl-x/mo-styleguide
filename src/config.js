/**
 * This is where we configure base styles and more for our new style guide app
 */

/*********************************** SITE METADATA ***********************************/
export const SITE_METADATA = {
  // All of these values are used in many ways, but more broadly are just descriptors
  // of the site itself
  SITE_TITLE: "Styleguide",
  SITE_DESCRIPTION: `This is a statement about what a style guide is and why you need to use it. It should probably be 1-2 sentences up to three or four lines.`,
  BRAND_NAME: "Lorem Ipsum Brand",
  AUTHOR: "ISL",
  LOGO: "isl-logo.png",
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
    {
      pageUrl: "/example/",
      linkText: "Colors",
      descriptiveText: "This is text describing this link",
    },
    {
      pageUrl: "/",
      linkText: "Illustration",
      descriptiveText: "This is text describing this link",
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
    {
      linkText: "Layout",
      descriptiveText: "This is text describing this link",
    },
    {
      linkText: "Logo",
      descriptiveText: "This is text describing this link",
    },
    {
      linkText: "Photography",
      descriptiveText: "This is text describing this link",
    },
    {
      linkText: "Typography",
      descriptiveText: "This is text describing this link",
    },
    {
      linkText: "Voice and Tone",
      descriptiveText: "This is text describing this link",
    },
  ],
  // Set the number of link columns on the home page
  // The site is responsive on smaller screens and thus not configurable
  HOME_PAGE_DESKTOP_COLUMN_COUNT: 4,
  HOME_PAGE_FOOTER_TEXT: `Footer lorem ipsum`,
}

/*********************************** COLORS ***********************************/
export const COLORS = {
  // Headers, footers, etc...
  PRIMARY_BACKGROUND_COLOR: "#1d2c3c",
  // Basic (and other items) that goes on top of the PRIMARY_BACKGROUND_COLOR
  PRIMARY_FOREGROUND_COLOR: "#ffffff",
  // Used to generate a pop of color throughout the site. Used as an accent
  PRIMARY_HIGHLIGHT_COLOR: "#ffc9d4",

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
