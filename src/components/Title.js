import React from "react";
// import * as Fade from "react-reveal/Fade";
import { MainTitleContainer, MainTitle, TitleBg } from "../styles/title/title";

const Title = ({ heading }) => {
  return (
    <MainTitleContainer>
      {/* <Fade top> */}
      <MainTitle>{heading}</MainTitle>
      {/* </Fade> */}
      {/* <TitleBg /> */}
    </MainTitleContainer>
  );
};

export default Title;
