import React from "react";
import { Image } from "../components";

type PostImageProps = {
    src: string;
    placeholder?: string;
};

export const PostImage: React.FC<PostImageProps> = ({ src, placeholder }) => (
    <Image
        height={src ? "100px" : "0px"}
        width={src ? "200px" : "200px"}
        src={src}
        borderRadius="4px"
        placeholder={placeholder ? placeholder : ""}
    />
);
