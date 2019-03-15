import React from "react"
import profilePic from "../images/me.png";
import profilePicLowResolution from "../images/me-low-resolution.png";
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

export const ProfileImage: React.FC = () => (
    <Image 
        height="200px"
        width="200px"
        transform="1.03"
        src={profilePic}
        placeholder={profilePicLowResolution}
        borderRadius="50%"
    />
);
