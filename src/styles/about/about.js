import styled from "styled-components";
import variables from "../common/variables";
import { Link } from "react-router-dom";

export const AboutContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 ${variables.gutter};
  margin: 3rem 0 2rem 0;
  margin: 0 auto;
  @media only screen and (max-width: ${variables.breakpointTablet}) {
    width: 100%;
    padding: 0 ${variables.gutter};
  }
`;

export const IntroContext = styled.div`
  margin: 0 auto;
  width: 50%;
  padding: 1rem;
  background: ${variables.inverse};
  border-top: solid 1px ${variables.lightGrey};
  p {
    font-size: 1.15rem;
    font-weight: 300;
    line-height: 1.75rem;
    padding-top: 0.5rem;
    text-align: justify;
  }
  @media only screen and (max-width: ${variables.breakpointPhone}) {
    width: 90%;
  }
`;
export const IntroTitle = styled.h2`
  font-size: 1.25rem;
  margin: 0.5rem 0;
  padding: 0.5rem 0;
  border-bottom: 1px solid ${variables.primary};
`;
export const IntroList = styled.div`
  font-size: 1.15rem;
  letter-spacing: 1px;
  margin: 0.5rem 0;
  font-weight: 300;
`;
export const IntroItem = styled.div`
  display: flex;
  font-size: 1rem;
  margin: 1rem 0;
  padding-left: 0.5rem;
  /* border-left: 1px solid ${variables.primary}; */
  svg {
    font-size: 2rem;
    margin: 0 1rem;
    &.small {
      font-size: 1rem;
    }
  }
`;

export const BtnContainer = styled.div`
  margin: 1rem auto;
  padding-bottom: 2rem;
  text-align: center;
`;
export const OuterLinkBtn = styled(Link)`
  border: 1px solid ${variables.darkGrey};
  color: ${variables.primary};
  font-size: 1rem;
  font-weight: 300;
  margin: 0.5rem;
  padding: 0.5rem 1.5rem;
  box-shadow: inset -2px -2px 0 rgba(0, 0, 0, 1);
  transition: 0.3s;
  &:hover {
    transform: translate(2px, 2px);
    box-shadow: inset 2px 2px 1px rgba(0, 0, 0, 0.5);
  }
`;
