// typescript example
import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { PresentationGridLayout } from '../../../components';

const Grid = styled('div')`
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

type Props = {
    gridArea: string;
    color?: string;
    backgroundColor?: string;
};
const GridChild = styled('div')<Props>`
    grid-area: ${(props) => props.gridArea};
    color: ${(props) => (props.color ? props.color : 'black')};
    background-color: ${(props) => (props.backgroundColor ? props.backgroundColor : 'white')};
`;

export default () => (
  <PresentationGridLayout pageNumber={7}>
    <Grid>
      <GridChild
        gridArea="Header"
        backgroundColor="green"
        css={css`line-height: 100px`}
      >
        Header
      </GridChild>
      <GridChild
        gridArea="SideBar1"
        color="white"
        backgroundColor="purple"
        css={css`
                    line-height: 100px;
                    @media screen and (min-width: 768px) {
                        line-height: 300px;
                    }
                    @media screen and (min-width: 992px) {
                        line-height: 100px;
                    }`}
      >
        SideBar1
      </GridChild>
      <GridChild
        gridArea="Main"
        css={css`line-height: 300px`}
      >
        Main
      </GridChild>
      <GridChild
        gridArea="SideBar2"
        backgroundColor="red"
        color="white"
        css={css`
                    line-height: 100px;
                    @media screen and (min-width: 768px) {
                        line-height: 300px;
                    }
                    @media screen and (min-width: 992px) {
                        line-height: 100px;
                    }`}
      >
        SideBar2
      </GridChild>
      <GridChild
        gridArea="Footer"
        backgroundColor="blue"
        color="white"
        css={css`line-height: 100px`}
      >
        Footer
      </GridChild>
    </Grid>
  </PresentationGridLayout>
);
