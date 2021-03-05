import React from "react";
import { motion } from "framer-motion";
import { Title } from "../components";
import {
  AboutContainer,
  IntroContext,
  IntroTitle,
  IntroList,
  IntroItem,
  BtnContainer,
  OuterLinkBtn,
} from "../styles/about/about";
import {
  FaSearchLocation,
  FaMapMarkedAlt,
  FaRegQuestionCircle,
} from "react-icons/fa";

const About = () => {
  const url = "https://ptx.transportdata.tw/MOTC?t=Tourism&v=2#";
  const url2 = "https://ptx.transportdata.tw/PTX/";
  const MotcUrl = (e) => {
    e.preventDefault();
    window.open(url, "_blank");
  };
  const PTXUrl = (e) => {
    e.preventDefault();
    window.open(url, "_blank");
  };
  return (
    <motion.div exit={{ opacity: 0 }}>
      <Title heading="網站相關" />

      <AboutContainer>
        <IntroContext>
          <IntroTitle>簡易功能介紹</IntroTitle>
          <IntroList>
            <IntroItem>
              <FaSearchLocation />
              搜尋景點：依照景點中的描述，過濾並回傳含有關鍵字的資料。點擊景點會顯示較詳細的說明視窗。
            </IntroItem>
            <IntroItem>
              <FaMapMarkedAlt />
              全台景點：除了全台的總類外，依序分成東、西、南、北、離島，總共六類。分類方式參考台灣觀光局的做法。
            </IntroItem>
            <IntroItem>
              <FaRegQuestionCircle className="small" />
              網站相關：資料來源及功能簡易說明。
            </IntroItem>
          </IntroList>
          <p>相關文件及連結請參照官方文件。</p>
        </IntroContext>
        <IntroContext>
          <IntroTitle>資料來源</IntroTitle>
          <IntroList>
            <IntroItem>・串接API：MOTC Transport API V2 / Tourism</IntroItem>
            <IntroItem>・首頁影片：Pixels</IntroItem>
          </IntroList>

          <p>
            提供全台觀光景點的位置及簡易預覽。API的使用方式及相關連結請參照官方範例說明。
          </p>
        </IntroContext>
        <BtnContainer>
          <OuterLinkBtn
            onClick={(e) => MotcUrl(e)}
            to={url}
            target="_blank"
            rel="noreferrer noopener"
          >
            MOTC API
          </OuterLinkBtn>
          <OuterLinkBtn
            onClick={(e) => PTXUrl(e)}
            to={url2}
            target="_blank"
            rel="noreferrer noopener"
          >
            PTX 平台
          </OuterLinkBtn>
        </BtnContainer>
      </AboutContainer>
    </motion.div>
  );
};

export default About;
