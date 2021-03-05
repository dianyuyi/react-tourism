import styled from "styled-components";
import variables from "../common/variables";

export const SpotListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  place-content: center;
  width: 100%;
  padding: 0 ${variables.gutter};
`;

export const SpotListSearchP = styled.p`
  font-size: 1.25rem;
  padding-bottom: 0.5rem;
`;
