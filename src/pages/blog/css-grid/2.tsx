import React from "react";
import styled from "@emotion/styled";
import { PresentationGridLayout } from "../../../components";

const Grid = styled("div")`
    display: grid;
    text-align: center;
    font-size: 24px;
    border: 1px solid black;
`;

const Header = styled("div")`
    background-color: green;
`;

const SideBar1 = styled("div")`
    background-color: purple;
    color: white;
`;

const Main = styled("div")`
    background-color: white;
`;

const SideBar2 = styled("div")`
    background-color: red;
    color: white;
`;

const Footer = styled("div")`
    background-color: blue;
    color: white;
`;

export default () => (
    <PresentationGridLayout pageNumber={2}>
        <Grid>
            <Header>Header</Header>
            <SideBar1>SideBar1</SideBar1>
            <Main>Main</Main>
            <SideBar2>SideBar2</SideBar2>
            <Footer>Footer</Footer>
        </Grid>
    </PresentationGridLayout>
);
