import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";

import {
  SearchContainer,
  SearchForm,
  SearchInputBox,
  SearchBtn,
} from "../styles/search/search_bar";
import { citys } from "../data/citys";
import { FaSearchLocation } from "react-icons/fa";
import { useGlobalContext } from "../context";

const SearchBar = (props) => {
  const { setSearchText, searchText } = useGlobalContext();
  const { register, handleSubmit } = useForm();
  const { color, history } = props;

  const submitData = (data) => {
    setSearchText(data.search);
    props.history.push(`/scenicSpot/${data.city}`);
  };

  useEffect(() => {
    if (searchText && history.location === "/") {
      setSearchText("");
    }
  }, [searchText]);
  return (
    <SearchContainer>
      <SearchForm onSubmit={handleSubmit(submitData)} color={color}>
        <SearchInputBox>
          <input
            type="text"
            name="search"
            placeholder="山、海，任何想去的地方"
            ref={register}
          />
          <FaSearchLocation />
        </SearchInputBox>

        <select name="city" ref={register}>
          {citys.map((city, index) => {
            return (
              <option value={city.value} key={index}>
                {city.name}
              </option>
            );
          })}
        </select>
        <SearchBtn type="submit" value="搜尋">
          搜尋
        </SearchBtn>
      </SearchForm>
    </SearchContainer>
  );
};

export default withRouter(SearchBar);
