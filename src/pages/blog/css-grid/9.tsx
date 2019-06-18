import React from "react";
import styled from "@emotion/styled";
import { PresentationGridLayout } from "../../../components";

const Grid = styled("div")`
    display: grid;
    grid: auto / repeat(14, auto);
    @media screen and (min-width: 400px) {
        grid: repeat(14, auto) / auto;
        grid-auto-flow: column;
    }
    @media screen and (min-width: 525px) {
        grid: auto / repeat(14, auto);
        grid-auto-flow: row;
    }
    @media screen and (min-width: 650px) {
        grid: auto / repeat(16, auto);
    }
    @media screen and (min-width: 768px) {
        grid: auto / repeat(18, auto);
    }
    @media screen and (min-width: 992px) {
        grid: auto / repeat(26, auto);
    }
    @media screen and (min-width: 1260px) {
        grid: repeat(35, auto) / auto;
        grid-auto-flow: column;
    }
    border-radius: 20px;
    overflow: hidden;
`;

type Props = {
    backgroundColor?: string;
};
const GridChild = styled("div")<Props>`
    background-color: ${props => props.backgroundColor ? props.backgroundColor : "white"};
    height: 30px;
    width: 30px;
`;

const colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet",
];

const cards: React.ReactNode[] = [];

for (let i = 0; i < 700; i++) {
    cards[i] = (<GridChild backgroundColor={colors[i%colors.length]} />);
}

export default () => (
    <PresentationGridLayout pageNumber={9}>
        <Grid>
            {
                cards.map((card) => card)
            }
        </Grid>
    </PresentationGridLayout>
);
