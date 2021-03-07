import { useState, useEffect } from "react";
import axios from "axios";
import getPTXAuthHeader from "../lib/getPTXAuthHeader";

export const useScrollFetch = (skipNums, searchText, city) => {
  const proxyUrl = "https://cors.io/";
  // const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  const url = "https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot";
  const getStr = "&$top=30&$format=JSON";
  const skipStr = skipNums > 0 ? `&$skip=${skipNums}` : "";
  const cityStr = city ? `/${city}?` : "";
  const queryStr = city ? "" : `?`;
  const searchStr = searchText
    ? `&$filter=contains(DescriptionDetail,'${searchText}')`
    : "";
  const callUrl =
    `${proxyUrl}${url}${cityStr}${queryStr}${searchStr}${getStr}${skipStr}` +
    "";

  console.log(callUrl); // for check

  const [loading, setLoading] = useState(false);
  const [scenicSpot, setScenicSpot] = useState([]);

  const fetchSpots = async () => {
    setLoading(true);
    try {
      axios
        .get(callUrl, {
          headers: getPTXAuthHeader(),
          responseType: "json",
        })
        .then((res) => {
          // console.log(res);
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
