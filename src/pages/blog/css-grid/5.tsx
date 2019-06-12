import React from "react";
import styled from "@emotion/styled";
import { NextPreviousLinks } from "../../../components";
import { STATUS_CODES } from "http";

const Grid = styled("div")`
    display: grid;    
    text-align: center;
    background-color: red;
    font-size: 24px;
    border: 1px solid black;
    grid-template-rows: 100px 100px 300px 100px 100px;
    grid-template-columns: 500px;
    grid-template-areas: "Header"
                        "SideBar1"
                        "Main"
                        "SideBar2"
                        "Footer";
    @media screen and (min-width: 768px) {
        grid-template-rows: 100px 500px 100px;
        grid-template-columns: 200px 300px 200px;
        grid-template-areas: "Header Header Header"
                            "SideBar1 Main SideBar2"
                            "Footer Footer Footer";
    }
`;

const Header = styled("div")`
    background-color: green;
    grid-area: Header;
`;

const SideBar1 = styled("div")`
    background-color: purple;
    color: white;
    grid-area: SideBar1;
`;

const Main = styled("div")`
    background-color: white;
    grid-area: Main;
`;

const SideBar2 = styled("div")`
    background-color: red;
    color: white;
    grid-area: SideBar2;
`;

const Footer = styled("div")`
    background-color: blue;
    color: white;
    grid-area: Footer;
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
        <NextPreviousLinks previous="/blog/css-grid/4" next="/blog/css-grid/6" />
    </div>
);

const code = `
    const Grid = styled("div")\`
        display: grid;    
        text-align: center;
        background-color: red;
        font-size: 24px;
        border: 1px solid black;
        grid-template-rows: 100px 100px 300px 100px 100px;
        grid-template-columns: 500px;
        grid-template-areas: "Header"
                            "SideBar1"
                            "Main"
                            "SideBar2"
                            "Footer";
        @media screen and (min-width: 768px) {
            grid-template-rows: 100px 500px 100px;
            grid-template-columns: 200px 300px 200px;
            grid-template-areas: "Header Header Header"
                                "SideBar1 Main SideBar2"
                                "Footer Footer Footer";
        }
    \`;

    const Header = styled("div")\`
        background-color: green;
        grid-area: Header;
    \`;

    const SideBar1 = styled("div")\`
        background-color: purple;
        color: white;
        grid-area: SideBar1;
    \`;

    const Main = styled("div")\`
        background-color: white;
        grid-area: Main;
    \`;

    const SideBar2 = styled("div")\`
        background-color: red;
        color: white;
        grid-area: SideBar2;
    \`;

    const Footer = styled("div")\`
        background-color: blue;
        color: white;
        grid-area: Footer;
    \`;
`;
