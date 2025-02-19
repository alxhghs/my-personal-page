import React from "react";
import Image from "next/image";
import styled from "@emotion/styled";

type ProfileImageProps = {
    height: string;
    width: string;
};

// this is necessary to fix a bug on mobile where
// the border radius doesn't show for a half-second
const StyledImg = styled(Image)({
    "div, img, picture": {
        borderRadius: "50%",
    },
});

export const ProfileImage: React.FC<ProfileImageProps> = ({
    height,
    width,
}) => {
    return (
        <StyledImg
            src="/me.png"
            alt="Profile Image"
            layout="fixed"
            height={parseInt(height)}
            width={parseInt(width)}
            css={{
                borderRadius: "50%",
                justifySelf: "center",
                margin: "0 auto",
            }}
        />
    );
};
