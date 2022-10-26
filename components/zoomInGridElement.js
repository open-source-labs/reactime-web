import React from 'react';
import PropTypes from 'prop-types';
// import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components';

const StyledMain = styled.div``;

const AnimatedGridElementLayout = ({ children }) => (
  <StyledMain
    data-sal="zoom-in"
    data-sal-delay="100"
    data-sal-duration="400"
    data-sal-easing="ease-out"
  >
    {children}
  </StyledMain>
);

AnimatedGridElementLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AnimatedGridElementLayout;
