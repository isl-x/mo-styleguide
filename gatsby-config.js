module.exports = {
  /**
   * User configurable content
   *
   * siteMetadata - Content that is rendered around the site
   * gatsby-plugin-manifest - Metadata that shows about the site to browsers, search, and devices
   */
  siteMetadata: {
    // Home page configuration
    title: `Styleguide`,
    brand: `Lorem Ipsum Brand`,
    description: `Come find all the guidelines your heart desires`,
    author: `ISL`,
    homePageFooterText: `Footer lorem ipsum`,
    homePageLinks: [
      /**
       * Copy/paste/delete these links as you need to add more or remove some
       * The links will render in the order below on the home page.
       *
       * pageUrl:    Should match the name of a file in your pages folder.
       *             i.e. "page.js" would be "/page/" (NOTE: Add trailing slash)
       * imgsrc:     Needs to be a ".png" file in the assets folder
       * linkText:   Whatever you'd like the visible text to say
       */
      { pageUrl: "/colors",
        imgsrc: "gatsby-astronaut.png",
        linkText: "Colors"
      },
      {
        pageUrl: "/example/",
        imgsrc: "gatsby-astronaut.png",
        linkText: "Test2",
      },
      { pageUrl: "/", imgsrc: "gatsby-astronaut.png", linkText: "Test3" },
      { pageUrl: "/", imgsrc: "gatsby-astronaut.png", linkText: "Test4" },
      { pageUrl: "/", imgsrc: "gatsby-astronaut.png", linkText: "Test5" },
      { pageUrl: "/", imgsrc: "gatsby-astronaut.png", linkText: "Test6" },
    ],
    // Set the number of link columns on the home page
    // The site is responsive on smaller screens and thus not configurable
    homePageDesktopColumnCount: 4,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Styleguide Base`,
        short_name: `Base`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#1d2c3c`,
        display: `minimal-ui`,
        icon: `src/assets/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
