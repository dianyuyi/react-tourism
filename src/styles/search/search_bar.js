import styled from "@emotion/styled";
import variables from "../common/variables";

export const SearchContainer = styled.div`
  background: ${variables.inverse};
  display: flex;
  place-content: center;
  border-radius: 3px;
`;

export const SearchForm = styled.form`
  padding: 0.5rem;

  input,
  select {
    padding: 0.5rem;
    font-size: 1rem;
    border: none;
    outline: none;
  }

  select {
    padding: 0 1rem;
    border-left: solid 1px ${variables.grey};
  }
`;
