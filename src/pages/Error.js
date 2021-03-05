import React from "react";
import { Link } from "react-router-dom";
import {
  ErrorContainer,
  ErrorTitle,
  ErrorBackLink,
} from "../styles/error/error";

const Error = () => {
  return (
    <ErrorContainer>
      <ErrorTitle>啊呀～你竟然逛到了偷懶用的頁面！</ErrorTitle>
      <ErrorTitle>快用傳送門回去吧._.b</ErrorTitle>
      <ErrorBackLink to="/">傳送門底加喔</ErrorBackLink>
    </ErrorContainer>
  );
};

export default Error;
