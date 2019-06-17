import React from "react";
import { css } from "@emotion/core";
import { NextPreviousLinks } from "./next-previous-links";

type Props = {
    pageNumber: number;
    lastPage?: boolean;
}
export const PresentationGridLayout: React.FC<Props> = ({ children, pageNumber, lastPage }) => {
    const previous = pageNumber > 1
        ? `/blog/css-grid/${pageNumber - 1}/`
        : undefined;
    const next = !lastPage
        ? `/blog/css-grid/${pageNumber + 1}/`
        : undefined;

    return (
        <div css={css`display: grid; justify-content: center; text-align: center;`}>
            <h2>Page { pageNumber }</h2>
            <NextPreviousLinks next={next} previous={previous}> 
                { children }
            </NextPreviousLinks> 
        </div>
    )
};
