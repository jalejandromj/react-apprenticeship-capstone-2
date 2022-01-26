import React from 'react';

import { useGeneralContext } from '../../state/GeneralContext';
import { getTodayDateYMD } from '../../utils/utils.js';
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
          >
          <Button onClick={() => setDate(getTodayDateYMD())}>Today</Button>
        </Col>
        <Col
          sm={12}
        >
          <Button onClick={() => setDate(null)}>On your date!</Button>
        </Col>
      </Row>
    </SidebarNav>
  );
}

export default Sidebar;