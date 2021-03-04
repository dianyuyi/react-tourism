import styled from "styled-components";
import variables from "../common/variables";
import { LazyLoadImage } from "react-lazy-load-image-component";
// import { Link } from "react-router-dom";

export const SpotFig = styled.figure`
  /* width: 22.5%; */
  margin: 1.25%;
  padding-bottom: 0.5rem;
  border-radius: 5px;
  overflow: hidden;

  @media screen and (max-width: ${variables.breakpointLaptop}) {
    /* width: 30%;
    margin: 1.5%; */
  }
  @media screen and (max-width: ${variables.breakpointPhone}) {
    /* width: 45%;
    margin: 2%; */
  }
`;
export const ImgBox = styled.div`
  width: 100%;
  background-color: ${variables.lightGrey};
  text-align: center;
  min-height: 150px;
  overflow: hidden;

  .spot-img {
    /* max-width: 100%; */
    /* min-height: 200px; */
    height: 150px;
    width: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: ${variables.breakpointPhone}) {
    /* height: 160px; */

    .spot-img {
      /* min-height: 160px; */
    }
  }
`;

export const IntroBox = styled.div`
  width: 100%;

  h3 {
    text-align: center;
    font-size: 1.15rem;
    margin: 0.25rem auto;
    font-weight: 500;
  }
  h4 {
    background: ${variables.waterBlue};
    color: ${variables.inverse};
    border-radius: 5px;
    text-align: center;
    font-size: 0.75rem;
    padding: 0.15rem 1rem;
    margin-bottom: 0.2rem;
  }

  p {
    overflow: hidden;
    line-height: 1.15rem;
    max-height: 40px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
`;
