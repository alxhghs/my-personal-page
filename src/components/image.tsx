import React from "react";
import styled from "@emotion/styled";
import ProgressiveImage from "react-progressive-image";
// import LazyLoad from "react-lazyload";

const StyledImage = styled("img") <ImageProps>`
    background-color: ${props => props.backgroundColor ? props.backgroundColor : ""};
    overflow: hidden;
    transition: .2s ease;
    opacity: ${props => props.loading ? 0.5 : 1};
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
    placeholder: string;
} & ImageProps;

const StyledProgressiveImage = styled(ProgressiveImage) <ProgressiveImageProps>`
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
    placeholder
}) => {
    return (
        // <LazyLoad>
            <StyledProgressiveImage
                src={src}
                placeholder={placeholder ? placeholder : ""}
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
                                justifySelf={justifySelf}
                                alt={alt}
                                src={src}
                            />
                        )
                    }
                }
            </StyledProgressiveImage>
        // </LazyLoad>
    );
};
