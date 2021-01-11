require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "aurore-content",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: process.env.CONTENTFULL_TOKEN,
        spaceId: process.env.CONTENTFULL_SPACE_ID,
      },
    },
    "gatsby-plugin-sass",
    `gatsby-plugin-fontawesome-css`,
    `gatsby-theme-material-ui`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/styles/images`,
      },
    },
  ],
};
