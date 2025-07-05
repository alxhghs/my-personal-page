import React from "react";
import Link from "next/link";
import styled from "@emotion/styled";

type StyledLinkProps = {
    color?: string;
    hovercolor?: string;
};
const StyledLink = styled.a<StyledLinkProps>`
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
    <Link href={to} passHref>
        <StyledLink
            color={color}
            className={className}
            css={{
                "&:hover": {
                    color: hovercolor || "initial",
                },
            }}
        >
            {children}
        </StyledLink>
    </Link>
);
