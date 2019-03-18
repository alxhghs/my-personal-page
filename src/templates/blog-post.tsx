import React from "react";
import styled from "@emotion/styled";
import { graphql } from "gatsby";
import { breakPoints } from "../constants";

const Wrapper = styled("div")`
    display: grid;
    grid-template-columns: 275px;
    justify-content: center;
    align-content: center;
    height: 100%;
    margin: 0 15px;
    @media screen and (min-width: ${breakPoints[1]}) {
        grid-template-columns: 375px;
    } 
    @media screen and (min-width: ${breakPoints[2]}) {
        grid-template-columns: 700px;
    } 
    @media screen and (min-width: ${breakPoints[3]}) {
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
        contentfulImage: {
            fluid: {
                src: string;
                base64: string;
            }
        }
    }
};

const BlogPost: React.FC<Props> = ({ data }) => {
    console.log("printing data", data);
    const { markdownRemark } = data;
    if (data && markdownRemark) {
        return (
            <Wrapper>
                {/* <img src={contentfulImage && contentfulImage.fluid.src} /> */}
                <h2>{markdownRemark.frontmatter && markdownRemark.frontmatter.title}</h2>
                <h3>{markdownRemark.frontmatter && markdownRemark.frontmatter.date}</h3>
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
    # query BlogPostByPath {
        markdownRemark(frontmatter: { path: { eq: $slug }}) {
            frontmatter {
                title
                path
                date
            }
            html
        }
    }
`;

export default BlogPost;
