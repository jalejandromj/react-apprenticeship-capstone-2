import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Row from '../Row';
import Col from '../Col';
//import { ReactComponent as MenuSVG } from '../../assets/svg/menu.svg';
import './Layout.styles.css';

// eslint-disable-next-line react/prop-types
function Layout({ children }) {
  const navigate = useNavigate();
  const [displaySidebar, setDisplaySidebar] = useState(false);
  const checked = false;

  return (
    <div
      id="layout"
      className={displaySidebar ? `sidebar-display` : `sidebar-hidden`}
    >
      <div id="header" className={checked ? 'blue-theme' : 'discreet-theme'}>
        <div>
          <Row>
            <Col md={1} lg={2} xl={3} style={{ justifyContent: 'center' }}>
              <p
                className={checked ? 'blue-theme' : 'discreet-theme'}
                onClick={() => setDisplaySidebar(!displaySidebar)}
              >
                SVG
              </p>
            </Col>
            <Col md={7} lg={6} xl={3} style={{ alignItems: 'center' }}>
              Search bar
            </Col>
            <Col
              md={2} lg={2} xl={3}
              style={{ alignItems: 'center', justifyContent: 'center' }}
            >
              <button
                id="theme-selector"
                variant={`outline-secondary ${
                  checked ? 'blue-theme' : 'discreet-theme'
                }`}
                onClick={() => console.log('click')}
              ></button>
            </Col>
            <Col
              md={2} lg={2} xl={3}
              style={{ alignItems: 'center', justifyContent: 'center' }}
            >
              Disp
            </Col>
          </Row>
        </div>
      </div>
      {displaySidebar ? (
        <div id="sidebar" className={checked ? 'blue-theme' : 'discreet-theme'}>
          <div>
            <Row>
              <Col
                sm={12}
                className="sidebar-col"
                onClick={() => navigate.push(`/`)}
              >
                <button className="sidebar-btn">Home</button>
              </Col>
            </Row>
            {checked ? (
              <Row>
                <Col sm={12} className="sidebar-col">
                  <button
                    className="sidebar-btn"
                    onClick={() => navigate.push(`/favourites`)}
                  >
                    Favourites
                  </button>
                </Col>
              </Row>
            ) : null}
            <Row>
              <Col sm={12} className="sidebar-col">
                <button className="sidebar-btn">Music</button>
              </Col>
            </Row>
            <Row>
              <Col sm={12} className="sidebar-col">
                <button className="sidebar-btn">Sports</button>
              </Col>
            </Row>
          </div>
        </div>
      ) : null}
      <main
        className={`main-container ${
          checked ? 'blue-theme' : 'discreet-theme'
        }`}
      >
        {children}
      </main>
    </div>
  );
}

export default Layout;
