import styled from "@emotion/styled";
import { colors } from "../constants";

export const MarkdownWrapper = styled("div")`
    h4 {
        color: ${colors.gray};
        font-style: italic;
        font-size: 14px;
    }
    blockquote {
        border-left: 5px solid ${colors.blue};
        margin: 10px;
        padding: 15px;
        color: ${colors.gray};
        line-height: 1.5;
        p {
            margin: 0;
        }
    }
    a {
        color: ${colors.blue};
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
    }
    .gatsby-highlight, pre, code {
        border-radius: 4px;
        font-size: 12px;
    }
`;
