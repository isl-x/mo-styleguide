module.exports = {
  siteMetadata: {
    title: `Styleguide`,
    brand: `Lorem Ipsum Brand`,
    description: `Come find all the guidelines your heart desires`,
    author: `ISL`,
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Styleguide Base`,
        short_name: `Base`,
        start_url: `/`,
        background_color: ``,
        theme_color: ``,
        display: `minimal-ui`,
        icon: `src/assets/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
