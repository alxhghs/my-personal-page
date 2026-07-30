import React from "react";
import styled from "@emotion/styled";
import me from "../images/me.png";

type ProfileImageProps = {
  height: string;
  width: string;
};

const StyledImg = styled.img({
  borderRadius: "50%",
  objectFit: "cover",
});

export const ProfileImage: React.FC<ProfileImageProps> = ({ height, width }) => (
  <StyledImg
    src={me}
    alt="Profile"
    css={{
      borderRadius: "50%",
      height,
      width,
      justifySelf: "center",
      margin: "0 auto",
    }}
  />
);
