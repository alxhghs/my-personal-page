import React from "react";
import styled from "@emotion/styled";
import dayjs from "dayjs";
import { Card, ProfileImage, SEO } from "../components";
import { breakpoints, Colors, useTheme } from "../theme";
import { getPublishedBlogPosts } from "../content";
import { siteMetadata } from "../siteMetadata";

const PostsWrapper = styled.div({
  display: "grid",
  gridTemplateColumns: "auto",
  gap: 30,
  padding: "0 30px",
  [`@media screen and (min-width: ${breakpoints[2]})`]: {
    gridTemplateColumns: "repeat(2, auto)",
    maxWidth: breakpoints[3],
  },
  [`@media screen and (min-width: ${breakpoints[5]})`]: {
    maxWidth: breakpoints[4],
    gridTemplateColumns: "repeat(3, auto)",
  },
});

const PageWrapper = styled.div({
  display: "grid",
  gap: 15,
  grid: "50px 100px 50px auto / auto",
  justifyContent: "center",
  alignContent: "center",
  textAlign: "center",
  height: "100%",
  marginBottom: 64,
});

const BlogCard = styled(Card)<Colors>(({ colors }) => ({
  gridTemplateRows: "auto 1fr auto",
  "h3, h4": {
    color: colors.lightText,
  },
}));

const BlogPage: React.FC = () => {
  const blogPosts = getPublishedBlogPosts();
  const keywords = [
    "Google Tag Manager",
    "Vite",
    "React",
    "CSS Grid",
    "CSS-in-JS",
  ];
  const { colors } = useTheme();
  const now = dayjs();

  return (
    <PageWrapper>
      <SEO title="Posts" keywords={keywords} />
      <h1 css={{ margin: "0" }}>Blog Posts</h1>
      <ProfileImage height="100px" width="100px" />
      <p css={{ color: "gray" }}>by {siteMetadata.author}</p>
      <PostsWrapper>
        {blogPosts.map((post) =>
          dayjs(post.frontmatter.isoDate).isBefore(now) || dayjs(post.frontmatter.isoDate).isSame(now, "day") ? (
            <BlogCard colors={colors} key={post.slug} to={`/blog/${post.slug}`}>
              <h2>{post.frontmatter.title}</h2>
              <h3>{post.frontmatter.subtitle}</h3>
              <h4>{post.frontmatter.date}</h4>
            </BlogCard>
          ) : null,
        )}
      </PostsWrapper>
    </PageWrapper>
  );
};

export default BlogPage;
