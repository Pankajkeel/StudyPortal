import { createContext, useContext, useState, useMemo } from 'react';

const AppContext = createContext();

export function AppWrapper({ children }) {
    const [activeComponents, setActiveComponent] = useState([]);
    const dataVal = useMemo(()=>{
        return {
            setActiveComponent,
            activeComponents
        }
    },[activeComponents])

    return (
      <AppContext.Provider value={dataVal}>
        {children}
      </AppContext.Provider>
    );
  }
  
  export function useAppContext() {
    return useContext(AppContext);
  }