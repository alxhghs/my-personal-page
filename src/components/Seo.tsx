import React, { useEffect } from "react";
import icon from "../images/favicon.png";
import { siteMetadata } from "../siteMetadata";

type MetaTag = {
  name?: string;
  property?: string;
  content: string;
};

type Props = {
  description?: string;
  lang?: string;
  meta?: MetaTag[];
  keywords?: string[];
  title?: string;
};

const defaultKeywords = [
  "ReactJS",
  "React",
  "TypeScript",
  "JavaScript",
  "CSS Grid",
  "NodeJS",
  "Python",
  "Django",
  "FlexBox",
  "CSS-in-JS",
  "Google Tag Manager",
  "Vite",
];

const setMetaTag = (meta: MetaTag) => {
  const selector = meta.name ? `meta[name="${meta.name}"]` : `meta[property="${meta.property}"]`;
  let tag = document.head.querySelector(selector) as HTMLMetaElement | null;
  if (!tag) {
    tag = document.createElement("meta");
    if (meta.name) {
      tag.setAttribute("name", meta.name);
    }
    if (meta.property) {
      tag.setAttribute("property", meta.property);
    }
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", meta.content);
};

export const SEO: React.FC<Props> = ({
  description = siteMetadata.description,
  lang = "en",
  meta = [],
  keywords = defaultKeywords,
  title = siteMetadata.title,
}) => {
  useEffect(() => {
    const metaDescription = description || siteMetadata.description;
    document.documentElement.lang = lang;
    document.title = `${title} | ${siteMetadata.title}`;

    const tags: MetaTag[] = [
      { name: "description", content: metaDescription },
      { property: "og:title", content: title },
      { property: "og:description", content: metaDescription },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:creator", content: siteMetadata.author },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: metaDescription },
      ...(keywords.length > 0
        ? [{ name: "keywords", content: keywords.join(", ") }]
        : []),
      ...meta,
    ];

    tags.forEach(setMetaTag);

    let favicon = document.querySelector('link[rel="shortcut icon"]') as HTMLLinkElement | null;
    if (!favicon) {
      favicon = document.createElement("link");
      favicon.rel = "shortcut icon";
      favicon.type = "image/png";
      document.head.appendChild(favicon);
    }
    favicon.href = icon;
  }, [description, keywords, lang, meta, title]);

  return null;
};
