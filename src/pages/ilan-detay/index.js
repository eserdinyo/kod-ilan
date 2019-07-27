import React, { useState, useEffect } from "react";

import { IlanHeader } from "./ilan-header";
import { IlanInfo } from "./ilan-info";
import IlanBox from "./ilan-box";


const IlanPage = (props) => {

  const [ilan, setIlan] = useState({});
  const [ilanlar] = useState([
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
  ]);

  useEffect(() => {
    const ilan = ilanlar[props.match.params.id];
    setIlan(ilan);
    window.scrollTo(0, 0); // Scrool page to up
  }, []);


  return (
    <div>
      <IlanHeader ilan={ilan} />
      <div className="container">
        <div className="ilan__detail">
          <IlanInfo />
          <IlanBox />
        </div>
      </div>
    </div>
  );
}

export default IlanPage;
