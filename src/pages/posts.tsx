import React from "react"
import styled from "@emotion/styled";
import { graphql } from "gatsby";
import { Card, ProfileImage, PostImage, SEO } from "../components";

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
                            base64: string;
                        }
                    }
                    content: {
                        childContentfulRichText: {
                            html: string;
                        }
                    }
                    slug: string;
                }
            }[]
        }
    }
};

const PostsWrapper = styled("div")`
    display: grid;
    grid-template-columns: auto;
    gap: 30px;
    margin: 0px 15px;
    @media screen and (min-width: 756px) {
        grid-template-columns: repeat(2, auto);
        margin: 0;
    }
    @media screen and (min-width: 1080px) {
        grid-template-columns: repeat(3, auto);
    }
    @media screen and (min-width: 1400px) {
        grid-template-columns: repeat(4, auto);
    }
`;

const PageWrapper = styled("div")`
    display: grid;
    gap: 15px;
    grid-template-columns: auto;
    grid-template-rows: 50px 100px 50px auto;
    justify-content: center;
    align-content: center;
    text-align: center;
    height: 100%;
`;

const P = styled("p")`
    color: grey;
`;

const H1 = styled("h1")`
    margin: 0;
`;

const PostPage: React.FC<PostPageProps> = ({ data }) => {
    const { author } = data.site.siteMetadata;
    const blogPosts = data.allContentfulBlogPost.edges.map((edge) => edge.node)
    return (
        <PageWrapper>
            <SEO title="Posts" />
            <H1>Blog Posts</H1>
            <ProfileImage 
                height="100px" 
                width="100px" />
            <P>by {author}</P>
            <PostsWrapper>
                {
                    blogPosts.map((post, index) => (
                        <Card key={index} to={post.slug}>
                            <PostImage 
                                src={post.hero && post.hero.fluid.src}
                                placeholder={post.hero && post.hero.fluid.base64}    
                            />
                            <h2>{post.title}</h2>
                            <h3>{post.dateCreated}</h3>
                        </Card>
                    ))
                }
            </PostsWrapper>
        </PageWrapper>
    )
};

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
                            base64
                        }
                    }
                    slug
                }
            }
        }
    }
`;

export default PostPage;
