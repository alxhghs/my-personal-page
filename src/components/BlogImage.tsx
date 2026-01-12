import React from "react";
import Image from "next/image";

type Props = {
    fluid: {
        src: string;
        height: number;
        width: number;
    };
};

export const BlogImage: React.FC<Props> = ({ fluid }) => (
    <Image
        src={fluid.src}
        height={fluid.height}
        width={fluid.width}
        css={{
            width: "100%",
            height: "100px",
            objectFit: "cover",
        }}
    />
);
