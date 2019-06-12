import React from "react";
import styled from "@emotion/styled";
import { NextPreviousLinks } from "../../../components";

const Grid = styled("div")`
    display: grid;    
    text-align: center;
    background-color: red;
    font-size: 24px;
    border: 1px solid black;
    grid-template-rows: 100px 100px 300px 100px 100px;
    grid-template-columns: 500px;
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
    <div css={{ display: "grid", justifyContent: "center" }}>
        <Grid>
            <Header>Header</Header>
            <SideBar1>SideBar1</SideBar1>
            <Main>Main</Main>
            <SideBar2>SideBar2</SideBar2>
            <Footer>Footer</Footer>
        </Grid>
        <pre>{code}</pre>
        <NextPreviousLinks previous="/blog/css-grid/2" next="/blog/css-grid/4" />
    </div>
);

const code =`
const Grid = styled("div")\`
    display: grid;    
    text-align: center;
    background-color: red;
    font-size: 24px;
    border: 1px solid black;
    grid-template-rows: 100px 100px 300px 100px 100px;
    grid-template-columns: 500px;
\`;

const Header = styled("div")\`
    background-color: green;
\`;

const SideBar1 = styled("div")\`
    background-color: purple;
    color: white;
\`;

const Main = styled("div")\`
    background-color: white;
\`;

const SideBar2 = styled("div")\`
    background-color: red;
    color: white;
\`;

const Footer = styled("div")\`
    background-color: blue;
    color: white;
\`;
`;