import React from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";
import { Link } from "../components";
import { Page } from "gatsby";
import { Colors, useTheme } from "../theme/ThemeProvider";
import { ThemeToggle } from "../components/ThemeToggle";

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

const StyledHeader = styled.header<Colors>(({ colors }) => ({
    display: "grid",
    gridTemplateColumns: "repeat(2, auto)",
    gap: 32,
    color: colors.headerText,
    background: `linear-gradient(
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
    )`,
    backgroundSize: "1800% 1800%",
    justifyContent: "center",
    animation: `${Animation} 90s ease infinite`,
    textShadow: `0 0 3px ${colors.textShadow}`,
    position: "relative",
}));

const StyledH2 = styled.h2<{ underline: boolean }>((props) => ({
    textDecoration: props.underline ? "underline" : undefined,
}));

type Props = {
    path: Page["path"];
};

export const Header: React.FC<Props> = ({ path }) => {
    const { colors } = useTheme();

    return (
        <StyledHeader colors={colors}>
            <StyledH2 underline={path === "/" || path === ""}>
                <Link
                    color={colors.headerText}
                    to="/"
                    hovercolor={colors.headerHoverText}
                >
                    Home
                </Link>
            </StyledH2>
            <StyledH2 underline={path.includes("blog")}>
                <Link
                    color={colors.headerText}
                    to="/blog"
                    hovercolor={colors.headerHoverText}
                >
                    Blog
                </Link>
            </StyledH2>
            <ThemeToggle />
        </StyledHeader>
    );
};
