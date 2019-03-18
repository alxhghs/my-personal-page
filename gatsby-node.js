const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;
    if (node.internal.type === "MarkdownRemark") {
        const slug = createFilePath({ node, getNode, basePath: "pages" });
        createNodeField({
            node,
            name: "slug",
            value: `blog${slug}`,
        });
    }
}

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;
    const blogPostTemplate = path.resolve("src/templates/blog-post.tsx");
    return graphql(`
        {
            allMarkdownRemark(
                sort: { order: DESC, fields: [frontmatter___date] }
                limit: 1000
            ) {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `).then(result => {
        if (result.errors) {
            return Promise.reject(result.errors);
        }
        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
            const path = node && node.fields.slug;
            console.log("printing path", path);
            createPage({
                path,
                component: blogPostTemplate,
                context: {
                    // slug: `blog/css-grid`
                    slug: path
                }
            });
        });
    });
};
