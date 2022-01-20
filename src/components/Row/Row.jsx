import React from 'react';

import styled from 'styled-components';

const RowDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

function Row({children}) {
  return (
    <RowDiv>{children}</RowDiv>
  );
}

export default Row;
