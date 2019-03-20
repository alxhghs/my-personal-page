import React from "react";
import { Image } from "../components";

type Props = {
    src: string;
    placeholder: string;
};

export const BlogImage: React.FC<Props> = ({ src, placeholder }) => (
    <Image
        src={src}
        placeholder={placeholder}
        width="100%"
        height="100px"
        objectFit="cover"
    />
);
