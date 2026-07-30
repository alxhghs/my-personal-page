import dayjs from "dayjs";
import matter from "gray-matter";
import { marked } from "marked";

import ellipsisRaw from "./blog-posts/ellipsis.md?raw";
import cssGridRaw from "./blog-posts/css-grid.md?raw";
import gatsbyRaw from "./blog-posts/gatsby.md?raw";
import gatsbyCurrentUrlRaw from "./blog-posts/gatsby-current-url.md?raw";
import googleTagManager1Raw from "./blog-posts/google-tag-manager-1.md?raw";
import googleTagManager2Raw from "./blog-posts/google-tag-manager-2.md?raw";
import mtgDeckAnalyzerRaw from "./blog-posts/mtg-deck-analyzer.md?raw";
import multipleNextAppsRaw from "./blog-posts/multiple-next-apps.md?raw";
import nextOnVercelRaw from "./blog-posts/next-on-vercel.md?raw";
import setTimeoutWithHooksRaw from "./blog-posts/setTimeout-with-hooks.md?raw";
import typeGuardsRaw from "./blog-posts/type-guards.md?raw";
import typedFilterRaw from "./blog-posts/typed-filter.md?raw";

import educationRaw from "./resume/education.md?raw";
import headerRaw from "./resume/header.md?raw";
import jobsRaw from "./resume/jobs.md?raw";
import skillsRaw from "./resume/skills.md?raw";

type BlogFrontmatter = {
  title: string;
  subtitle?: string;
  date: string;
  description?: string;
  keywords?: string[];
};

export type BlogPost = {
  slug: string;
  html: string;
  frontmatter: {
    title: string;
    subtitle?: string;
    date: string;
    isoDate: string;
    description: string;
    keywords: string[];
  };
};

const blogMarkdown = [
  { slug: "ellipsis", raw: ellipsisRaw },
  { slug: "css-grid", raw: cssGridRaw },
  { slug: "gatsby", raw: gatsbyRaw },
  { slug: "gatsby-current-url", raw: gatsbyCurrentUrlRaw },
  { slug: "google-tag-manager-1", raw: googleTagManager1Raw },
  { slug: "google-tag-manager-2", raw: googleTagManager2Raw },
  { slug: "mtg-deck-analyzer", raw: mtgDeckAnalyzerRaw },
  { slug: "multiple-next-apps", raw: multipleNextAppsRaw },
  { slug: "next-on-vercel", raw: nextOnVercelRaw },
  { slug: "setTimeout-with-hooks", raw: setTimeoutWithHooksRaw },
  { slug: "type-guards", raw: typeGuardsRaw },
  { slug: "typed-filter", raw: typedFilterRaw },
] as const;

const parsedBlogPosts: BlogPost[] = blogMarkdown.map(({ slug, raw }) => {
  const { data, content } = matter(raw);
  const frontmatter = data as BlogFrontmatter;
  const isoDate = dayjs(frontmatter.date).format("YYYY-MM-DD");
  return {
    slug,
    html: marked.parse(content) as string,
    frontmatter: {
      title: frontmatter.title,
      subtitle: frontmatter.subtitle,
      date: dayjs(frontmatter.date).format("DD MMMM YYYY"),
      isoDate,
      description: frontmatter.description || frontmatter.subtitle || frontmatter.title,
      keywords: frontmatter.keywords || [],
    },
  };
});

export const getPublishedBlogPosts = () => {
  const now = dayjs();
  return parsedBlogPosts
    .filter((post) => dayjs(post.frontmatter.isoDate).isBefore(now) || dayjs(post.frontmatter.isoDate).isSame(now, "day"))
    .sort((a, b) => dayjs(b.frontmatter.isoDate).valueOf() - dayjs(a.frontmatter.isoDate).valueOf());
};

export const getBlogPostBySlug = (slug: string) =>
  parsedBlogPosts.find((post) => post.slug === slug);

const parseResumeContent = (raw: string) => {
  const { content } = matter(raw);
  return marked.parse(content) as string;
};

export const resumeContent = {
  header: parseResumeContent(headerRaw),
  jobs: parseResumeContent(jobsRaw),
  skills: parseResumeContent(skillsRaw),
  education: parseResumeContent(educationRaw),
};
