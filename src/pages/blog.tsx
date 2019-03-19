import React from "react"
import styled from "@emotion/styled";
import { graphql } from "gatsby";
import { Card, ProfileImage, SEO } from "../components";
import { breakPoints } from "../constants";

type PostPageProps = {
    data: {
        site: {
            siteMetadata: {
                title: string;
                description: string;
                author: string;
            }
        }
        allMarkdownRemark : {
            totalCount: number;
            edges: {
                node: {
                    id: string;
                    frontmatter: {
                        title: string;
                        date: string;
                    }
                    fields: {
                        slug: string;
                    }
                }
            }[];
        }
    }
};

const PostsWrapper = styled("div")`
    display: grid;
    grid-template-columns: auto;
    gap: 30px;
    margin: 0px 15px;
    @media screen and (min-width: ${breakPoints[2]}) {
        grid-template-columns: repeat(2, auto);
        margin: 0;
    }
    @media screen and (min-width: ${breakPoints[4]}) {
        grid-template-columns: repeat(3, auto);
    }
    @media screen and (min-width: ${breakPoints[5]}) {
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

const BlogPage: React.FC<PostPageProps> = ({ data }) => {
    console.log("printing data from blog page", data);
    const { author } = data.site.siteMetadata;
    const blogPosts = data.allMarkdownRemark.edges.map((edge) => edge.node)
    return (
        <PageWrapper>
            <SEO title="Posts" />
            <h1 css={{ margin: "0" }}>Blog Posts</h1>
            <ProfileImage 
                height="100px" 
                width="100px" />
            <p css={{ color: "grey" }}>by {author}</p>
            <h3 css={{
                color: "gray",
                fontSize: "14px",
                fontStyle: "italic",
            }}>{data.allMarkdownRemark.totalCount} posts</h3>
            <PostsWrapper>
                {
                    blogPosts.map((post) => (
                        <Card key={post.id} to={post.fields.slug}>
                            {/* <PostImage 
                                src={post.hero && post.hero.fluid.src}
                                placeholder={post.hero && post.hero.fluid.base64}    
                            /> */}
                            <h2>{post.frontmatter.title}</h2>
                            <h3>{post.frontmatter.date}</h3>
                        </Card>
                    ))
                }
            </PostsWrapper>
        </PageWrapper>
    )
};

export const blogPageQuery = graphql`
    query IndexPageQuery {
        site {
            siteMetadata {
                title
                description
                author
            }
        }
        allMarkdownRemark (sort: { order: DESC, fields: [frontmatter___date]}) {
            totalCount
            edges {
                node {
                    id
                    frontmatter {
                        title
                        date(formatString: "DD MMMM YYYY")
                    }
                    fields {
                        slug
                    }
                }
            }
        }
    }
`;

export default BlogPage;
