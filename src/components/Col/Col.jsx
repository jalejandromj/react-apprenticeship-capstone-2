import React from 'react';

import styled from 'styled-components';

const ColDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 0 0 100%;
  padding: 10px 10px;

  /* HD STYLES MD */
  @media screen and (min-width: 1280px) and (max-width: 1365px) {
    flex: 0 0 ${props => (props.md/12)*100}%;
  }

  /* START 1366x768 (MOST COMMON) size LG */
  @media screen and (min-width: 1366px) and (max-width: 1919px) {
    flex: 0 0 ${props => (props.lg/12)*100}%;
  }

  /* FULL HD STYLES XL */
  @media screen and (min-width: 1920px) {
    flex: 0 0 ${props => (props.xl/12)*100}%;
  }
`;

function Col({children, md, lg, xl}) {
  return (
    <ColDiv md={md} lg={lg} xl={xl}>{children}</ColDiv>
  );
}

export default Col;
