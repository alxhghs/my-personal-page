import React from "react"
import { graphql } from "gatsby";
import { Card } from "../components";

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
                    content {
                        childContentfulRichText {
                            html
                        }
                    }
                    hero {
                        fluid(maxWidth: 300) {
                            sizes
                            src
                            srcSet
                        }
                        fixed(width: 300) {
                            width
                            height
                            src
                            srcSet
                        }
                        resize(width: 100) {
                            src
                            width
                            height
                        }
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
                        fluid: {
                            sizes: string;
                            src: string;
                            srcSet: string;
                        }
                        fixed: {
                            width: string;
                            height: string;
                            src: string;
                            srcSet: string;
                        }
                        resize: {
                            src: string;
                            width: string;
                            height: string;
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
                        <Card>
                            <img src={post.hero && post.hero.fluid.src} />
                            <h2>{ post.title }</h2>
                            <h3>{ post.dateCreated }</h3>
                            <div dangerouslySetInnerHTML={{
                                __html: post.content.childContentfulRichText.html
                            }}></div>
                        </Card>
                    ))
                }
            </ul>
        </>
    )
};

export default IndexPage;
