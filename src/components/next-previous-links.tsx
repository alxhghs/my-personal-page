import React from "react";
import { Link } from "gatsby";
import { css } from "@emotion/core";

type Props = {
    previous: string;
    next: string;
};

export const NextPreviousLinks: React.FC<Props> = ({ previous, next}) => (
    <div css={css`
        display: flex;
        justify-content: space-between; 
        text-align: center;
        width: 150px;
        height: 100px;
        line-height: 100px;
        margin: 0 auto;
    `}>
        <Link to={previous}>Previous</Link>
        <Link to={next}>Next</Link>
    </div>
);
