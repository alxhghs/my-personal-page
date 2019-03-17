const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;
    return graphql(`
        {
            allContentfulBlogPost {
                edges {
                    node {
                        title
                        dateCreated(formatString: "MMMM DD, YYYY")
                        content {
                            childContentfulRichText {
                                html
                            }
                        }
                        hero {
                            fluid(maxWidth: 300) {
                                src
                                base64
                            }
                        }
                        slug
                    }
                }
            }
        }
    `
    ).then(result => {
        result.data.allContentfulBlogPost.edges.forEach(({ node }) => {
            createPage({
                path: node.slug,
                component: path.resolve("./src/templates/blog-post.tsx"),
                context: {
                    slug: node.slug,
                },
            });
        });
    });
};
