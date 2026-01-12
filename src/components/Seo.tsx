/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import { NextSeo } from "next-seo";
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

export const SEO = ({ description, lang, meta, keywords, title }: Props) => {
    const metaDescription = description || DefaultProps.description;

    return (
        <NextSeo
            title={title}
            titleTemplate={`%s | ${DefaultProps.title}`}
            description={metaDescription}
            openGraph={{
                title: title,
                description: metaDescription,
                type: 'website',
            }}
            twitter={{
                cardType: 'summary',
                site: '@site',
                title: title,
                description: metaDescription,
            }}
            additionalMetaTags={[
                {
                    name: "keywords",
                    content: keywords.join(", "),
                },
                ...meta
            ]}
            additionalLinkTags={[
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
