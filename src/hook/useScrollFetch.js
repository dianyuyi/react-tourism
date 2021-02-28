import { useState, useEffect } from "react";
import axios from "axios";


export const useScrollFetch = (skipNums, searchText, city) => {
  const url = "https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?";
  const callStr = "&$top=30&$format=JSON";
  const skipStr = skipNums > 0 ? `&$skip=${skipNums}` : "";
  const cityStr = city ? `${city}/` : "";
  const searchStr = searchText ? `&$filter=${searchText}` : "";
  const callUrl = `${url}${cityStr}${searchStr}${callStr}${skipStr}`;

  const [loading, setLoading] = useState(false);
  const [scenicSpot, setScenicSpot] = useState([]);

  const fetchSpots = () => {
    setLoading(true);
    try {
      axios
        .get(callUrl)
        .then((res) => {
          console.log(res)
          const data = await response.json();
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