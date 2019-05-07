import React, { Component } from "react";

import { IlanHeader } from "./ilan-header";
import { IlanInfo } from "./ilan-info";
import IlanBox from './ilan-box';


class IlanPage extends Component {
  render(props) {
    console.log(this.props.match.params.id);

    return (
      <div>
        <IlanHeader />
        <div className="container">
          <div className="ilan__detail">
            <IlanInfo />
            <IlanBox />
          </div>
        </div>
      </div>
    );
  }
}

export default IlanPage;
