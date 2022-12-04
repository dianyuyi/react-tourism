import React, { useRef, useState, useEffect } from "react";
import { Title, SpotObserver, Masonry, Modal, Loading } from "../../components";
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

const SpotList = () => {
  const { city } = useParams();

  const {
    searchText,
    isModalOpen,
    selectSpot,
    setIsModalOpen,
    cookies,
  } = useGlobalContext();

  const [cityParams, setCityParams] = useState(city);
  const [skipNums, setSkipNums] = useState(0);
  const [cityName, setCityName] = useCityNameTrans(cityParams);
  const [loadingText, setLoadingText] = useState(true);

  const loadRef = useRef(null);
  const [targetState, setTargetState] = useIntersectionObserver(loadRef, {
    threshold: 1,
  });
  const { loading, scenicSpot } = useScrollFetch(
    skipNums,
    searchText,
    cityParams,
    cookies,
  );

  useEffect(() => {
    if (scenicSpot) {
      setTimeout(() => {
        setLoadingText(false);
      }, 1500);
    } else {
      setTimeout(() => {
        setLoadingText(true);
      }, 1500);
    }
  }, [scenicSpot]);

  useEffect(() => {
    if (targetState.inView && window.scrollY < 100) {
    }
    if (targetState.inView && window.scrollY > 100) {
      let updateSkip = skipNums + 30;
      setSkipNums(updateSkip);
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
        {scenicSpot.length === 0 && !loadingText ? (
          <SpotListNotice>
            <SpotListVoid>目前沒有可以顯示的景點⋯⋯</SpotListVoid>
          </SpotListNotice>
        ) : null}
        {/* <Loading loading={loadingt} /> */}
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
