/* eslint-disable react/jsx-filename-extension */
/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  padding: 2em;
  @media only screen and (max-height: 570px) {
    margin-top: 200px;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 1024px;
  height: 80vh;
  align-items: center;
`;

const StyledMain = styled.main`
  display: flex;
  @media only screen and (max-width: 720px) {
    flex-direction: column;
  }
  align-items: center;
`;

const Layout = ({ children }) => (
  <>
    <StyledWrapper>
      <StyledDiv>
        <StyledMain
          data-sal="fade"
          data-sal-delay="100"
          data-sal-duration="700"
          data-sal-easing="ease-out"
        >
          {children}
        </StyledMain>
      </StyledDiv>
    </StyledWrapper>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
