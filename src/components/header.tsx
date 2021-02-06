import React from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";
import { Link } from "../components";
import { lightModeColors } from "../theme";
import { Page } from "gatsby";

const Animation = keyframes`
    0% {
        background-position: 0% 82%;
    }
    50% {
        background-position: 100% 19%;
    }
    100% {
        background-position: 0% 82%;
    }
`;

const StyledHeader = styled("header")`
    display: grid;
    grid: auto / repeat(2, auto);
    gap: 45px;
    background: linear-gradient(
        124deg,
        #ff2400,
        #e81d1d,
        #e8b71d,
        #e3e81d,
        #1de840,
        #1ddde8,
        #2b1de8,
        #dd00f3,
        #dd00f3
    );
    background-size: 1800% 1800%;
    justify-content: center;
    animation: ${Animation} 90s ease infinite;
    text-shadow: 0 0 3px ${lightModeColors.black};
`;

const StyledH2 = styled.h2<{ underline: boolean }>((props) => ({
    textDecoration: props.underline ? "underline" : undefined,
}));

type Props = {
    path: Page["path"];
};

export const Header: React.FC<Props> = ({ path }) => (
    <StyledHeader>
        <StyledH2 underline={path === "/" || path === ""}>
            <Link to="/" hovercolor={lightModeColors.lightgray}>
                Home
            </Link>
            {console.log(path)}
        </StyledH2>
        <StyledH2 underline={path.includes("blog")}>
            <Link to="/blog" hovercolor={lightModeColors.lightgray}>
                Blog
            </Link>
        </StyledH2>
    </StyledHeader>
);
