import React, { useState } from 'react';

export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [dark, setDark] = useState(false);

  return (
    <AppContext.Provider value={{ dark, setDark }}>
      {children}
    </AppContext.Provider>
  );
};
