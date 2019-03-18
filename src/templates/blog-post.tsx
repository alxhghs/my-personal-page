import React from "react";
import styled from "@emotion/styled";
import { graphql } from "gatsby";
import { breakPoints } from "../constants";
import { Image } from "../components";

const Wrapper = styled("div")`
    display: grid;
    grid-template-columns: 325px;
    justify-content: center;
    align-content: center;
    height: 100%;
    margin: 0 15px;
    /* @media screen and (min-width: ${breakPoints[1]}) {
        grid-template-columns: 375px;
    }  */
    @media screen and (min-width: ${breakPoints[2]}) {
        grid-template-columns: 375px;
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
        }
        contentfulBlogImage: {
            image: {
                fluid: {
                    src: string;
                    base64: string;
                }
            }
        }
    }
};

const BlogPost: React.FC<Props> = ({ data }) => {
    console.log("printing data", data);
    const { markdownRemark, contentfulBlogImage } = data;
    if (data && markdownRemark) {
        return (
            <Wrapper>
                <Image 
                    src={contentfulBlogImage && contentfulBlogImage.image.fluid.src}
                    placeholder={contentfulBlogImage && contentfulBlogImage.image.fluid.base64}
                    width="100%"
                    height="auto"
                />
                <div className="side"/>
                <div className="content">
                    <h2>{markdownRemark.frontmatter && markdownRemark.frontmatter.title}</h2>
                    <h3>{markdownRemark.frontmatter && markdownRemark.frontmatter.date}</h3>
                    <p dangerouslySetInnerHTML={{
                        __html: markdownRemark.html
                    }}></p>
                </div>
                <div className="side"/>
            </Wrapper>
        );
    }
    return <h2>Blog post not found</h2>;
};

export const pageQuery = graphql`
    query BlogPostByPath($slug: String!) {
    # query BlogPostByPath {
        markdownRemark(frontmatter: { path: { eq: $slug }}) {
            frontmatter {
                title
                path
                date
            }
            html
        }
        contentfulBlogImage (path: { eq: $slug}) {
            image {
                fluid {
                    src
                    base64
                }
            }
        }
    }
`;

export default BlogPost;
