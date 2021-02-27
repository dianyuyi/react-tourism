import { city } from "../data/citys";
import { useEffect, useState } from "react";

export const useCityNameTrans = (en) => {
  let transName = "";
  for (city of city) {
    if (city.value === en) {
      transName = city.name;
    }
  }

  return transName;
};
