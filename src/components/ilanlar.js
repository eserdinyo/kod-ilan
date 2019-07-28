import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

import Ilan from "./ilan";
import Loader from './Loader';

const http = axios.create({
  baseURL: 'https://api.kodilan.com',
});


function Ilanlar() {
  const [ilanlar, setIlanlar] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchPosts();
  }, [])

  function fetchPosts() {
    http.get('/posts?get=25').then(res => {
      setIlanlar(res.data.data);
      console.log(res.data.data);

      setIsLoading(false)
    })
  }

  return (
    <div className="container">
      <div className="son-ilanlar">
        <h3 className="son-ilanlar__title">En son eklenen ilanlar</h3>
        {
          !isLoading &&
          (
            <div className="son-ilanlar__list">
              {ilanlar.map((ilan, idx) => (
                <Link key={idx} to={`/ilanlar/${ilan.slug}`} style={{ textDecoration: "none" }}>
                  <Ilan key={idx} ilan={ilan} />
                </Link>
              ))}
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
    </div>
  );
}

export default Ilanlar;
