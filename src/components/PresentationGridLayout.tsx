import React from "react";
import styled from "styled-components";
import { NextPreviousLinks } from "./NextPreviousLinks";

const Grid = styled.div({
    display: "grid",
    justifyContent: "center",
    textAlign: "center",
});

type Props = {
    children: React.ReactNode;
    pageNumber: number;
    lastPage?: boolean;
};
export const PresentationGridLayout: React.FC<Props> = ({
    children,
    pageNumber,
    lastPage,
}) => {
    const previous =
        pageNumber > 1 ? `/blog/css-grid/${pageNumber - 1}/` : undefined;
    const next = !lastPage ? `/blog/css-grid/${pageNumber + 1}/` : undefined;

    return (
        <Grid>
            <h3>
                Page
                {pageNumber}
            </h3>
            <NextPreviousLinks next={next} previous={previous}>
                {children}
            </NextPreviousLinks>
        </Grid>
    );
};
