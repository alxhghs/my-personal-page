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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `resume-items`,
        path: `${__dirname}/src/resume`
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
              inlineCodeMarker: "±",
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
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`${__dirname}/src/layouts/index.tsx`)
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-catch-links`,
  ],
}
