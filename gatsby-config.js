module.exports = {
  siteMetadata: {
    title: "aurore-content",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "BPEEdEHqsnEqrO7rSYfXyNLhItWzPylp5XJdzbFAC7U",
        spaceId: "8qvy25wo0zyo",
      },
    },
    "gatsby-plugin-sass",
  ],
};
