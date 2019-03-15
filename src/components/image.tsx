import React from "react";
import styled from "@emotion/styled";
import ProgressiveImage from "react-progressive-image";

const StyledImage = styled("img")<ImageProps>`
    background-color: ${props => props.backgroundColor ? props.backgroundColor : ""};
    justify-self: center;
    overflow: hidden;
    transition: .2s ease;
    image-rendering: smooth;
    filter: ${props => props.loading ? "blur(10px)" : "none"};
    border-radius: ${props => props.borderRadius ? props.borderRadius : "none"};
    width: ${props => props.width ? props.width : "auto"};
    height: ${props => props.height ? props.height : "auto"};
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
};

type ProgressiveImageProps = {
    src: string;
    placeholder:string;
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
    src,
    placeholder,
    overflow,
}) => (
    <StyledProgressiveImage
        src={src}
        placeholder={placeholder}
        overflow={overflow}
        borderRadius={borderRadius}
    >
        { 
            (src: string, loading: boolean) => {
                return (
                    <StyledImage 
                        backgroundColor={backgroundColor}
                        loading={loading}
                        borderRadius={borderRadius}
                        width={width}
                        height={height}
                        transform={transform}
                        alt={alt}
                        src={src}
                        placeholder={placeholder}
                    />
                )
            } 
        }
    </StyledProgressiveImage>
);
