require(`dotenv`).config({path: `.env`})

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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
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
    `@contentful/gatsby-transformer-contentful-richtext`,
  ],
}
