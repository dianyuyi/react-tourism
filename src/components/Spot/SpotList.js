import React, { useRef, useState, useEffect } from "react";
import { Title, SpotObserver, Masonry, Modal } from "../../components";
import {
  SpotListContainer,
  SpotListNotice,
  SpotListSearchP,
  SpotListVoid,
} from "../../styles/scenic/spotlist";
import { useIntersectionObserver } from "../../hook/useIntersectionObserver";
import { useCityNameTrans } from "../../hook/useCityNameTrans";
import { useScrollFetch } from "../../hook/useScrollFetch";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../../context";
import { testData } from "../../data/testdata";

const SpotList = (props) => {
  // console.log(props);
  const { city } = useParams();

  const {
    searchText,
    isModalOpen,
    selectSpot,
    setIsModalOpen,
  } = useGlobalContext();

  const [cityParams, setCityParams] = useState(city);
  const [skipNums, setSkipNums] = useState(0);
  const [cityName, setCityName] = useCityNameTrans(cityParams);

  const loadRef = useRef(null);
  const [targetState, setTargetState] = useIntersectionObserver(loadRef, {
    threshold: 1,
  });
  const { loading, scenicSpot } = useScrollFetch(
    skipNums,
    searchText,
    cityParams
  );
  // tmp test
  // const scenicSpot = testData;
  // const loading = true;

  useEffect(() => {
    // console.log(targetState.inView);
    if (targetState.inView && window.scrollY < 100) {
      // console.log("ref act initial", skipNums);
    }
    if (targetState.inView && window.scrollY > 100) {
      let updateSkip = skipNums + 30;
      setSkipNums(updateSkip);
      // console.log("ref act below", updateSkip);
    }
  }, [targetState.inView]);

  return (
    <>
      <Title heading={cityName ? `${cityName}景點` : `全台景點`} />
      <SpotListContainer>
        {searchText ? (
          <SpotListNotice>
            <SpotListSearchP>目前搜尋的關鍵字： {searchText}</SpotListSearchP>
          </SpotListNotice>
        ) : null}
        {!scenicSpot ? (
          <SpotListNotice>
            <SpotListVoid>沒有可以顯示的景點。試試其他關鍵字？</SpotListVoid>
          </SpotListNotice>
        ) : null}
        <Masonry scenicSpot={scenicSpot} />
        <SpotObserver ref={loadRef} loading={loading} />
        <Modal
          isModalOpen={isModalOpen}
          selectSpot={selectSpot}
          setIsModalOpen={setIsModalOpen}
        />
      </SpotListContainer>
    </>
  );
};

export default SpotList;
