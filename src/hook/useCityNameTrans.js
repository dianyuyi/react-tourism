import { city } from "../data/citys";
import { useEffect, useState } from "react";

export const useCityNameTrans = (en) => {
  const [cityName, setCityName] = useState("");
  for (city of city) {
    if (city.value === en) {
      setCityName(city.name);
    }
  }

  return [cityName, setCityName];
};
