import React from "react";

type Props = {
  src: string;
  alt?: string;
};

export const BlogImage: React.FC<Props> = ({ src, alt = "Blog image" }) => (
  <img
    src={src}
    alt={alt}
    style={{
      width: "100%",
      height: "100px",
      objectFit: "cover",
    }}
  />
);
