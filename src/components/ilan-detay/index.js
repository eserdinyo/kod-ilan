import React, { Component } from "react";

import { IlanHeader } from "./ilan-header";
import { IlanInfo } from "./ilan-info";
import IlanBox from "./ilan-box";

class IlanPage extends Component {
  state = {
    ilan: undefined,
    ilanlar: [
      {
        title: "Full-Stack Developer",
        company: "NES Bilgi",
        location: "Izmir",
        type: "Tam Zamanli"
      },
      {
        title: "PHP Gelistirici",
        company: "Drstok Planet",
        location: "Bursa",
        type: "Remote"
      },
      {
        title: "Frontend Developer",
        company: "Protel",
        location: "Istanbul",
        type: "Tam Zamanli"
      }
    ]
  };

  componentDidMount(props) {
    const ilanID = this.props.match.params.id;
    const ilan = this.state.ilanlar[ilanID];
    this.setState({ ilan });
    window.scrollTo(0, 0); // Scrool page to up
  }

  render(props) {
    return (
      <div>
        <IlanHeader ilan={this.state.ilan} />
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
