import React from "react";

import formatDate from '../utils/date';
import postType from '../utils/postType';

const ilan = ({ ilan }) => {
  return (
    <div className="ilan">
      <img src={ilan.company.logo} alt="ilan-logo" className="ilan__logo" />
      <div className="ilan__body">
        <div className="ilan__body--top">{ilan.position}</div>
        <div className="ilan__body--bottom">
          <div className="ilan__body--bottom-company">{ilan.company.name}</div>
          <div className="ilan__body--bottom--location">
            <div className="ilan__location">{ilan.location}</div>
          </div>
        </div>
        <div className="ilan__body--tags">
          {ilan.tags.map((tag, idx) =>
            <div key={idx} className="ilan__body--tags-tag">{tag.name}</div>
          )}
        </div>
      </div>
      <div className="ilan__right">
        <div className="ilan__type">{postType(ilan.type)}</div>
        <div className="ilan__time"> {formatDate(ilan.created_at)}</div>
      </div>
    </div>
  );
};

export default ilan;
