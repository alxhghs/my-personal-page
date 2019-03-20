import React from "react"
import { useStaticQuery, graphql } from "gatsby";
import Img, { FluidObject } from "gatsby-image";

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

type ProfilePictureQuery = {
    file: {
        childImageSharp: {
            fluid: FluidObject
        }
    }
};

type ProfileImageProps = {
    height?: string;
    width?: string;
};

export const ProfileImage: React.FC<ProfileImageProps> = ({ height, width }) => {
    const { file }: ProfilePictureQuery = useStaticQuery(
        graphql`
            query { 
                file(relativePath: { eq: "me.png" }) {
                    childImageSharp {
                        fluid {
                            src
                            base64
                        }
                    }
                }
            }
        `
    );

    return (
        <Img
            fluid={file.childImageSharp.fluid}
            css={{
                borderRadius: "50%",
                height,
                width,
                justifySelf: "center",
                margin: "0 auto",
            }}
        />
    );
};
