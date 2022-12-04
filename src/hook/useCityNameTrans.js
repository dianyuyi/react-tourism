import { citys } from "../data/citys";
import { useEffect, useState } from "react";

export const useCityNameTrans = (cityParams) => {

  const [cityName, setCityName] = useState("");

  const getCityName = () => {
    if (cityParams) {
      const selectCity = citys.filter((city) => city.value === cityParams);
      setCityName(selectCity[0].name);
    } else {
      setCityName("");
    }
  };

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      getCityName();
    }
    return () => {
      isMounted = false;
    };
  }, [cityParams]);

  return [cityName, setCityName];
};
