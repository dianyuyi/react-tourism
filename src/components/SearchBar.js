import React from "react";
import { SearchContainer, SearchForm } from "../styles/search/search_bar";
import { citys } from "../data/citys";

const SearchBar = () => {
  return (
    <SearchContainer>
      <SearchForm>
        <input type="text" placeholder="輸入景點名稱" />
        <select name="citys">
          {citys.map((city, index) => {
            return (
              <option value={city} key={index}>
                {city}
              </option>
            );
          })}
          {/* <option value="test1">test1</option>
          <option value="test2">test2</option> */}
        </select>
      </SearchForm>
    </SearchContainer>
  );
};

export default SearchBar;
