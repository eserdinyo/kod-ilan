import React from "react";
import logo from "../../assets/ilan-logo.png";

export const IlanInfo = ({ company, desc }) => (
  <div style={{ flexGrow: 1, marginRight: 20 }}>
    <div className="ilan-info__header">
      <div className="ilan-info__header--logo">
        <img src={company.logo} alt="ilan logo" />
      </div>
      <div className="ilan-info__header--info">
        <h4 className="ilan-info__header--info-title">
          {company.name}
        </h4>
        <div className="ilan-info__header--info-bottom">
          <a target='_blank' href="{company.www}">Website</a>
          <a target='_blank' href="{company.twitter}">@{company.name}</a>
          <a target='_blank' href="{company.linkedin}">{company.linkedin}</a>
        </div>
      </div>
    </div>
    <div className="ilan-info__desc" dangerouslySetInnerHTML={{ __html: desc }} />
  </div>
);

