import React, { useRef, useEffect } from "react";
import { Spot, Title, SpotObserver } from "../components";

import { SpotListContainer } from "../styles/scenic/spotlist";
import { useIntersectionObserver } from "../hook/useIntersectionObserver";
import { useCityNameTrans } from "../hook/useCityNameTrans";
import { useParams } from "react-router-dom";

const SpotList = (props) => {
  // console.log(props);
  const { city } = useParams();
  console.log(city);

  const [cityParams, setCityParams] = useState("");
  const [skipNums, setSkipNums] = useState(0);
  const [cityName, setCityName] = useCityNameTrans(city);

  const loadRef = useRef(null);
  const [targetState, setTargetState] = useIntersectionObserver(loadRef, {
    threshold: 1,
  });
  const { loading, scenicSpot } = useScrollFetch(skipNums, cityParams);

  useEffect(() => {
    // if (props && props.match) {
    //   let name = props.location.query;
    //   let value = props.match.params.city;
    // } else if (city && !props.location.query) {
    //   setCityEn(city);
    // } else {
    //   setCityName("");
    //   setCityEn("");
    // }
    console.log(targetState.inView);
    if (targetState.inView) {
      let updateSkip = skipNums + 30;
      setSkipNums(updateSkip);
      console.log("ref act", updateSkip);
    }
  }, [targetState.inView]);

  return (
    <>
      <Title heading={cityName ? `${cityName}景點` : `全台景點`} />
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
