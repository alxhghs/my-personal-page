import styled from "@emotion/styled";
import { breakPoints, lightModeColors } from "../theme";

export const MarkdownWrapper = styled("div")`
    margin-bottom: 64px;
    h4 {
        color: ${lightModeColors.black};
        font-style: italic;
        font-size: 14px;
    }
    blockquote {
        border-left: 5px solid ${lightModeColors.blue};
        margin: 10px;
        padding: 15px;
        color: ${lightModeColors.gray};
        line-height: 1.5;
        p {
            margin: 0;
        }
    }
    a {
        color: ${lightModeColors.blue};
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
    }
    .gatsby-highlight,
    pre,
    code {
        border-radius: 4px;
        font-size: 12px;
    }
    img.gif {
        border-radius: 4px;
    }
    img.gif {
        width: 100%;
        @media screen and (min-width: ${breakPoints[2]}) {
            width: 600px;
        }
    }
`;
