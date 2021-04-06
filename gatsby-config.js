module.exports = {
  plugins: [
    "gatsby-plugin-sitemap",
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-sass`,
    `gatsby-plugin-typescript`,
    "gatsby-plugin-svg-sprite",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },

    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
  siteMetadata: {
    title: "TARALLO",
    siteUrl: "https://gracious-blackwell-12a72f.netlify.app",
  },
};
