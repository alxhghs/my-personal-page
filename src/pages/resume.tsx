import React from "react";
import { graphql } from "gatsby";
import styled from "@emotion/styled";
import { ResumeContent, SEO } from "../components";
import { breakpoints, Colors, useTheme } from "../theme";

const Wrapper = styled.div({
    display: "grid",
    padding: "0 15px",
    justifyContent: "center",
    marginBottom: "64px",
    h3: {
        fontStyle: "italic",
    },
    [`@media screen and (min-width: ${breakpoints[3]})`]: {
        grid: "auto / 700px",
    },
});

const ResumeHeaderWrapper = styled.div<Colors>(({ colors }) => ({
    justifyContent: "center",
    textAlign: "center",
    a: {
        color: colors.link,
        textDecoration: "none",
        "&:hover": {
            textDecoration: "underline",
        },
    },
}));

type Props = {
    data: {
        header: {
            html: string;
        };
        education: {
            html: string;
        };
        jobs: {
            html: string;
        };
        skills: {
            html: string;
        };
    };
};

const Resume: React.FC<Props> = ({ data }) => {
    const { header, education, jobs, skills } = data;
    const { colors } = useTheme();

    return (
        <Wrapper>
            <SEO title="Resume" />
            <ResumeHeaderWrapper colors={colors}>
                <ResumeContent html={header?.html} />
            </ResumeHeaderWrapper>
            <ResumeContent html={jobs?.html} />
            <ResumeContent html={skills?.html} />
            <ResumeContent html={education?.html} />
        </Wrapper>
    );
};

export const pageQuery = graphql`
    {
        header: markdownRemark(frontmatter: { title: { eq: "Header" } }) {
            html
        }
        education: markdownRemark(frontmatter: { title: { eq: "Education" } }) {
            html
        }
        jobs: markdownRemark(frontmatter: { title: { eq: "Jobs" } }) {
            html
        }
        skills: markdownRemark(frontmatter: { title: { eq: "Skills" } }) {
            html
        }
    }
`;

export default Resume;
