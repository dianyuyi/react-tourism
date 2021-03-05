import React, { useRef, useEffect } from "react";
import { SubFolderSec, SubFolderSecItem } from "../../styles/submenu/submenu";

const SecFolderItem = ({ areaData, isOpen, areaPos, setIsSubmenuOpen }) => {
  const secContainer = useRef(null);
  const { citys } = areaData;

  return (
    <>
      {citys ? (
        <SubFolderSec ref={secContainer} isOpen={isOpen} areaPos={areaPos}>
          {citys.map((city, index) => {
            return (
              <SubFolderSecItem
                onClick={() => setIsSubmenuOpen(false)}
                key={city.value}
                to={`/scenicSpot/${city.value}`}
              >
                {city.name}
              </SubFolderSecItem>
            );
          })}
        </SubFolderSec>
      ) : null}
    </>
  );
};

export default SecFolderItem;
