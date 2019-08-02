import React from "react";

import formatDate from '../utils/date';
import postType from '../utils/postType';
import { Tag, Badge } from '../elements';

const ilan = ({ position, company, location, tags, type, created_at }) => {
  return (
    <div className="ilan">
      <img src={company.logo} alt="ilan-logo" className="ilan__logo" />
      <div className="ilan__body">
        <div className="ilan__body--top">{position}</div>
        <div className="ilan__body--bottom">
          <div className="ilan__body--bottom-company">{company.name}</div>
          <div className="ilan__body--bottom--location">
            <div className="ilan__location">{location}</div>
          </div>
        </div>
        <div className="ilan__body--tags">
          {tags.map((tag, idx) =>
            <Tag key={idx}>{tag.name}</Tag>
          )}
        </div>
      </div>
      <div className="ilan__right">
        <Badge >{postType(type)}</Badge>
        <div className="ilan__time"> {formatDate(created_at)}</div>
      </div>
    </div>
  );
};

export default ilan;
