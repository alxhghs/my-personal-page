import React from "react";
import { Image } from "../components";

type PostImageProps = {
    src: string;
}
export const PostImage: React.FC<PostImageProps> = ({ src }) => (
    <Image
        height={src ? "100px" : "0px"}
        width={src ? "300px" : "200px"}
        src={src}
        borderRadius="4px"
    />
);
