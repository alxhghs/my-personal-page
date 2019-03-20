import React from "react";
import { ResumeHeader, SEO } from "../components";
import { graphql } from "gatsby";

type Props = {
    data: {
        allMarkdownRemark: {
            edges: {
                node: {
                    frontmatter: {
                        title: string;
                    }
                    html: string;
                }
            }
        }
    }
}
const Resume: React.FC<Props> = ({ data }) => {
    return (
        <>
            <SEO title="Resume" />
            <ResumeHeader />
        </>
    );
};

export const pageQuery = graphql`
    {
        allMarkdownRemark(
            filter: {
                frontmatter: { title: { in : ["Skills", "Education", "Jobs"]}
            }}) {
            edges {
                node {
                    html
                    frontmatter {
                        title
                    }
                }
            }
        }
    }
`;

export default Resume;
