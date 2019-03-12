import React from "react";
import styled from "@emotion/styled";
import { Link } from "../components";

const StyledHeader = styled("header")`
    display: flex;
    background-color: #000;
    margin-bottom: 15px;
    justify-content: center;
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
