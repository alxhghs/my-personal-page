import styled from 'styled-components';
import { PresentationGridLayout } from '../../../components';

const Grid = styled('div')`
    display: grid;    
    text-align: center;
    background-color: yellow;
    font-size: 24px;
    border: 1px solid black;
    border-radius: 20px;
    overflow: hidden;
    gap: 9px;
    grid:   "Header"   100px
            "Main"     300px
            "SideBar1" 100px
            "SideBar2" 100px
            "Footer"   100px
            / 300px;
    @media screen and (min-width: 576px) {
        grid:   "Header"   100px
                "SideBar1" 100px
                "Main"     300px
                "SideBar2" 100px
                "Footer"   100px
                / 500px;
    }
    @media screen and (min-width: 768px) {
        grid:   "Header   Header Header"   100px
                "SideBar1 Main   SideBar2" 500px
                "Footer   Footer Footer"   100px
                / 200px   300px  200px;
    }
    @media screen and (min-width: 992px) {
        grid:   "Header   Header"   100px
                "SideBar1 SideBar2" 100px
                "Main     Main"     500px
                "Footer   Footer"   100px
                / 450px   450px;
    }
    @media screen and (min-width: 1260px) {
        grid:   "SideBar1 Header SideBar2" 100px
                "Main     Main   Main"     600px
                "Footer   Footer Footer"   100px
                / 300px   600px  300px;
    }
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
  <PresentationGridLayout pageNumber={1}>
    <Grid>
      <Header gridArea="Header" backgroundColor="green">Header</Header>
      <SideBar gridArea="SideBar1" backgroundColor="purple" color="white">
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
