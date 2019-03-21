import React from "react";
import { graphql } from "gatsby";
import styled from "@emotion/styled";
import { ResumeContent, SEO } from "../components";

const Wrapper = styled("div")`
    display: grid;
    padding: 30px;
    h3 {
        font-style: italic;
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
            <ResumeContent html={header && header.html} />
            <ResumeContent html={jobs && jobs.html} />
            <ResumeContent html={education && education.html} />
            <ResumeContent html={skills && skills.html} />
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
