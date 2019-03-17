require(`dotenv`).config({path: `.env`})
const { MARKS } = require("@contentful/rich-text-types");

module.exports = {
  siteMetadata: {
    title: `Alex Fenwood Hughes`,
    description: `Personal webpage for Alex Fenwood Hughes`,
    author: `Alex Fenwood Hughes`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Alex Fenwood Hughes personal site`,
        short_name: `Alex Fenwood Hughes`,
        start_url: `/`,
        display: `minimal-ui`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `4t5qq325u56f`,
        accessToken: `e02207aaf2da890ddd4cdc00c6304b43d3dd3c475a901ee23dc97615a73c824d`
      }
    },
    `gatsby-plugin-emotion`,
    {
      resolve: `@contentful/gatsby-transformer-contentful-richtext`,
      options: {
        renderMark: {
          [MARKS.CODE]: text => `<pre><code class="language-javascript>${text}</code></pre>`
        }
      }
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`${__dirname}/src/layouts/index.tsx`)
      }
    },
    `gatsby-plugin-offline`
  ],
}
