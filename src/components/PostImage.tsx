import React from "react";

type PostImageProps = {
  src: string;
  alt?: string;
};

export const PostImage: React.FC<PostImageProps> = ({ src, alt = "Post image" }) => (
  <img
    src={src}
    alt={alt}
    style={{
      borderRadius: "4px",
      maxWidth: "100%",
    }}
  />
);
