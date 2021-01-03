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
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Rubik`,
          `source sans pro\:300, 400, 400i, 700` // you can also specify font weights and styles
        ],
        fonts: [
          `Old Standard TT`,
          `source sans pro\:400, 700` // you can also specify font weights and styles
        ],
        fonts: [
          `Caveat`,
          `source sans pro\:400, 700` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },
    `gatsby-theme-material-ui`,
  ],
};
