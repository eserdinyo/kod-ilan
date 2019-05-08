import React, { Component } from "react";
import { Link } from "react-router-dom";
import Ilan from "./ilan";

class ilanlar extends Component {
  state = {
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

  render() {
    const { ilanlar } = this.state;

    return (
      <div className="container">
        <div className="son-ilanlar">
          <h3 className="son-ilanlar__title">En son eklenen ilanlar</h3>
          <div className="son-ilanlar__list">
            {ilanlar.map((ilan, idx) => (
              <Link key={idx} to={`/ilanlar/${idx}`}  style={{ textDecoration: "none" }}>
                <Ilan key={idx} ilan={ilan} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default ilanlar;
