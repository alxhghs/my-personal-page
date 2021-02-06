import React from "react"
import styled from "@emotion/styled"
import { graphql } from "gatsby"
import { breakPoints } from "../constants"
import { BlogContent, BlogHeader, MarkdownWrapper, SEO } from "../components"

const Wrapper = styled(MarkdownWrapper)`
    display: grid;
    justify-content: center;
    align-content: center;
    height: 100%;
    padding: 0 15px;
    grid-template-columns: auto;
    @media screen and (min-width: ${breakPoints[4]}) {
        grid-template-columns: 900px;
    }
`

type Props = {
    data: {
        markdownRemark: {
            frontmatter: {
                date: string
                title: string
                subtitle?: string
                description: string
                keywords: string[]
            }
            html: string
            fields: {
                slug: string
            }
        }
        site: {
            siteMetadata: {
                author: string
            }
        }
    }
}

const BlogPost: React.FC<Props> = ({ data }) => {
    const { markdownRemark, site } = data
    const { frontmatter } = markdownRemark
    if (data && markdownRemark) {
        return (
            <Wrapper>
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
            </Wrapper>
        )
    }
    return <h2>Blog post not found</h2>
}

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
`

export default BlogPost
