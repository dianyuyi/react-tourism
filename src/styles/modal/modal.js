import styled from "styled-components";
import variables from "../common/variables";
import { motion } from "framer-motion";

export const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 99;
`;
export const ModalContainer = styled(motion.div)`
  width: 70%;
  height: 60%;
  padding: 0.5rem;
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: left;
  border-radius: 5px;
  overflow-y: scroll;
  @media screen and (max-width: ${variables.breakpointPhone}) {
    width: 90%;
    height: 70%;
  }
`;
export const ModalTitle = styled.h2`
  font-size: 1.5rem;
  margin: 0.75rem;
`;
export const ModalArticle = styled.div`
  /* display: flex; */
  float: left;
  border-bottom: solid 1px ${variables.grey};
  margin: 0.5rem 1rem;
  p {
    line-height: 1.2rem;
    margin-bottom: 0.5rem;
    color: ${variables.darkGrey};
  }
`;
export const ModalImg = styled.img`
  float: left;
  max-width: 100%;
  max-height: 180px;
  object-fit: cover;
  padding-right: 1rem;
  margin-bottom: 0.5rem;
`;
export const ModalP = styled.p`
  font-size: 0.875rem;
  margin: 0.25rem 0;
  text-indent: -0.5rem;
  margin-left: 1rem;
  line-height: 1rem;
  letter-spacing: 0.2px;
  color: ${variables.darkGrey};
`;
export const CloseButton = styled.svg`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 18px;
  top: 18px;
  cursor: pointer;
`;
