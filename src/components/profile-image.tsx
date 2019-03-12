import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "@emotion/styled";

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */

const Image = styled(Img)`
    justify-self: center;
    border-radius: 50%;
    width: 200px;
    transition: .2s ease;
    &:hover {
        transform: scale(1.03);
    }
`;

export const ProfileImage: React.FC = () => (
    <StaticQuery
        query={graphql`
        query {
            placeholderImage: file(relativePath: { eq: "me.JPG" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `}
        render={data => <Image fluid={data.placeholderImage.childImageSharp.fluid} />}
    />
)
