import React from "react";
import { Link as GatsbyLink } from "gatsby";
import styled from "@emotion/styled";

type StyledLinkProps = {
    color?: string;
    hovercolor?: string;
};
const StyledLink = styled(GatsbyLink)<StyledLinkProps>`
    color: ${(props) => (props.color ? props.color : "white")};
    text-decoration: none;
`;

type Props = {
    to: string;
    color?: string;
    hovercolor?: string;
    className?: string;
};

export const Link: React.FC<Props> = ({
    to,
    children,
    color,
    hovercolor,
    className,
}) => (
    <StyledLink
        to={to}
        color={color}
        className={className}
        css={{
            "&:hover": {
                color: hovercolor ? hovercolor : "initial",
            },
        }}
    >
        {children}
    </StyledLink>
);
