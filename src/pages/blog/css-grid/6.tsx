// more media queries
import React from "react";
import styled from "@emotion/styled";
import { PresentationGridLayout } from "../../../components";

const Grid = styled("div")`
    display: grid;    
    text-align: center;
    font-size: 24px;
    border: 1px solid black;
    grid-template-rows: 100px 300px repeat(3, 100px);
    grid-template-columns: 300px;
    grid-template-areas: "Header"
                        "Main"
                        "SideBar1"
                        "SideBar2"
                        "Footer";
    @media screen and (min-width: 576px) {
        grid-template-rows: repeat(2, 100px) 300px repeat(2, 100px);
        grid-template-columns: 500px;
        grid-template-areas: "Header"
                            "SideBar1"
                            "Main"
                            "SideBar2"
                            "Footer";
    }
    @media screen and (min-width: 768px) {
        grid-template-rows: 100px 500px 100px;
        grid-template-columns: 200px 300px 200px;
        grid-template-areas: "Header Header Header"
                            "SideBar1 Main SideBar2"
                            "Footer Footer Footer";
    }
    @media screen and (min-width: 992px) {
        grid-template-columns: 450px 450px;
        grid-template-rows: 100px 100px 500px 100px;
        grid-template-areas: "Header Header"
                            "SideBar1 SideBar2"
                            "Main Main"
                            "Footer Footer";
    }
    @media screen and (min-width: 1260px) {
        grid-template-columns: 300px 600px 300px; 
        grid-template-rows: 100px 600px 100px;
        grid-template-areas: "SideBar1 Header SideBar2"
                            "Main Main Main"
                            "Footer Footer Footer";
    }
    border-radius: 20px;
    overflow: hidden;
`;

const Header = styled("div")`
    background-color: green;
    grid-area: Header;
    line-height: 100px;
`;

const SideBar1 = styled("div")`
    background-color: purple;
    color: white;
    grid-area: SideBar1;
    line-height: 100px;
    @media screen and (min-width: 768px) {
        line-height: 300px;
    }
    @media screen and (min-width: 992px) {
        line-height: 100px;
    }
`;

const Main = styled("div")`
    background-color: white;
    grid-area: Main;
    line-height: 300px;
`;

const SideBar2 = styled("div")`
    background-color: red;
    color: white;
    grid-area: SideBar2;
    line-height: 100px;
    @media screen and (min-width: 768px) {
        line-height: 300px;
    }
    @media screen and (min-width: 992px) {
        line-height: 100px;
    }
`;

const Footer = styled("div")`
    background-color: blue;
    color: white;
    grid-area: Footer;
    line-height: 100px;
`;

export default () => (
    <PresentationGridLayout pageNumber={6}>
        <Grid>
            <Header>Header</Header>
            <SideBar1>SideBar1</SideBar1>
            <Main>Main</Main>
            <SideBar2>SideBar2</SideBar2>
            <Footer>Footer</Footer>
        </Grid>
    </PresentationGridLayout>
);
