import { citys } from "../data/citys";
import { useEffect, useState } from "react";

export const useCityNameTrans = (cityParams) => {
  // console.log(typeof cityParams, "hook 1");

  const [cityName, setCityName] = useState("");

  const getCityName = () => {
    if (cityParams) {
      const selectCity = citys.filter((city) => city.value === cityParams);
      console.log(selectCity[0].name);
      setCityName(selectCity[0].name);
    } else {
      setCityName("");
    }

    // for (const city of citys) {
    //   if (city.value === cityParams) {
    //     setCityName(city.name);
    //     break;
    //   } else {
    //     setCityName("");
    //   }
    // }
  };

  useEffect(() => {
    getCityName();
  }, [cityParams]);

  return [cityName, setCityName];
};
