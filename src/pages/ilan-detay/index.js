import React, { useState, useEffect } from "react";
import axios from 'axios';

import { IlanHeader } from "./ilan-header";
import { IlanInfo } from "./ilan-info";
import IlanBox from "./ilan-box";
import Loader from '../../components/Loader';


const http = axios.create({
  baseURL: 'https://api.kodilan.com',
});

const IlanPage = ({ match }) => {

  const [ilan, setIlan] = useState({});
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchBySlug();
    window.scrollTo(0, 0); // Scrool page to up
    // eslint-disable-next-line
  }, []);


  function fetchBySlug() {
    http.get(`/posts/${match.params.slug}`)
      .then(res => {
        setIlan(res.data)
        setIsLoading(false);
        console.log(res.data);
      });
  }

  return (
    <div>
      {
        !isLoading &&
        (
          <div>
            <IlanHeader position={ilan.position} type={ilan.type} />
            <div className="container">
              <div className="ilan__detail">
                <IlanInfo company={ilan.company} desc={ilan.description} />
                <IlanBox position={ilan.position} location={ilan.location} tags={ilan.tags} www={ilan.company.www} />
              </div>
            </div>
          </div>
        )
      }

      <div className='loader-wrapper'>
        {
          isLoading &&
          <Loader />
        }
      </div>
    </div>

  );
}

export default IlanPage;
