import React from "react"
import { graphql } from "gatsby";

export const indexPageQuery = graphql`
    query IndexPageQuery {
        site {
            siteMetadata {
                title
                description
                author
            }
        }
        allContentfulBlogPost {
            edges {
                node {
                    title
                    dateCreated(formatString: "MMMM DD, YYYY")
                    hero {
                        resolutions {
                            src
                        }
                    }
                    content {
                        content
                    }
                }
            }
        }
    }
`;

type IndexPageProps = {
    data: {
        site: {
            siteMetadata: {
                title: string;
                description: string;
                author: string;
            }
        }
        allContentfulBlogPost: {
            edges: {
                node: {
                    title: string;
                    dateCreated: string;
                    hero: {
                        resolutions: {
                            src: string;
                        }
                    }
                    content: {
                        content: string;
                    }
                }
            }
        }
    }
};

const IndexPage: React.FC<IndexPageProps> = ({ data }) => {
    const { title, description, author } = data.site.siteMetadata;
    const blogPosts = data.allContentfulBlogPost.edges.map((edge) => edge.node)
    return (
        <>
            <h1>{ title }</h1>
            <p>{ description }</p>
            <p>{ author }</p>
            <ul>
                {
                    blogPosts.map((post: any, index: string) => (
                        <React.Fragment>
                            <h2>{ post.title }</h2>
                            <h3>{ post.dateCreated }</h3>
                            <p>{ post.content && post.content.content }</p>
                        </React.Fragment>
                    ))
                }
            </ul>
        </>
    )
};

export default IndexPage;
