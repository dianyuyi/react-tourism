import React, { useState, useContext, useEffect, useCallback } from "react";
import { useCookies } from 'react-cookie';

import { testData } from "./data/testdata";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [searchText, setSearchText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectSpot, setSelectSpot] = useState({});

  const [cookies, setCookie] = useCookies(['TDX_TOKEN']);


  return (
    <AppContext.Provider
      value={{
        searchText,
        setSearchText,
        isModalOpen,
        setIsModalOpen,
        selectSpot,
        setSelectSpot,
        cookies,
        setCookie
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
