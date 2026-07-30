import React from "react";
import { useParams } from "react-router-dom";
import { BlogContent, BlogHeader, MarkdownWrapper, SEO } from "../components";
import { getBlogPostBySlug } from "../content";
import { siteMetadata } from "../siteMetadata";

const BlogPostPage: React.FC = () => {
  const { slug } = useParams();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  if (!post) {
    return <h2>Blog post not found</h2>;
  }

  return (
    <MarkdownWrapper>
      <SEO
        title={post.frontmatter.title + (post.frontmatter.subtitle ? `: ${post.frontmatter.subtitle}` : "")}
        description={post.frontmatter.description}
        keywords={post.frontmatter.keywords}
      />
      <BlogHeader
        title={post.frontmatter.title}
        subtitle={post.frontmatter.subtitle}
        author={siteMetadata.author}
        date={post.frontmatter.date}
      />
      <BlogContent html={post.html} />
    </MarkdownWrapper>
  );
};

export default BlogPostPage;
