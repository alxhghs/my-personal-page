import React from "react";
import styled from "styled-components";
import { ProfileImage, ResumeContent, SEO } from "../components";
import { breakpoints, Colors, useTheme } from "../theme";
import { resumeContent } from "../content";

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

const Resume: React.FC = () => {
  const { colors } = useTheme();

  return (
    <Wrapper>
      <SEO title="Resume" />
      <ResumeHeaderWrapper colors={colors}>
        <ProfileImage height="100px" width="100px" />
        <ResumeContent html={resumeContent.header} />
      </ResumeHeaderWrapper>
      <ResumeContent html={resumeContent.jobs} />
      <ResumeContent html={resumeContent.skills} />
      <ResumeContent html={resumeContent.education} />
    </Wrapper>
  );
};

export default Resume;
