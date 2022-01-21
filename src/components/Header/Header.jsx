import React from 'react';

import styled from 'styled-components';

import Col from '../Col';
import Row from '../Row';

const HeaderDiv = styled.div`
  grid-area: header;
  background-color: rgba(var(--dark-blue));
  box-shadow: 0 9px 5px 0 rgb(0 0 0 / 55%);
  color: rgba(var(--discreet-white));
  & > div {
    position: relative;
    top: 15%;
    height: 70%;
  }
  & > div > div {
    display: flex;
    height: 100%;
  }
`;

function Header() {
  //const displaySidebar = true;

  return (
    <HeaderDiv id="header">
      <Row>
        <Col md={1} lg={1} xl={3} style={{ alignItems: 'center', justifyContent: 'center' }}>
          SVG
        </Col>
        <Col md={7} lg={9} xl={3} style={{ justifyContent: 'center' }}>
          Search bar
        </Col>
        <Col
          md={2} lg={1} xl={3}
          style={{ alignItems: 'center', justifyContent: 'center' }}
        >
          Button
        </Col>
        <Col
          md={2} lg={1} xl={3}
          style={{ alignItems: 'center', justifyContent: 'center' }}
        >
          Disp
        </Col>
      </Row>
    </HeaderDiv>
  );
}

export default Header;