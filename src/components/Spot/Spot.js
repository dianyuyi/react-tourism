import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { SpotFig, ImgBox, IntroBox } from "../../styles/scenic/spot";
import { LazyLoadImage } from "react-lazy-load-image-component";
import noImage from "../../assets/imgs/noImage2.png";
import { useGlobalContext } from "../../context";

const Spot = ({ item }) => {
  const { setIsModalOpen, setSelectSpot } = useGlobalContext();
  const getClickSpot = () => {
    setIsModalOpen(true);
    setSelectSpot(item);
  };
  const {
    ID,
    Name,
    Address,
    DescriptionDetail,
    TravelInfo,
    Picture,
    City,
    Position,
  } = item;
  return (
    <SpotFig key={ID} onClick={getClickSpot}>
      <ImgBox>
        <LazyLoadImage
          className="spot-img"
          src={Picture && Picture.PictureUrl1 ? Picture.PictureUrl1 : noImage}
          alt={
            Picture && Picture.PictureDescription1
              ? Picture.PictureDescription1
              : Name
          }
          effect="blur"
        />
      </ImgBox>
      <IntroBox>
        <h3>{Name}</h3>
        <h4>{Address}</h4>
        <p>{DescriptionDetail}</p>
      </IntroBox>
    </SpotFig>
  );
};

export default Spot;
