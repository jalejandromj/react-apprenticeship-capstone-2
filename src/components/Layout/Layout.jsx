import React from 'react';

import styled from 'styled-components';

import { useGeneralContext } from '../../state/GeneralContext';
import Header from '../Header';
import Sidebar from '../Sidebar';

const LayoutDiv = styled.div`
  display: grid;
  grid-template-rows: 10% 90%;
  -ms-grid-rows: 10% 90%;
  width: 100vw;
  height: 100vh;
  &.sidebar-display {
    grid-template-columns: 15% auto;
    -ms-grid-columns: 15% auto;
    grid-template-areas:
      "header header"
      "sidebar container";
  }
  &.sidebar-hidden {
    grid-template-columns: 100%;
    -ms-grid-columns: 100%;
    grid-template-areas:
      "header"
      "container";
  }
`;

const MainContainer = styled.div`
  display: flex;
  grid-area: container;
  background-color: rgb(var(--discreet-white));
  height: 100%;
  width: 100%;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 3% 2%;
  overflow-y: scroll;
`;

function Layout({ children }) {
  const { displaySidebar } = useGeneralContext();

  return (
    <LayoutDiv
      id="layout"
      className={displaySidebar ? `sidebar-display` : `sidebar-hidden`}
    >
      <Header/>

      {displaySidebar ? (
        <Sidebar/>
      ) : null}

      <MainContainer id="main-container">
        {children}
      </MainContainer>
    </LayoutDiv>
  );
}

export default Layout;
