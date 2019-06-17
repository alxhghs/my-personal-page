import React from "react";
import { NextPreviousLinks } from "./next-previous-links";
import styled from "@emotion/styled";

const Grid = styled("div")`
    display: grid;
    justify-content: center;
    text-align: center;
`;

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
        <Grid>
            <h2>Page { pageNumber }</h2>
            <NextPreviousLinks next={next} previous={previous}> 
                { children }
            </NextPreviousLinks> 
        </Grid>
    );
};
