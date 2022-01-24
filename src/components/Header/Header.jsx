import React from 'react';

import { useGeneralContext } from '../../state/GeneralContext';
import Col from '../Col';
import Row from '../Row';
import { HeaderNav } from './Header.styles';

function Header() {
  const { displaySidebar, setDisplaySidebar } = useGeneralContext();

  return (
    <HeaderNav id="header">
      <Row>
        <Col md={1} lg={1} xl={3} style={{ alignItems: 'center', justifyContent: 'center' }}>
          <div onClick={() => setDisplaySidebar(!displaySidebar)}>TestBtn</div>
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
    </HeaderNav>
  );
}

export default Header;