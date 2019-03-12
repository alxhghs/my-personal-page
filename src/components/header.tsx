import React from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";
import { Link } from "../components";

const Animation = keyframes`
    0% {
        background-position: 10% 0%;
    }
    50% {
        background-position: 91% 100%;
    }
    100% {
        background-position: 10% 0%;
    }
`;

const StyledHeader = styled("header")`
    display: grid;
    grid-template-columns: auto auto;
    gap: 30px;
    background: linear-gradient(130deg, #000, #119);
    background-size: 200% 200%;
    justify-content: center;
    animation: ${Animation} 10s ease infinite;
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
