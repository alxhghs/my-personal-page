import React from "react";
import { graphql } from "gatsby";
import { BlogContent, BlogHeader, MarkdownWrapper, SEO } from "../components";

type Props = {
    data: {
        markdownRemark: {
            frontmatter: {
                date: string;
                title: string;
                subtitle?: string;
                description: string;
                keywords: string[];
            };
            html: string;
            fields: {
                slug: string;
            };
        };
        site: {
            siteMetadata: {
                author: string;
            };
        };
    };
};

const BlogPost: React.FC<Props> = ({ data }) => {
    const { markdownRemark, site } = data;
    const { frontmatter } = markdownRemark;
    if (data && markdownRemark) {
        return (
            <MarkdownWrapper>
                <SEO
                    title={
                        frontmatter.title +
                        (frontmatter.subtitle
                            ? ": " + frontmatter.subtitle
                            : "")
                    }
                    description={frontmatter.description}
                    keywords={frontmatter.keywords}
                />
                <BlogHeader
                    title={frontmatter.title}
                    subtitle={frontmatter.subtitle}
                    author={site.siteMetadata.author}
                    date={frontmatter.date}
                />
                <BlogContent html={markdownRemark.html} />
            </MarkdownWrapper>
        );
    }
    return <h2>Blog post not found</h2>;
};

export const pageQuery = graphql`
    query BlogPostByPath($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            frontmatter {
                title
                subtitle
                date(formatString: "MMMM DD, YYYY")
                description
                keywords
            }
            html
            fields {
                slug
            }
        }
        site {
            siteMetadata {
                author
            }
        }
    }
`;

export default BlogPost;
