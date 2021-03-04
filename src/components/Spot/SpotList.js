import React, { useRef, useState, useEffect, memo } from "react";
import { Spot, Title, SpotObserver } from "../../components";
import { SpotListContainer } from "../../styles/scenic/spotlist";
import { FixedSizeGrid as Grid } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import { useIntersectionObserver } from "../../hook/useIntersectionObserver";
import { useCityNameTrans } from "../../hook/useCityNameTrans";
import { useScrollFetch } from "../../hook/useScrollFetch";
import { useParams } from "react-router-dom";
// import { testData } from "../../data/testdata";
import noImage from "../../assets/imgs/noImage2.png";
import OverviewListContainer from "./Masonry/OverviewListContainer.jsx";

const SpotList = (props) => {
  // console.log(props);
  const { city } = useParams();

  const [searchText, setSearchText] = useState("");

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
  // const scenicSpot = [];
  // const loading = false;

  useEffect(() => {
    console.log(targetState.inView);
    if (targetState.inView && window.scrollY < 100) {
      console.log("ref act initial", skipNums);
    }
    if (targetState.inView && window.scrollY > 100) {
      let updateSkip = skipNums + 30;
      setSkipNums(updateSkip);
      console.log("ref act below", updateSkip);
    }
  }, [targetState.inView]);

  return (
    <>
      <Title heading={cityName ? `${cityName}景點` : `全台景點`} />
      <SpotListContainer>
        <OverviewListContainer scenicSpot={scenicSpot} />
        {/* {scenicSpot.map((item, index) => {
          return <Spot key={index} item={item} />;
        })} */}

        <SpotObserver ref={loadRef} loading={loading} />
      </SpotListContainer>
    </>
  );
};

export default SpotList;
