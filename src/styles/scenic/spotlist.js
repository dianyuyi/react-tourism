import styled from "styled-components";
import variables from "../common/variables";

export const SpotListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  place-content: center start;
  width: 100%;
  padding: 0 ${variables.gutter};
`;
