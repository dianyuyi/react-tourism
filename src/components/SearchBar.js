import React from "react";
import { useForm } from "react-hook-form";
import { SearchContainer, SearchForm } from "../styles/search/search_bar";
import { citys } from "../data/citys";
import { FaSearchLocation } from "react-icons/fa";

const SearchBar = () => {
  const { register, handleSubmit } = useForm();
  const submitData = (data) => {
    console.log(data);
  };
  return (
    <SearchContainer>
      <SearchForm handleSubmit={submitData}>
        <input
          type="text"
          name="searchText"
          placeholder="山、海，任何想去的地方"
          ref={register}
        />
        <FaSearchLocation />
        <select name="citys" ref={register}>
          {citys.map((city, index) => {
            return (
              <option value={city.value} key={index}>
                {city.name}
              </option>
            );
          })}
        </select>
        <button type="submit">搜尋</button>
      </SearchForm>
    </SearchContainer>
  );
};

export default SearchBar;
