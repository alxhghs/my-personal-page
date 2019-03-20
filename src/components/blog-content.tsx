import React from "react";
import styled from "@emotion/styled";
import { colors } from "../constants";

const StyledBlogContent = styled("p")`
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
        color: ${colors.linkBlue};
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
    <StyledBlogContent dangerouslySetInnerHTML={{ __html: html }}></StyledBlogContent>
);
