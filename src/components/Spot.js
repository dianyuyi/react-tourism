import React from "react";
// import { Link } from "react-router-dom";
import { SpotFig, ImgBox, IntroBox } from "../styles/scenic/spot";
import noImage from "../assets/imgs/noImage2.png";

const Spot = ({ item }) => {
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
    <SpotFig key={ID}>
      <ImgBox>
        <img
          src={Picture && Picture.PictureUrl1 ? Picture.PictureUrl1 : noImage}
          alt={
            Picture && Picture.PictureDescription1
              ? Picture.PictureDescription1
              : Name
          }
        />
      </ImgBox>
      <IntroBox>
        <h3>{Name}</h3>
        <h4>{Address}</h4>
        <p>{DescriptionDetail}</p>
        {/* <Link to={`/scenicspot/${id}`} className="btn btn-primary btn-details">
          details
        </Link> */}
      </IntroBox>
    </SpotFig>
  );
};

export default Spot;
