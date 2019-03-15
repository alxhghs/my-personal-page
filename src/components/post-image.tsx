import React from "react";
import { Image } from "../components";

type PostImageProps = {
    src: string;
}
export const PostImage: React.FC<PostImageProps> = ({ src }) => (
    <Image
        height={src ? "100px" : "0px"}
        width="100%"
        src={src}
        placeholder={src}
        borderRadius="4px"
    />
);
