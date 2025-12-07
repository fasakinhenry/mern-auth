import { createContext } from 'react';

export const AppContent = createContext();

export const AppContextProvider = (props) => {
  const value = {};
  return (
    <AppContextProvider value={value}>{props.children}</AppContextProvider>
  );
};
