import React from "react"
import { Image } from "../components";

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

type ProfileImageProps = {
    height?: string;
    width?: string;
    profilePicture: string;
    profilePictureLowResolution: string;
};

export const ProfileImage: React.FC<ProfileImageProps> = ({ profilePicture, profilePictureLowResolution, height, width }) => {
    return (
        <Image
            height={height ? height : "200px"}
            width={width ? width : "200px"}
            transform="1.03"
            borderRadius="50%"
            justifySelf="center"
            src={profilePicture ? profilePicture : ""}
            placeholder={profilePictureLowResolution ? profilePictureLowResolution : ""}
        />
    );
};
