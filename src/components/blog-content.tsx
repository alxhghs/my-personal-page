import React from "react";
import styled from "@emotion/styled";
import { lightModeColors } from "../theme";

const StyledBlogContent = styled("div")`
    line-height: 1.5;
    max-width: calc(100vw - 30px);
    h4 {
        color: ${lightModeColors.black};
        font-style: italic;
        font-size: 14px;
    }
    blockquote {
        border-left: 5px solid ${lightModeColors.blue};
        margin: 10px;
        padding: 15px;
        color: ${lightModeColors.black};
        line-height: 1.5;
        p {
            margin: 0;
        }
    }
    a {
        color: ${lightModeColors.linkBlue};
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
    }
`;

type Props = {
    html: string;
};

export const BlogContent: React.FC<Props> = ({ html }) => (
    <StyledBlogContent
        dangerouslySetInnerHTML={{ __html: html }}
    ></StyledBlogContent>
);
