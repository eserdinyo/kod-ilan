import React from "react";
import { Search } from 'react-feather';

import { SearchButton, SearchInput, SearchSelect } from '../elements';
import locations from '../assets/data/locations';

const SearchBox = () => (
  <div className="search-box">
    <div className="container">
      <div className="search-box__body">
        <div className="search-box__title">İlan Ara</div>
        <div className="search-box__form">
          <SearchInput type="text" placeholder="Pozisyon adı, teknoloji adı" />
          <SearchSelect>
            <option value="" selected> Şehir seçiniz...</option>
            {
              locations.map(location =>
                <option value="">{location}</option>
              )
            }

          </SearchSelect>
          <SearchButton primary>
            <Search />
          </SearchButton>
        </div>
      </div>
    </div>
  </div>
);

export default SearchBox;
