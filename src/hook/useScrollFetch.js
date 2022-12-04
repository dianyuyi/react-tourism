import { useState, useEffect } from "react";
import axios from "axios";
import getTDXAuthHeader from "../lib/getTDXAuthHeader";

export const useScrollFetch = (skipNums, searchText, city, cookies) => {
  const url = "https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot";
  const getStr = "&$top=30&$format=JSON";
  const skipStr = skipNums > 0 ? `&$skip=${skipNums}` : "";
  const cityStr = city ? `/${city}?` : "";
  const queryStr = city ? "" : `?`;
  const searchStr = searchText
    ? `&$filter=contains(DescriptionDetail,'${searchText}')`
    : "";
  const callUrl =
    `${url}${cityStr}${queryStr}${searchStr}${getStr}${skipStr}` +
    "";

  const [loading, setLoading] = useState(false);
  const [scenicSpot, setScenicSpot] = useState([]);

  const fetchSpots = async () => {
    const accessToken = await getTDXAuthHeader(cookies);

    setLoading(true);
    try {
      axios
        .get(callUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`
          },
          responseType: "json",
        })
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
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSpots();
  }, [callUrl]);

  return { loading, scenicSpot };
};
