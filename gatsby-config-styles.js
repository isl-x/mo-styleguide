/**
 * This is where we configure base styles for our new style guide app
 */

/*********************************** COLORS ***********************************/
export const COLORS = {
  // Headers, footers, etc...
  PRIMARY_BACKGROUND_COLOR: "#1d2c3c",
  // Basic (and other items) that goes on top of the PRIMARY_BACKGROUND_COLOR
  PRIMARY_FOREGROUND_COLOR: "#ffffff",

  /** SECONDARY REFERENCES **/
  PRIMARY_TEXT_COLOR: "#000",
  // The background color for the links on the Home page
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
 *    2. Type in a font below in USE_OTHER_FONT_BASE such as "helvetica" or "arial"
 *       to use a font that is provided in browser.
 */
export const USE_OTHER_FONT_BASE = 'helvetica'
