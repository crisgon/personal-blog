require("dotenv").config();
const queries = require("./src/utils/algolia_queries");

module.exports = {
  siteMetadata: {
    title: `Cristiano Gonçalves`,
    position: "Desenvolvedor FrontEnd",
    description: `Desenvolvedor na Cubos Tecnologia, baiano com orgulho, amante de tecnologias, viagens, músicas e cultura japonesa.`,
    author: `@Gonkristiano`,
    siteUrl: "https://crisgon.dev"
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `uploads`,
        path: `${__dirname}/static/assets/img`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts`
      }
    },

    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-algolia-search`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME, // for all queries
        queries,
        chunkSize: 10000,
        enablePartialUpdates: true
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Cristiano Gonçalves`,
        short_name: `Cristiano`,
        start_url: `/`,
        background_color: `#e74c3c`,
        theme_color: `#e74c3c`,
        display: `minimal-ui`,
        icon: `src/images/icon.png` // This path is relative to the root of the site.
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads"
            }
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 960,
              linkImagesToOriginal: false
            }
          },

          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "static/assets/img/"
            }
          },
          `gatsby-remark-lazy-load`,
          `gatsby-remark-prismjs`
        ]
      }
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify-cms`
  ]
};
