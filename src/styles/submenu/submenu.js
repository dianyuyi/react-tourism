import styled from "styled-components";
import variables from "../common/variables";
import { Link } from "react-router-dom";

export const SubContainer = styled.div`
  position: absolute;
  opacity: ${({ pos }) => (pos ? `1` : `0`)};
  z-index: 99999;
  width: 100px;
  height: auto;
  text-align: center;
  transition: 0.2s;
  left: ${({ pos }) => (pos ? `${pos.posX}px` : `0`)};
  top: ${({ pos }) => (pos ? `${pos.posY}px` : `0`)};
`;

export const SubFolderMenu = styled.div`
  padding: 0.25rem 0.5rem;
  border: solid 1px ${variables.grey};
  position: relative;
  transition: 0.2s;

  &:before {
    content: "";
    position: absolute;
    top: 6px;
    left: -10px;
    transition: 0.2s;
  }
  &.active {
    background: ${variables.darkGrey};
    color: ${variables.inverse};
    border: solid 1px ${variables.darkGrey};
    cursor: pointer;

    &:before {
      border-top: 6px solid transparent;
      border-bottom: 6px solid transparent;
      border-right: 12px solid ${variables.darkGrey};
    }
  }
`;

export const SubFolderSec = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  opacity: ${({ isOpen }) => (isOpen ? `1` : `0`)};
  position: absolute;
  left: -80px;
  top: ${({ areaPos }) => (areaPos ? `${areaPos}px` : `0px`)};
  width: 80px;
  justify-content: center;
`;

export const SubFolderSecItem = styled(Link)`
  padding: 0.25rem 0.5rem;
  margin: 1px;
  color: ${variables.primary};
  background: ${variables.grey};
  transition: 0.2s;

  &:hover {
    background: ${variables.darkGrey};
    color: ${variables.inverse};
  }
`;
