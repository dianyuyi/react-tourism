import { useState, useEffect } from "react";

export const useScrollFetch = (skipNums, searchText, city) => {
  const url = "https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?";
  const callStr = "&$top=30&$format=JSON";
  const skipStr = skipNums > 0 ? `&$skip=${skipNums}` : "";
  const cityStr = city ? `${city}/` : "";
  const searchStr = searchText ? `&$filter=${searchText}` : "";
  const callUrl = `${url}${cityStr}${searchStr}${callStr}${skipStr}`;

  const [loading, setLoading] = useState(false);
  const [scenicSpot, setScenicSpot] = useState([]);

  const fetchSpots = async () => {
    setLoading(true);
    try {
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
  };

  useEffect(() => {
    fetchSpots();
  }, [callUrl]);

  return { loading, scenicSpot };
};
