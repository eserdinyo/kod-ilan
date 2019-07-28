import React from "react";

import postType from '../../utils/postType';

export const IlanHeader = ({ position, type }) => (
  <div className="ilan-header">
    <div className="container">
      <div className="ilan-header__body">
        <div className="ilan-header__title">
          <h1>{position}</h1>
        </div>
        <div className="ilan-header__type">{postType(type)}</div>
        <div className="ilan-header__button">Paylaş</div>
      </div>
    </div>
  </div>
);
