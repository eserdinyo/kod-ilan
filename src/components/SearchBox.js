import React from "react";
import { SearchButton, SearchInput } from '../elements';

const SearchBox = () => (
  <div className="search-box">
    <div className="container">
      <div className="search-box__body">
        <div className="search-box__title">İlan Ara</div>
        <div className="search-box__form">
          <SearchInput type="text" placeholder="Pozisyon adı, teknoloji adı" />
          <SearchInput type="text" placeholder="Şehir" />
          <SearchButton primary>Ara</SearchButton>
        </div>
      </div>
    </div>
  </div>
);

export default SearchBox;
