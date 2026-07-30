import styled from "styled-components";
import { PresentationGridLayout } from "../../../components";
import keanu from "../../../images/keanu.png";

const Grid = styled("div")`
  display: grid;
  border-radius: 20px;
  overflow: hidden;
  grid: 300px / 300px;
  @media screen and (min-width: 576px) {
    grid: 500px / 500px;
  }
`;

export default () => (
  <PresentationGridLayout pageNumber={10}>
    <Grid>
      <img
        src={keanu}
        alt="Keanu Reeves"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </Grid>
  </PresentationGridLayout>
);
