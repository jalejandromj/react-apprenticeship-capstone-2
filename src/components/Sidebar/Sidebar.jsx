import React from 'react';

import styled from 'styled-components';

import Col from '../Col';
import Row from '../Row';

const SidebarDiv = styled.div`
  grid-area: sidebar;
  background-color: rgb(var(--dark-blue) / 70%);
  color: rgb(var(--discreet-white));
  padding: 10% 2%;
`;

function Sidebar() {
  return (
    <SidebarDiv id="sidebar">
      <Row>
        <Col
          sm={12}
          className="sidebar-col"
        >
          <button className="sidebar-btn">On your date!</button> {{/*Input date*/}}
        </Col>
      </Row>
      <Row>
        <Col sm={12} className="sidebar-col">
          <button className="sidebar-btn">Feeling lucky...?</button> {{/*Random date*/}}
        </Col>
      </Row>
      <Row>
        <Col sm={12} className="sidebar-col">
          <button className="sidebar-btn">What happened on...?</button> {{/*Important dates*/}}
        </Col>
      </Row>
    </SidebarDiv>
  );
}

export default Sidebar;