import React from "react";

const SearchBox = () => (
  <div className="search-box">
    <div className="container">
      <div className="search-box__body">
        <div className="search-box__title">İlan Ara</div>
        <div className="search-box__form">
          <input type="text" placeholder="Pozisyon adı, teknoloji adı" />
          <input type="text" placeholder="Şehir" />
          <button>Ara</button>
        </div>
      </div>
    </div>
  </div>
);

export default SearchBox;
