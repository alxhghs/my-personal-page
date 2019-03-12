import React from "react";
import { Link as GatsbyLink } from "gatsby";
import styled from "@emotion/styled";

type StyledLinkProps = {
    color?: string;
    hoverColor?: string;
}
const StyledLink = styled(GatsbyLink)<StyledLinkProps>`
    color: ${props => props.color ? props.color : "white"};
    text-decoration: none;
    &:hover {
        color: ${props => props.hoverColor ? props.hoverColor : "intial"}
    }
`;

type Props = {
    to: string;
    color?: string;
    hoverColor?: string;
};

export const Link: React.FC<Props> = ({ to, children, color, hoverColor }) => (
    <StyledLink to={to} color={color} hoverColor={hoverColor}>
        { children }
    </StyledLink>
);
