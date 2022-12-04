import React, { useState, useContext, useEffect, useCallback } from "react";
import Cookies from 'universal-cookie';

import { testData } from "./data/testdata";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [searchText, setSearchText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectSpot, setSelectSpot] = useState({});

  const cookies = new Cookies();

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
