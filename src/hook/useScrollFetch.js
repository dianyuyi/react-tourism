import { useState, useEffect } from "react";
import axios from "axios";

export const useScrollFetch = (skipNums, searchText, city) => {
  const url = "https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot";
  const getStr = "&$top=30&$format=JSON";
  const skipStr = skipNums > 0 ? `&$skip=${skipNums}` : "";
  const cityStr = city ? `/${city}?` : "";
  const queryStr = city ? "" : `?`;
  const searchStr = searchText ? `&$filter=${searchText}` : "";
  const callUrl = `${url}${cityStr}${queryStr}${searchStr}${getStr}${skipStr}`;

  console.log(callUrl); // for check

  const [loading, setLoading] = useState(false);
  const [scenicSpot, setScenicSpot] = useState([]);

  const fetchSpots = () => {
    setLoading(true);
    try {
      axios
        .get(callUrl)
        .then((res) => {
          const data = res.data;
          const newScenicSpot = [...scenicSpot, ...data];
          setScenicSpot(newScenicSpot);
        })
        .catch(() => {
          setScenicSpot([]);
        });
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
