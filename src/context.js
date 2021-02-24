import React, { useState, useContext, useEffect, useCallback } from "react";

// import { getPTXAuthHeader } from "./lib/getPTXAuthHeader";
import { testData } from "./data/testdata";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [scenicSpot, setScenicSpot] = useState([]);
  // const [scenicSpot, setScenicSpot] = useState(testData); // test
  const [cityName, setCityName] = useState("");
  const [cityEn, setCityEn] = useState("");
  const [skipNums, setSkipNums] = useState(0);

  const url = "https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?";

  const fetchSpots = useCallback(async () => {
    setLoading(true);
    try {
      const callStr = "&$top=30&$format=JSON";
      const skipStr = skipNums > 0 ? `&$skip=${skipNums}` : "";
      const cityStr = cityEn ? `${cityEn}/` : "";
      const searchStr = searchText ? `&$filter=${searchText}` : "";
      const callUrl = `${url}${cityStr}${searchStr}${callStr}${skipStr}`;

      const response = await fetch(callUrl);
      console.log(response);
      const data = await response.json();
      console.log(data);
      if (data) {
        const newScenicSpot = [...scenicSpot, ...data];
        setScenicSpot(newScenicSpot);
      } else {
        setScenicSpot([]);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      throw new Error(error);
    }
  }, [searchText, cityEn, skipNums]);

  // useEffect(() => {
  //   fetchSpots();
  // }, [searchText, cityEn, skipNums, fetchSpots]);

  // useEffect(() => {
  //   setSkipNums(0);
  //   setScenicSpot([]);
  //   console.log(cityName,cityEn, skipNums, "cnt test");
  // }, [searchText, cityEn]);

  return (
    <AppContext.Provider
      value={{
        loading,
        setLoading,
        searchText,
        setSearchText,
        scenicSpot,
        skipNums,
        setSkipNums,
        cityName,
        setCityName,
        cityEn,
        setCityEn,
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
