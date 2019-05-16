module.exports = {
  siteMetadata: {
    title: `Styleguide`,
    brand: `Lorem Ipsum Brand`,
    description: `Come find all the guidelines your heart desires`,
    author: `ISL`,
    homePageLinks: [
      { pageUrl: "/", imgsrc: "gatsby-astronaut.png", linkText: "Test" },
      { pageUrl: "/page", imgsrc: "gatsby-astronaut.png", linkText: "Test2" },
      { pageUrl: "/", imgsrc: "gatsby-astronaut.png", linkText: "Test3" },
      { pageUrl: "/", imgsrc: "gatsby-astronaut.png", linkText: "Test4" },
      { pageUrl: "/", imgsrc: "gatsby-astronaut.png", linkText: "Test5" },
      { pageUrl: "/", imgsrc: "gatsby-astronaut.png", linkText: "Test6" },
    ],
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
