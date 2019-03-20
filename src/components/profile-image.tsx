import React from "react"
import { useStaticQuery, graphql } from "gatsby";
import Img, { FluidObject } from "gatsby-image";

type ProfilePictureQuery = {
    file: {
        childImageSharp: {
            fluid: FluidObject
        }
    }
};

type ProfileImageProps = {
    height: string;
    width: string;
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
