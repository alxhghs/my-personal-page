import React from "react";
import styled from "@emotion/styled";
import { graphql } from "gatsby";
import { breakPoints, colors } from "../constants";
import { Image } from "../components";

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
    grid-template-columns: 325px;
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
                path: string;
                title: string;
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
    console.log("printing data", data);
    const { markdownRemark, contentfulBlogImage, site } = data;
    if (data && markdownRemark) {
        return (
            <Wrapper>
                <Image 
                    src={contentfulBlogImage && contentfulBlogImage.image.fluid.src}
                    placeholder={contentfulBlogImage && contentfulBlogImage.image.fluid.base64}
                    width="100%"
                    height="auto"
                />
                <h2>{markdownRemark.frontmatter && markdownRemark.frontmatter.title}</h2>
                <h3>by {site && site.siteMetadata.author}</h3>
                <h4>{markdownRemark.frontmatter && markdownRemark.frontmatter.date}</h4>
                <p dangerouslySetInnerHTML={{
                    __html: markdownRemark.html
                }}></p>
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