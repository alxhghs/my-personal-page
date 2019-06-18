import React from "react";
import { Link } from "gatsby";
import { css } from "@emotion/core";

type Props = {
    previous?: string;
    next?: string;
};
export const NextPreviousLinks: React.FC<Props> = ({ previous, next, children }) => (
    <>
        <NextPreviousLink previous={previous} next={next}/>
        { children }
    </>
);

const NextPreviousLink: React.FC<Props> = ({ previous, next }) => (
    <div css={css`
        display: flex;
        justify-content: ${previous && next ? "space-between" : "center"}; 
        text-align: center;
        width: 150px;
        line-height: 50px;
        margin: 0 auto;
    `}>
        { previous && <Link to={previous}>Previous</Link> }
        { next && <Link to={next}>Next</Link> }
    </div>
);
