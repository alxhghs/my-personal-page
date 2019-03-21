import React from "react";
import { graphql } from "gatsby";
import styled from "@emotion/styled";
import { ResumeContent, SEO } from "../components";
import { breakPoints } from "../constants";

const Wrapper = styled("div")`
    display: grid;
    padding: 0 45px;
    justify-content: center;
    h3 {
        font-style: italic;
    }
    @media screen and (min-width: ${breakPoints[3]}) {
        grid-template-columns: 700px;
    }
`;

const ResumeHeaderWrapper = styled("div")`
    justify-content: center;
    text-align: center;
    a {
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
    }
`;

type Props = {
    data: {
        header: {
            html: string;
        }
        education: {
            html: string;
        }
        jobs: {
            html: string;
        }
        skills: {
            html: string;
        }
    }
}

const Resume: React.FC<Props> = ({ data }) => {
    const { header, education, jobs, skills } = data;

    return (
        <Wrapper>
            <SEO title="Resume" />
            <ResumeHeaderWrapper>
                <ResumeContent html={header && header.html} />
            </ResumeHeaderWrapper>
            <ResumeContent html={jobs && jobs.html} />
            <ResumeContent html={skills && skills.html} />
            <ResumeContent html={education && education.html} />
        </Wrapper>
    );
};

export const pageQuery = graphql`
    {
        header: markdownRemark (frontmatter: { title: { eq: "Header" }}) {
            html
        }
        education: markdownRemark (frontmatter: { title: { eq: "Education" }}) {
            html
        }
        jobs: markdownRemark (frontmatter: { title: { eq: "Jobs" }}) {
            html
        }
        skills: markdownRemark (frontmatter: { title: { eq: "Skills" }}) {
            html
        }
    }
`;

export default Resume;
