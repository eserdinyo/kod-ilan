import React from "react";
import logo from "../../assets/ilan-logo.png";

export const IlanInfo = () => {
  return (
    <div style={{ flexGrow: 1, marginRight: 20 }}>
      <div className="ilan-info__header">
        <div className="ilan-info__header--logo">
          <img src={logo} alt="ilan logo" />
        </div>
        <div className="ilan-info__header--info">
          <h4 className="ilan-info__header--info-title">
            Kodia Yazılım ve Bilişim Ltd. Şti.
          </h4>
          <div className="ilan-info__header--info-bottom">
            <a href="foo">Website</a>
            <a href="foo">@kodiasoft</a>
            <a href="foo">Kodia Yazılım ve Bilişim Ltd. Şti.</a>
          </div>
        </div>
      </div>
      <div className="ilan-info__desc">
        <p>
          Yazılım geliştirme alanında staj yapmak ister misiniz? <br /> Java,
          Ruby, Javascript, HTML veya CSS teknolojilerinden biri veya birkaçı
          ilgi alanına giriyor ve seni <br /> heyecanlandırıyorsa başvurunu
          bekliyoruz.
        </p>
      </div>
    </div>
  );
};
