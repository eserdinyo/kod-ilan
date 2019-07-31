import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SearchBox from '../components/SearchBox';
import Ilanlar from '../components/ilanlar';

const Home = (props) => {

  const isLoggedIn = useSelector(store => store.authReducer.isLoggedIn);


  useEffect(() => {
    console.log(isLoggedIn);
  }, []);


  return (
    <div>
      <SearchBox />
      <Ilanlar />
    </div>
  )
}

export default Home