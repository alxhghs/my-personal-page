import React from "react"
import { useStaticQuery, graphql } from "gatsby";
import Img, { FluidObject } from "gatsby-image";
import styled from "@emotion/styled";

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

// this is necessary to fix a bug on mobile where
// the border radius doesn't show for a half-second
const StyledImg = styled(Img)`
    div, img, picture {
        border-radius: 50%;
    }
`;

export const ProfileImage: React.FC<ProfileImageProps> = ({ height, width }) => {
    const { file }: ProfilePictureQuery = useStaticQuery(
        graphql`
            query {
                file(relativePath: { eq: "me.png" }) {
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        `
    );

    return (
        <StyledImg
            fluid={file?.childImageSharp?.fluid}
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
