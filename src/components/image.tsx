import React from "react";
import styled from "@emotion/styled";
import ProgressiveImage from "react-progressive-image";

const StyledImage = styled("img")<ImageProps>`
    background-color: ${props => props.backgroundColor ? props.backgroundColor : ""};
    overflow: hidden;
    transition: .2s ease;
    filter: ${props => props.loading ? "blur(10px)" : "none"};
    border-radius: ${props => props.borderRadius ? props.borderRadius : "4px"};
    width: ${props => props.width ? props.width : "auto"};
    height: ${props => props.height ? props.height : "auto"};
    justify-self: ${props => props.justifySelf ? props.justifySelf : ""};
    &:hover {
        transform: scale(${props => props.transform ? props.transform : "auto"});
    }
`;

type ImageProps = {
    backgroundColor?: string;
    loading?: boolean;
    borderRadius?: string;
    width?: string;
    height?: string;
    transform?: string;
    alt?: string;
    justifySelf?: string;
};

type ProgressiveImageProps = {
    src: string;
    overflow?: boolean;
} & ImageProps;

const StyledProgressiveImage = styled(ProgressiveImage)<ProgressiveImageProps>`
    overflow: ${props => props.overflow ? props.overflow : ""};
    border-radius: ${props => props.borderRadius ? props.borderRadius : ""};
`;

export const Image: React.FC<ProgressiveImageProps> = ({ 
    backgroundColor,
    borderRadius,
    width,
    height,
    transform,
    alt,
    justifySelf,
    src,
    overflow,
}) => {
    const arr = ["#bc8f8f", "#cd5c5c", "#8b4513", "#a0522d", "#cd853f", "#deb887", "#f5f5dc", "#f5deb3", "#f4a460", "#d2b48c", "#d2691e", "#b22222", "#a52a2a"];
    const color = arr[Math.floor(Math.random() * arr.length)];
    const placeholder = <div style={{ borderRadius, backgroundColor: color, height, width, justifySelf: "center" }} />
    return (
        <StyledProgressiveImage
            src={src}
            placeholder=""
            overflow={overflow}
            borderRadius={borderRadius}
            // delay={1000}
        >
            { 
                (src: string, loading: boolean) => {
                    return (
                        loading
                            ? placeholder
                            : (
                                <StyledImage 
                                    backgroundColor={backgroundColor}
                                    loading={loading}
                                    borderRadius={borderRadius}
                                    width={width}
                                    height={height}
                                    transform={transform}
                                    justifySelf={justifySelf}
                                    alt={alt}
                                    src={src}
                                />
                            )
                    )
                } 
            }
        </StyledProgressiveImage>
    );
};
