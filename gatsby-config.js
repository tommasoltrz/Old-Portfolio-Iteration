export const plugins = [
  "gatsby-plugin-netlify-cms",
  "gatsby-plugin-sass",
  "gatsby-plugin-image",
  "gatsby-plugin-react-helmet",
  "gatsby-plugin-sitemap",
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
];
export const siteMetadata = {
  title: "TARALLO",
  siteUrl: "https://gracious-blackwell-12a72f.netlify.app",
};
