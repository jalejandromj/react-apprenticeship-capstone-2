import React from 'react';

import { useGeneralContext } from '../../state/GeneralContext';
import Col from '../Col';
import Button from '../Button';
import Row from '../Row';

import { SidebarNav } from './Sidebar.styles';

function Sidebar() {
  const { setDate } = useGeneralContext();

  return (
    <SidebarNav id="sidebar">
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
    </SidebarNav>
  );
}

export default Sidebar;