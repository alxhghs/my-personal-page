import styled from "@emotion/styled";
import { breakpoints, Colors, useTheme } from "../theme";

const StyledMarkdown = styled.div<Colors>(({ colors }) => ({
    display: "grid",
    justifyContent: "center",
    alignContent: "center",
    height: "100%",
    padding: "0 15px",
    gridTemplateColumns: "auto",
    [`@media screen and (min-width: ${breakpoints[4]})`]: {
        gridTemplateColumns: "900px",
    },
    marginBottom: 64,
    h4: {
        color: colors.lightText,
        fontStyle: "italic",
        fontSize: 14,
    },
    blockquote: {
        borderLeft: `5px solid ${colors.blockQuoteBorder}`,
        margin: 10,
        padding: 15,
        color: colors.lightText,
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
    ".gatsby-highlight, pre, code": {
        borderRadius: 4,
        fontSize: 12,
    },
    "img.gif": {
        borderRadius: 4,
        width: "100%",
        [`@media screen and (min-width: ${breakpoints[2]})`]: {
            width: 600,
        },
    },
}));

export const MarkdownWrapper: React.FC = ({ children }) => {
    const { colors } = useTheme();
    return <StyledMarkdown colors={colors}>{children} </StyledMarkdown>;
};
