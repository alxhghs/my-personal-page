/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.onCreateNode = ({ node, getNode }) => {
    if (node.internal.type === "ContentfulBlogPost") {
        // const fileNode = getNode(node.parent);
        // console.log("\n", fileNode.relativePath);
        // console.log("fileNode: ", fileNode);
        console.log("node: ", node);
    }
}