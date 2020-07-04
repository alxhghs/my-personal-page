import React from "react"
import styled from "@emotion/styled";
import dayjs from "dayjs";
import { graphql } from "gatsby";
import { Card, ProfileImage, SEO } from "../components";
import { breakPoints } from "../constants";

const PostsWrapper = styled("div")`
    display: grid;
    grid-template-columns: auto;
    gap: 30px;
    padding: 0 30px;
    @media screen and (min-width: ${breakPoints[2]}) {
        grid-template-columns: repeat(2, auto);
        max-width: ${breakPoints[3]};
    }
    @media screen and (min-width: ${breakPoints[5]}) {
        max-width: ${breakPoints[4]};
        grid-template-columns: repeat(3, auto);
    }
`;

const PageWrapper = styled("div")`
    display: grid;
    gap: 15px;
    grid: 50px 100px 50px auto / auto;
    justify-content: center;
    align-content: center;
    text-align: center;
    height: 100%;
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
        allMarkdownRemark : {
            edges: {
                node: {
                    id: string;
                    frontmatter: {
                        title: string;
                        subtitle: string;
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


const BlogPage: React.FC<PostPageProps> = ({ data }) => {
    const { author } = data.site.siteMetadata;
    const blogPosts = data.allMarkdownRemark.edges.map((edge) => edge.node)
    const keywords = [ "Google Tag Manager", "Gatsby", "GatsbyJS", "CSS Grid", "React", "CSS-in-JS" ];
    return (
        <PageWrapper>
            <SEO title="Posts" keywords={keywords} />
            <h1 css={{ margin: "0" }}>Blog Posts</h1>
            <ProfileImage height="100px" width="100px" />
            <p css={{ color: "grey" }}>by {author}</p>
            <PostsWrapper>
                {
                    blogPosts.map((post) => {
                        const now = new Date;
                        const date = post && post.frontmatter.date;
                        return (
                            now && date && dayjs(date).isBefore(now)
                                ? (
                                    <Card key={post.id} to={`/${post.fields.slug}`}>
                                        <h2>{post.frontmatter.title}</h2>
                                        <h3>{post.frontmatter.subtitle}</h3>
                                        <h4>{post.frontmatter.date}</h4>
                                    </Card>
                                ) : null
                            )
                    })
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
            edges {
                node {
                    id
                    frontmatter {
                        title
                        subtitle
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
