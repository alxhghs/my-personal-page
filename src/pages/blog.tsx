import React from "react";
import styled from "@emotion/styled";
import dayjs from "dayjs";
import { graphql } from "gatsby";
import { Card, ProfileImage, SEO } from "../components";
import { breakpoints, Colors, useTheme } from "../theme";

const PostsWrapper = styled.div({
    display: "grid",
    gridTemplateColumns: "auto",
    gap: 30,
    padding: "0 30px",
    [`@media screen and (min-width: ${breakpoints[2]})`]: {
        gridTemplateColumns: "repeat(2, auto)",
        maxWidth: breakpoints[3],
    },
    [`@media screen and (min-width: ${breakpoints[5]})`]: {
        maxWidth: breakpoints[4],
        gridTemplateColumns: "repeat(3, auto)",
    },
});

const PageWrapper = styled.div({
    display: "grid",
    gap: 15,
    grid: "50px 100px 50px auto / auto",
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
    height: "100%",
    marginBottom: 64,
});

const BlogCard = styled(Card)<Colors>(({ colors }) => ({
    gridTemplateRows: "auto 1fr auto",
    "h3, h4": {
        color: colors.lightText,
    },
}));

type PostPageProps = {
    data: {
        site: {
            siteMetadata: {
                title: string;
                description: string;
                author: string;
            };
        };
        allMarkdownRemark: {
            edges: {
                node: {
                    id: string;
                    frontmatter: {
                        title: string;
                        subtitle: string;
                        date: string;
                    };
                    fields: {
                        slug: string;
                    };
                };
            }[];
        };
    };
};

const BlogPage: React.FC<PostPageProps> = ({ data }) => {
    const { author } = data.site.siteMetadata;
    const blogPosts = data.allMarkdownRemark.edges.map((edge) => edge.node);
    const keywords = [
        "Google Tag Manager",
        "Gatsby",
        "GatsbyJS",
        "CSS Grid",
        "React",
        "CSS-in-JS",
    ];
    const { colors } = useTheme();
    return (
        <PageWrapper>
            <SEO title="Posts" keywords={keywords} />
            <h1 css={{ margin: "0" }}>Blog Posts</h1>
            <ProfileImage height="100px" width="100px" />
            <p css={{ color: "gray" }}>
                by
                {author}
            </p>
            <PostsWrapper>
                {blogPosts.map((post) => {
                    const now = dayjs();
                    const date = post?.frontmatter?.date;
                    return date && dayjs(date).isBefore(now) ? (
                        <BlogCard
                            colors={colors}
                            key={post.id}
                            to={`/${post.fields.slug}`}
                        >
                            <h2>{post.frontmatter.title}</h2>
                            <h3>{post.frontmatter.subtitle}</h3>
                            <h4>{post.frontmatter.date}</h4>
                        </BlogCard>
                    ) : null;
                })}
            </PostsWrapper>
        </PageWrapper>
    );
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
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
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
