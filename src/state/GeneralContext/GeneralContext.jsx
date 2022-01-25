import React, { useState, useContext } from 'react';

import { getTodayDateYMD } from '../../utils/utils.js';

const GeneralContext = React.createContext(null);

function useGeneralContext() {
  const context = useContext(GeneralContext);
  if (!context) {
    throw new Error(`Can't use "useGeneralContext" without an GeneralContextProvider!`);
  }
  return context;
}

function GeneralContextProvider({ children }) {
  const today = getTodayDateYMD();
  const [date, setDate] = useState(today); //initially load today's date...
  const [displaySidebar, setDisplaySidebar] = useState(true);

  return (
    <GeneralContext.Provider value={{ date, setDate, displaySidebar, setDisplaySidebar }}>
      {children}
    </GeneralContext.Provider>
  );
}

export { useGeneralContext };
export default GeneralContextProvider;