import React from "react";
import { cityArea } from "../../data/cityArea";
import { SubContainer } from "../../styles/submenu/submenu";

const Submenu = () => {
  return (
    <SubContainer>
      <h1>123</h1>
      {cityArea.map((item) => {
        const { area, citys } = item;
        return (
          <div>
            <p>{area}</p>
            {/* <p>{citys}</p> */}
          </div>
        );
      })}
    </SubContainer>
  );
};

export default Submenu;
