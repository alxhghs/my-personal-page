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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/blog-posts`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
            },
          },
        ],
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
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`${__dirname}/src/layouts/index.tsx`)
      }
    },
    `gatsby-plugin-offline`,
  ],
}
