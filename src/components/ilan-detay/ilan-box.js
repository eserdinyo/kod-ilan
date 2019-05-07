import React from "react";

export const IlanBox = () => (
  <div className="ilan-box">
    <div className="ilan-box__item">
      <div className="ilan-box__title">Pozisyon</div>
      <div className="ilan-box__desc">Stajyer Developer</div>
    </div>
    <div className="ilan-box__item">
      <div className="ilan-box__title">Lokasyon</div>
      <div className="ilan-box__desc">Ankara</div>
    </div>
    <div className="ilan-box__item">
      <div className="ilan-box__title">Website</div>
      <div className="ilan-box__desc">https://www.kodiasoft.com</div>
    </div>

    <div className="ilan-box__tags">
      <div className="ilan-box__tag">html</div>
      <div className="ilan-box__tag">css</div>
      <div className="ilan-box__tag">java</div>
      <div className="ilan-box__tag">ruby</div>
      <div className="ilan-box__tag">backend</div>
      <div className="ilan-box__tag">frontend</div>
    </div>
        <a className="ilan-box__button" href="">E-posta ile başvur</a>
        <a className="ilan-box__button" href="">Site üzerinden başvur</a>
  </div>
);

export default IlanBox;
