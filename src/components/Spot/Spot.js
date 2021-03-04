import React from "react";
// import { Link } from "react-router-dom";
import { SpotFig, ImgBox, IntroBox } from "../../styles/scenic/spot";
import { LazyLoadImage } from "react-lazy-load-image-component";
import noImage from "../../assets/imgs/noImage2.png";

const Spot = ({ item, index }) => {
  // console.log(item);
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
    <SpotFig key={index}>
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
        {/* <Link to={`/scenicspot/${id}`} className="btn btn-primary btn-details">
          details
        </Link> */}
      </IntroBox>
    </SpotFig>
  );
};

export default Spot;
