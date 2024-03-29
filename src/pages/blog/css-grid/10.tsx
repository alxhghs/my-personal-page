import React from 'react';
import styled from '@emotion/styled';
import { useStaticQuery, graphql } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';
import { PresentationGridLayout } from '../../../components';

const Grid = styled('div')`
    display: grid;
    border-radius: 20px;
    overflow: hidden;
    grid: 300px / 300px;
    @media screen and (min-width: 576px) {
        grid: 500px / 500px;
    }
`;

type KeanuPictureQuery = {
    file: {
        childImageSharp: {
            fluid: FluidObject
        }
    }
};

export default () => {
  const { file }: KeanuPictureQuery = useStaticQuery(
    graphql`
            query { 
                file(relativePath: { eq: "keanu.png" }) {
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid  
                        }
                    }
                }
            }
        `,
  );

  return (
    <PresentationGridLayout pageNumber={10}>
      <Grid>
        <Img fluid={file && file.childImageSharp && file.childImageSharp.fluid} />
      </Grid>
    </PresentationGridLayout>
  );
};
