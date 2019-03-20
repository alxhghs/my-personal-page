import React from "react";
import styled from "@emotion/styled";
import { graphql } from "gatsby";
import { breakPoints, colors } from "../constants";
import { BlogContent, BlogHeader, BlogImage, SEO } from "../components";

const Wrapper = styled("div")`
    display: grid;
    justify-content: center;
    align-content: center;
    height: 100%;
    margin: 0 15px;
    h4 {
        color: ${colors.gray};
        font-style: italic;
        font-size: 14px;
    }
    blockquote {
        border-left: 5px solid ${colors.blue};
        margin: 10px;
        padding: 15px;
        color: ${colors.gray};
        line-height: 1.5;
        p {
            margin: 0;
        }
    }
    a {
        color: ${colors.blue};
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
    }
    grid-template-columns: 275px;
    @media screen and (min-width: ${breakPoints[1]}) {
        grid-template-columns: 375px;
    } 
    @media screen and (min-width: ${breakPoints[2]}) {
        grid-template-columns: 500px;
    } 
    @media screen and (min-width: ${breakPoints[3]}) {
        grid-template-columns: 700px;
    } 
    @media screen and (min-width: ${breakPoints[4]}) {
        grid-template-columns: 950px;
    } 
`;

type Props = {
    data: {
        markdownRemark: {
            frontmatter: {
                date: string;
                title: string;
                description: string;
                keywords: string[];
            }
            html: string;
            fields: {
                slug: string;
            }
        }
        contentfulBlogImage: {
            image: {
                fluid: {
                    src: string;
                    base64: string;
                }
            }
        }
        site: {
            siteMetadata: {
                author: string;
            }
        }
    }
};

const BlogPost: React.FC<Props> = ({ data }) => {
    const { markdownRemark, contentfulBlogImage, site } = data;
    const { frontmatter } = markdownRemark;
    if (data && markdownRemark) {
        return (
            <Wrapper>
                <SEO
                    title={frontmatter.title}
                    description={frontmatter.description} 
                    keywords={frontmatter.keywords}
                />
                {
                    contentfulBlogImage && contentfulBlogImage.image.fluid 
                        ? (
                            <BlogImage
                                src={contentfulBlogImage.image.fluid.src}
                                placeholder={contentfulBlogImage.image.fluid.base64}
                            />
                        )
                        : null
                }
                <BlogHeader
                    title={frontmatter.title}
                    author={site.siteMetadata.author}
                    date={frontmatter.date}
                />
                <BlogContent html={markdownRemark.html} />
            </Wrapper>
        );
    }
    return <h2>Blog post not found</h2>;
};

export const pageQuery = graphql`
    query BlogPostByPath($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug }}) {
            frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
                description
                keywords
            }
            html
            fields {
                slug
            }
        }
        contentfulBlogImage (path: { eq: $slug}) {
            image {
                fluid {
                    src
                    base64
                }
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
