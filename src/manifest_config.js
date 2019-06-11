/**
 * These values are used to generate the app manifest.
 * The manifest is primarily used in the case that someone wants to save your app to their home screen
 *
 * It is not necessary that we provide these values, but please either set them to be
 * accurate to the configuration of your app or delete them so as to minimize confusion for
 * potential end users
 */
module.exports = {
  MANIFEST_OPTIONS: {
    // DELETE all of these values if you don't want to set them. Leave MANIFEST_OPTIONS.
    name: `Styleguide Base`,
    short_name: `Base`,
    start_url: `/`,
    background_color: `#fff`,
    theme_color: `#1d2c3c`,
    display: `minimal-ui`,
    icon: `src/assets/gatsby-icon.png`, // This path is relative to the root of the site.
  },
}
