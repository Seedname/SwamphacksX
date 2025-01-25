import { createContext, useEffect, useState } from "react";

export const AppContext = createContext(null);

const AppContextProvider = (props) => {
  
  const url = "http://localhost:5173/"

  const contextValue = {
    url
  }
  return (
    <AppContext.Provider value={contextValue}>
      {props.children}
    </AppContext.Provider>
  )
  
}
export default AppContextProvider;