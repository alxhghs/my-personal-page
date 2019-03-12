import React from "react";
import { Link as GatsbyLink } from "gatsby";
import styled from "@emotion/styled";

const StyledLink = styled(GatsbyLink)`
    color: white;
    text-decoration: none;
    padding: 0 10px;
`;

type Props = {
    to: string;
};

export const Link: React.FC<Props> = ({ to, children }) => (
    <StyledLink to={to}>
        { children }
    </StyledLink>
);
