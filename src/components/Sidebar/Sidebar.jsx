import React from 'react';

import styled from 'styled-components';

import { useGeneralContext } from '../../state/GeneralContext';
import Col from '../Col';
import Button from '../Button';
import Row from '../Row';

const SidebarDiv = styled.nav`
  grid-area: sidebar;
  background-color: rgb(var(--dark-blue) / 70%);
  color: rgb(var(--discreet-white));
  padding: 10% 2%;
`;

function Sidebar() {
  const { setDate } = useGeneralContext();

  return (
    <SidebarDiv id="sidebar">
      <Row>
        <Col
          sm={12}
          className="sidebar-col"
        >
          <Button onClick={() => setDate(null)}>On your date!</Button>
        </Col>
      </Row>
      <Row>
        <Col sm={12} className="sidebar-col">
          <Button >Feeling lucky?</Button>
        </Col>
      </Row>
    </SidebarDiv>
  );
}

export default Sidebar;