import React from "react"
import ProgressiveImage from "react-progressive-image";
import styled from "@emotion/styled";
import profilePic from "../images/me.png";
import profilePicLowResolution from "../images/me-low-resolution.png";

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

type ImageProps = {
    backgroundColor?: string;
    loading?: boolean;
};

const Image = styled("img")<ImageProps>`
    background-color: ${props => props.backgroundColor ? props.backgroundColor : ""};
    justify-self: center;
    border-radius: 50%;
    width: 200px;
    height: 200px;
    overflow: hidden;
    transition: .2s ease;
    image-rendering: smooth;
    filter: ${props => props.loading ? "blur(10px)" : "none"};
    &:hover {
        transform: scale(1.03);
    }
`;

const StyledProgressiveImage = styled(ProgressiveImage)`
    border-radius: 50%;
    overflow: hidden;
`;

export const ProfileImage: React.FC = () => (
    <StyledProgressiveImage 
        src={profilePic}
        placeholder={profilePicLowResolution}
    >
        { 
            (src: string, loading: boolean) => {
                return (
                    <Image loading={loading} src={src} alt="profile image" />
                )
            } 
        }
    </StyledProgressiveImage>
);
