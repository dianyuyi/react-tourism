import React, { useState, useContext, useEffect, useCallback } from "react";

// import { getPTXAuthHeader } from "./lib/getPTXAuthHeader";
import { testData } from "./data/testdata";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [searchText, setSearchText] = useState("");

  return (
    <AppContext.Provider
      value={{
        searchText,
        setSearchText,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
