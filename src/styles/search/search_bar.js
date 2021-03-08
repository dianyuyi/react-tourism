import styled from "@emotion/styled";
import variables from "../common/variables";

export const SearchContainer = styled.div`
  background: ${variables.inverse};

  display: flex;
  place-content: center;
  border-radius: 3px;
  margin-bottom: 1.5rem;
`;

export const SearchForm = styled.form`
  /* background: ${({ color }) =>
    color === "primary" ? `${variables.primary}` : `${variables.inverse}`}; */
  /* border: ${({ color }) =>
    color === "primary"
      ? `solid 1px ${variables.primary}`
      : `solid 1px ${variables.inverse}`}; */
  box-shadow: 0px 2px 5px rgb(0 0 0 / 20%);
  border-radius: 3px;

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
export const SearchInputBox = styled.div`
  display: inline-block;
  background: ${variables.inverse};
  padding: 0 0.25rem 0 0.5rem;
  svg {
    color: ${variables.grey};
    margin-right: 0.5rem;
  }
  input {
    min-width: 200px;
  }

  @media only screen and (max-width: ${variables.breakpointPhone}) {
    padding: 0.5rem 0;
  }
`;
export const SearchBtn = styled.button`
  padding: 0.75rem 1rem;
  margin-left: 0.5rem;
  font-size: 1rem;
  /* border: 1px solid ${variables.darkGrey}; */
  background: ${variables.primary};
  color: ${variables.inverse};
  /* background: ${({ color }) =>
    "primary" ? `${variables.primary}` : `${variables.inverse}`}; */
  @media only screen and (max-width: ${variables.breakpointPhone}) {
    width: 100%;
    display: block;
    margin-left: 0;
    padding: 0.5rem;
  }
`;
