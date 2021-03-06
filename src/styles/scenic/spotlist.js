import styled from "styled-components";
import variables from "../common/variables";

export const SpotListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* place-content: center; */
  width: 100%;
  text-align: center;
  padding: 0 ${variables.gutter};
`;

export const SpotListNotice = styled.div`
  width: 100%;
`;
export const SpotListSearchP = styled.p`
  font-size: 1.25rem;
  padding-bottom: 0.5rem;
  text-align: center;
  margin: 0.5rem auto;
`;

export const SpotListVoid = styled.p`
  font-size: 1.5rem;
  margin: 1rem;
  padding-bottom: 0.5rem;
`;
