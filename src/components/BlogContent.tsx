import React from "react";
import styled from "@emotion/styled";
import { Colors, useTheme } from "../theme/ThemeProvider";

const StyledBlogContent = styled.div<Colors>(({ colors }) => ({
    lineHeight: 1.5,
    maxWidth: "calc(100vw - 30px)",
    color: colors.text,
    h4: {
        fontStyle: "italic",
        fontSize: 14,
    },
    blockquote: {
        borderLeft: `5px solid ${colors.blockQuoteBorder}`,
        margin: 10,
        padding: 15,
        lineHeight: 1.5,
        p: {
            margin: 0,
        },
    },
    a: {
        color: colors.link,
        textDecoration: "none",
        "&:hover": {
            textDecoration: "underline",
        },
    },
}));

type Props = {
    html: string;
};

export const BlogContent: React.FC<Props> = ({ html }) => {
    const { colors } = useTheme();
    console.log("colors", colors);
    return (
        <StyledBlogContent
            dangerouslySetInnerHTML={{ __html: html }}
            colors={colors}
        />
    );
};
