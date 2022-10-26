/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { useStaticQuery, graphql } from 'next';
import Img from 'next/image';
import styled from 'styled-components';

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const StyledImage = styled(Img)`
  min-width: 200px;
`;

const DemoImage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "MyMovie.gif" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return <StyledImage fluid={data.placeholderImage.childImageSharp.fluid} />;
};

export default DemoImage;