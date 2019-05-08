import React from "react";
import logo from "../assets/ilan-logo.png";

const ilan = props => {
  const { ilan } = props;

  return (
    <div className="ilan">
      <img src={logo} alt="ilan-logo" className="ilan__logo" />
      <div className="ilan__body">
        <div className="ilan__body--top">{ilan.title}</div>
        <div className="ilan__body--bottom">
          <div className="ilan__body--bottom-company">{ilan.company}</div>
          <div className="ilan__body--bottom--location">
            <div className="ilan__location">{ilan.location}</div>
          </div>
        </div>
        <div className="ilan__body--tags">
          <div className="ilan__body--tags-tag">docker</div>
          <div className="ilan__body--tags-tag">php</div>
          <div className="ilan__body--tags-tag">javascript</div>
          <div className="ilan__body--tags-tag">react</div>
          <div className="ilan__body--tags-tag">react-native</div>
        </div>
      </div>
      <div className="ilan__right">
        <div className="ilan__type">{ilan.type}</div>
      </div>
    </div>
  );
};

export default ilan;
