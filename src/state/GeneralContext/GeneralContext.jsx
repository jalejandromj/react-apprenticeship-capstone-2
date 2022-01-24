import React, { useState, useContext } from 'react';

const GeneralContext = React.createContext(null);

function useGeneralContext() {
  const context = useContext(GeneralContext);
  if (!context) {
    throw new Error(`Can't use "useGeneralContext" without an GeneralContextProvider!`);
  }
  return context;
}

function GeneralContextProvider({ children }) {
  const today = new Date();
  const dateString= ""+today.getFullYear()+"-"+(today.getMonth()+1).toString().padStart(2,0)+"-"+today.getDate()+"";
  const [date, setDate] = useState(dateString); //initially load today's date...
  const [displaySidebar, setDisplaySidebar] = useState(true);

  return (
    <GeneralContext.Provider value={{ date, setDate, displaySidebar, setDisplaySidebar }}>
      {children}
    </GeneralContext.Provider>
  );
}

export { useGeneralContext };
export default GeneralContextProvider;