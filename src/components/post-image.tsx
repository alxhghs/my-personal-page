import React from "react";
import Img, { FluidObject, FixedObject } from "gatsby-image";

type PostImageProps = {
    fluid: FluidObject;
    fixed: FixedObject;
};

export const PostImage: React.FC<PostImageProps> = ({ fluid, fixed }) => (
    <Img
        fluid={fluid}
        fixed={fixed}
        css={{
            borderRadius: "4px",
        }}
    />
);
