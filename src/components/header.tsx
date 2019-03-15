import React from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";
import { Link } from "../components";

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
    grid-template-columns: auto auto;
    gap: 30px;
    background: linear-gradient(124deg, #ff2400, #e81d1d, #e8b71d, #e3e81d, #1de840, #1ddde8, #2b1de8, #dd00f3, #dd00f3);
    background-size: 1800% 1800%;
    justify-content: center;
    animation: ${Animation} 45s ease infinite;
    text-shadow: 0 0 3px #000;
`;

export const Header: React.FC = () => (
    <StyledHeader>
        <h2>
            <Link to="/" hoverColor="#d3d3d3">
                Home
            </Link>
        </h2>
        <h2>
            <Link to="/posts" hoverColor="lightgray">
                Posts
            </Link>
        </h2>
    </StyledHeader>
);
