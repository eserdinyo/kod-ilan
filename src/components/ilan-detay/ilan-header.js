import React from "react";

export const IlanHeader = props => {
  const { ilan } = props;
  return (
    <div className="ilan-header">
      <div className="container">
        <div className="ilan-header__body">
          <div className="ilan-header__title">
            <h1>{ilan && ilan.title}</h1>
          </div>
          <div className="ilan-header__type">{ilan && ilan.type}</div>
          <div className="ilan-header__button">Paylaş</div>
        </div>
      </div>
    </div>
  );
};
