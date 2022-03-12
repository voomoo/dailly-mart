import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function ContextWrapper({ children }) {
  const [cart, setCart] = useState([])

  return (
    <AppContext.Provider value={{cart, setCart}}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}