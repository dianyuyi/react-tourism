import React from "react";
import styled from "styled-components";
import { jsx, css } from "@emotion/react";
import CircleLoader from "react-spinners/CircleLoader";

const Loading = ({ loading }) => {
  const [color, setColor] = React.useState("#ccc");

  const override = css`
    display: block;
    margin: 0 auto;
    border-color: #222;
  `;

  return (
    <LoadingBox>
      <CircleLoader color={color} loading={loading} css={override} size={150} />
    </LoadingBox>
  );
};

export default Loading;

const LoadingBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: #fff;
  z-index: 9999;
  position: fixed;

  .box {
    width: 100%;
    max-width: 300px;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .box #L-left {
    transform-origin: left center;
    animation: name-l 3s ease-in-out 3s both;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }
  .box #L-bottom {
    transform-origin: left top;
    animation: name-l-b 3s ease-in-out 3s both;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }
  .box #O {
    transform-origin: left center;
    animation: name-o 3s ease-in-out 3s both;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }
  .box #X {
    transform-origin: left center;
    animation: name-x 3s ease-in-out 3s both;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }
  .box #X #X-center {
    animation: name-x-c 3s ease-in-out 3s both;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }
  .box #I-point {
    transform-origin: left center;
    animation: name-i-p 3s ease-in-out 3s both;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }
  .box #I-line {
    transform-origin: left center;
    animation: name-i-l 3s ease-in-out 3s both;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }

  @keyframes box-open {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes name-l {
    0% {
      transform: translateX(0px);
    }
    100% {
      transform: translateX(-80px) scaleY(0.65);
    }
  }
  @keyframes name-l-b {
    0% {
      transform: translateX(0px);
    }
    100% {
      transform: translate(-80px, -10px) scale(0.3, 0.9);
    }
  }
  @keyframes name-o {
    0% {
      transform: translateX(0px);
    }
    100% {
      transform: translateX(-30px) scale(0.68);
    }
  }
  @keyframes name-x {
    0% {
      transform: translateX(0px);
    }
    100% {
      transform: translateX(60px) scale(0.8);
    }
  }
  @keyframes name-x-c {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  @keyframes name-i-p {
    0% {
      transform: translateX(0px);
    }
    100% {
      transform: translateX(60px) scale(0.8);
    }
  }
  @keyframes name-i-l {
    0% {
      transform: translateX(0px);
    }
    100% {
      transform: translate(60px, 5px) scale(0.8, 0.65);
    }
  }
`;
