// typescript example
import styled from 'styled-components';
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

const Header = styled(GridChild)`
    line-height: 100px;
`;

const Main = styled(GridChild)`
    line-height: 300px;
`;

const Footer = styled(GridChild)`
    line-height: 100px;
`;

const SideBar = styled(GridChild)`
    line-height: 100px;
    @media screen and (min-width: 768px) {
        line-height: 300px;
    }
    @media screen and (min-width: 992px) {
        line-height: 100px;
    }
`;

export default () => (
  <PresentationGridLayout pageNumber={7}>
    <Grid>
      <Header gridArea="Header" backgroundColor="green">Header</Header>
      <SideBar gridArea="SideBar1" color="white" backgroundColor="purple">
        SideBar1
      </SideBar>
      <Main gridArea="Main">Main</Main>
      <SideBar gridArea="SideBar2" backgroundColor="red" color="white">
        SideBar2
      </SideBar>
      <Footer gridArea="Footer" backgroundColor="blue" color="white">Footer</Footer>
    </Grid>
  </PresentationGridLayout>
);
