import React from "react";
import styled from "@emotion/styled";
import { graphql } from "gatsby";

const Wrapper = styled("div")`
    display: grid;
    justify-content: center;
    align-content: center;
    height: 100%;
    margin: 0 15px;
`;

type Props = {
    data: {
        contentfulBlogPost: {
            title: string;
            dateCreated: string;
            content: {
                childContentfulRichText: {
                    html: string;
                }
            }
            hero: {
                fluid: {
                    src: string;
                    base64: string;
                }
            }
        }
    }
};

const BlogPost: React.FC<Props> = ({ data }) => {
    const post = data.contentfulBlogPost;
    if (post) {
        return (
            <Wrapper>
                <img src={post.hero && post.hero.fluid.src}/>
                <h2>{post.title}</h2>
                <h3>{post.dateCreated}</h3>
                <p dangerouslySetInnerHTML={{
                    __html: post.content.childContentfulRichText.html
                }}></p>
            </Wrapper>
        );
    }
    return <h2>Blog post not found</h2>;
};

export const query = graphql`
    query($slug: String!) {
        contentfulBlogPost(slug: { eq: $slug }) {
            title
            dateCreated(formatString: "MMMM DD, YYYY")
            content {
                childContentfulRichText {
                    html
                }
            }
            hero {
                fluid(maxWidth: 300) {
                    src
                    base64
                }
            }
        }
    }
`;

export default BlogPost;
