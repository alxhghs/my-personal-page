/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
// @ts-ignore
import icon from "../images/favicon.png";

type Props = {
    description: string;
    lang: string;
    meta:
        | {
              name: string;
              content: any;
              property?: undefined;
          }
        | {
              name?: undefined;
              content: any;
              property: string;
          }
        | ConcatArray<
              | {
                    name: string;
                    content: any;
                    property?: undefined;
                }
              | {
                    name?: undefined;
                    content: any;
                    property: string;
                }
          >;
    keywords: string[];
    title: string;
};

const DefaultProps: Props = {
    lang: "en",
    description: "Alex Fenwood Hughes's personal website",
    title: "Alex Fenwood Hughes",
    meta: [],
    keywords: [
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
        "GatsbyJS",
        "Gatsby",
    ],
};

type SEOQuery = {
    site: {
        siteMetadata: {
            title: string;
            description: string;
            author: string;
        };
    };
};

export const SEO = ({ description, lang, meta, keywords, title }: Props) => {
    const { site }: SEOQuery = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        author
                    }
                }
            }
        `,
    );

    const metaDescription = description || site.siteMetadata.description;

    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={title}
            titleTemplate={`%s | ${site.siteMetadata.title}`}
            meta={[
                {
                    name: `description`,
                    content: metaDescription,
                },
                {
                    property: `og:title`,
                    content: title,
                },
                {
                    property: `og:description`,
                    content: metaDescription,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    name: `twitter:card`,
                    content: `summary`,
                },
                {
                    name: `twitter:creator`,
                    content: site.siteMetadata.author,
                },
                {
                    name: `twitter:title`,
                    content: title,
                },
                {
                    name: `twitter:description`,
                    content: metaDescription,
                },
            ]
                .concat(
                    keywords.length > 0
                        ? {
                              name: `keywords`,
                              content: keywords.join(`, `),
                          }
                        : [],
                )
                .concat(meta)}
            link={[
                {
                    rel: "shortcut icon",
                    type: "image/png",
                    href: icon,
                },
            ]}
        />
    );
};

SEO.defaultProps = DefaultProps;
