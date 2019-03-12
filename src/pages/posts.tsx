import React from "react"
import { graphql } from "gatsby";
import styled from "@emotion/styled";
import { Card, Layout, SEO } from "../components";

export const postPageQuery = graphql`
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
                #        fixed(width: 300) {
                #            width
                #            height
                #            src
                #            srcSet
                #        }
                #        resize(width: 400) {
                #            src
                #            width
                #            height
                #        }
                    }
                }
            }
        }
    }
`;

type PostPageProps = {
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
                        childContentfulRichText: {
                            html: string;
                        }
                    }
                }
            }[]
        }
    }
};

const PostsWrapper = styled("div")`
    display: grid;
    grid-template-columns: auto;
    gap: 15px;
    padding: 30px 0;
    @media screen and (min-width: 756px) {
        grid-template-columns: repeat(2, auto);
    }
    @media screen and (min-width: 1080px) {
        grid-template-columns: repeat(3, auto);
    }
`;

const Image = styled("img")`
    border-radius: 4px;
    width: 100%;
`;

const PageWrapper = styled("div")`
    display: grid;
    align-content: center;
    justify-content: center;
    text-align: center;
`;

const P = styled("p")`
    color: grey;
`;

const PostPage: React.FC<PostPageProps> = ({ data }) => {
    const { author } = data.site.siteMetadata;
    const blogPosts = data.allContentfulBlogPost.edges.map((edge) => edge.node)
    return (
        <Layout>
            <SEO title="Posts" />
            <PageWrapper>
                <h1>Blog Posts</h1>
                <P>by {author}</P>
                <PostsWrapper>
                    {
                        blogPosts.map((post, index) => (
                            <Card key={index} to="/">
                                <Image src={post.hero && post.hero.fluid.src} />
                                <h2>{post.title}</h2>
                                <h3>{post.dateCreated}</h3>
                                {/* <div dangerouslySetInnerHTML={{
                                __html: post.content.childContentfulRichText.html
                            }}></div> */}
                            </Card>
                        ))
                    }
                </PostsWrapper>
            </PageWrapper>
        </Layout>
    )
};

export default PostPage;
