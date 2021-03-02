import React, { useRef, useState, useEffect, memo } from "react";
import { Spot, Title, SpotObserver } from "../../components";
import { SpotListContainer } from "../../styles/scenic/spotlist";
import { FixedSizeGrid as Grid } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import { useIntersectionObserver } from "../../hook/useIntersectionObserver";
import { useCityNameTrans } from "../../hook/useCityNameTrans";
import { useScrollFetch } from "../../hook/useScrollFetch";
import { useParams } from "react-router-dom";
import { testData } from "../../data/testdata";
import noImage from "../../assets/imgs/noImage2.png";

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
  // const { loading, scenicSpot } = useScrollFetch(
  //   skipNums,
  //   searchText,
  //   cityParams
  // );
  // tmp test
  const scenicSpot = testData;
  const loading = false;

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

  // const Cell = ({ columnIndex, rowIndex, style, data }) => {
  //   const { scenicSpot, columnCount } = data;
  //   const singleColumnIndex = columnIndex + rowIndex * columnCount;
  //   const spot = scenicSpot[singleColumnIndex];
  //   console.log(singleColumnIndex);
  //   return <div style={style}>{spot && <Spot item={spot} />}</div>;
  // };

  return (
    <>
      <Title heading={cityName ? `${cityName}景點` : `全台景點`} />
      {/* <AutoSizer defaultWidth={2300} defaultHeight={1080}>
        {({ width, height }) => {
          const cardWidth = 280;
          const cardHeight = 300;
          const columnCount = Math.floor(width / cardWidth);
          const rowCount = Math.ceil(scenicSpot.length / columnCount);

          return (
            <Grid
              width={cardWidth}
              height={cardHeight}
              columnCount={columnCount}
              columnWidth={cardWidth}
              rowCount={rowCount}
              rowHeight={cardHeight}
              itemData={{ scenicSpot, columnCount }}
            >
              {Cell}
            </Grid>
          );
        }}
      </AutoSizer> */}
      <SpotListContainer>
        {scenicSpot.map((item, index) => {
          return <Spot key={index} item={item} />;
        })}

        <SpotObserver ref={loadRef} loading={loading} />
      </SpotListContainer>
    </>
  );
};

export default SpotList;
