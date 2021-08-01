import React from 'react';
import styled from '@emotion/styled';
import { PresentationGridLayout } from '../../../components';

const Grid = styled('div')`
    display: grid;
    font-size: 24px;
`;

export default () => (
  <PresentationGridLayout pageNumber={11} lastPage>
    <Grid>
      A Complete Guide to CSS Grid
      <br />
      <br />
      <a href="https://css-tricks.com/snippets/css/complete-guide-grid/">
        https://css-tricks.com/snippets/css/complete-guide-grid/
      </a>
      <br />
      Thank you!
    </Grid>
  </PresentationGridLayout>
);
