import React from "react";
import { AnimatePresence } from "framer-motion";
import {
  Overlay,
  ModalContainer,
  ModalTitle,
  ModalArticle,
  ModalImg,
  ModalP,
  CloseButton,
} from "../../../styles/modal/modal";
import noImage from "../../../assets/imgs/noImage2.png";

const modalVariant = {
  initial: { opacity: 0 },
  isOpen: { opacity: 1 },
  exit: { opacity: 0 },
};
const containerVariant = {
  initial: { top: "-50%", transition: { type: "spring" } },
  isOpen: { top: "50%" },
  exit: { top: "-50%" },
};

const Modal = ({ isModalOpen, selectSpot, setIsModalOpen }) => {
  const {
    ID,
    Name,
    Address,
    DescriptionDetail,
    TravelInfo,
    Picture,
    City,
    Position,
  } = selectSpot;
  return (
    <AnimatePresence>
      {isModalOpen && (
        <Overlay
          initial={"initial"}
          animate={"isOpen"}
          exit={"exit"}
          variants={modalVariant}
        >
          <ModalContainer variants={containerVariant}>
            <CloseButton
              onClick={() => setIsModalOpen(false)}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20.39 20.39"
            >
              <title>close</title>
              <line
                x1="19.39"
                y1="19.39"
                x2="1"
                y2="1"
                fill="none"
                stroke="#4d4d4d"
                strokeMiterlimit="10"
                strokeWidth="4"
              />
              <line
                x1="1"
                y1="19.39"
                x2="19.39"
                y2="1"
                fill="none"
                stroke="#4d4d4d"
                strokeMiterlimit="10"
                strokeWidth="4"
              />
            </CloseButton>
            <ModalTitle>{Name}</ModalTitle>
            <ModalArticle>
              <ModalImg
                src={
                  Picture && Picture.PictureUrl1 ? Picture.PictureUrl1 : noImage
                }
                alt={
                  Picture && Picture.PictureDescription1
                    ? Picture.PictureDescription1
                    : Name
                }
              />
              <p>{DescriptionDetail}</p>
            </ModalArticle>
            <ModalP>【景點位置】{Address ? Address : "暫無"}</ModalP>
            <ModalP>【旅遊資訊】{TravelInfo ? TravelInfo : "暫無"}</ModalP>
            {/* <ModalP>【景點縣市】{City ? City : "依分類"}</ModalP> */}
          </ModalContainer>
        </Overlay>
      )}
    </AnimatePresence>
  );
};

export default Modal;
